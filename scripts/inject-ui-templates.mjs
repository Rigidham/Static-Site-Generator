import fs from 'node:fs';
import path from 'node:path';

const selectionPath = path.join('scripts', 'ui-template-selection.json');
const templateRoot = process.env.UI_TEMPLATE_LIBRARY_ROOT || '';
const manifestPath = templateRoot ? path.join(templateRoot, 'manifest.json') : '';

function log(msg) {
  console.log(`[ui-templates] ${msg}`);
}

if (!fs.existsSync(selectionPath)) {
  log('Selection file not found; skipping template injection.');
  process.exit(0);
}

const selections = JSON.parse(fs.readFileSync(selectionPath, 'utf8') || '{}');
const hasSelections = Object.values(selections || {}).some(
  (scope) => scope && typeof scope === 'object' && Object.keys(scope).length > 0,
);

if (!templateRoot || !fs.existsSync(templateRoot)) {
  if (hasSelections) {
    log('ERROR: UI_TEMPLATE_LIBRARY_ROOT is missing but template injection was requested.');
    process.exit(1);
  }
  log('Template library root missing; skipping (no selections).');
  process.exit(0);
}

if (!manifestPath || !fs.existsSync(manifestPath)) {
  if (hasSelections) {
    log('ERROR: Template manifest not found; cannot apply requested injections.');
    process.exit(1);
  }
  log('Manifest not found; skipping (no selections).');
  process.exit(0);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8') || '{}');

const toPascal = (str = '') =>
  str
    .split(/[-_\s]+/g)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

const applied = [];
const skipped = [];

for (const [scope, scopedMap] of Object.entries(selections || {})) {
  if (!scopedMap || typeof scopedMap !== 'object') continue;
  for (const [component, variant] of Object.entries(scopedMap)) {
    applyTemplate(scope, component, variant);
  }
}

const printSkippedSummary = () => {
  if (!skipped.length) return;
  log('Summary of skipped template injections:');
  for (const entry of skipped) {
    const scopeLabel = entry.scope ? `[${entry.scope}] ` : '';
    log(` - ${scopeLabel}${entry.component || 'unknown'} (${entry.variant || 'n/a'}): ${entry.reason}`);
  }
};

if (!applied.length) {
  log('No matching template selections found.');
  printSkippedSummary();
  process.exit(0);
}

for (const entry of applied) {
  log(`Injected ${entry.component} (${entry.variant}) into ${entry.path}`);
}

printSkippedSummary();

function applyTemplate(scope, component, variant) {
  const cleanedScope = (scope || '').trim().toLowerCase();
  const cleanedComponent = (component || '').trim().toLowerCase();
  const cleanedVariant = (variant || '').trim();

  if (!cleanedScope || !cleanedComponent || !cleanedVariant) return;

  const manifestEntry = manifest[cleanedComponent];
  if (!manifestEntry) {
    recordSkip(cleanedScope, cleanedComponent, cleanedVariant, `Unknown component '${cleanedComponent}' in template selections.`);
    return;
  }

  const variantEntry = manifestEntry.variants?.[cleanedVariant];
  if (!variantEntry) {
    recordSkip(
      cleanedScope,
      cleanedComponent,
      cleanedVariant,
      `Unknown variant '${cleanedVariant}' for component '${cleanedComponent}'.`,
    );
    return;
  }

  const templatePath = path.join(templateRoot, variantEntry.file);
  if (!fs.existsSync(templatePath)) {
    recordSkip(cleanedScope, cleanedComponent, cleanedVariant, `Template file missing at ${templatePath}.`);
    return;
  }

  const slug = cleanedScope === 'global' ? cleanedComponent : `${cleanedComponent}-${cleanedScope}`;
  const selector = `app-${slug}`;
  const className = `${toPascal(slug)}Component`;

  const targetDir = cleanedScope === 'global'
    ? path.join('src', 'app', 'components', cleanedComponent)
    : path.join('src', 'app', 'pages', cleanedScope, 'components', `${cleanedComponent}-${cleanedScope}`);

  const fileName = cleanedScope === 'global'
    ? `${cleanedComponent}.component.ts`
    : `${cleanedComponent}-${cleanedScope}.component.ts`;

  const targetPath = path.join(targetDir, fileName);
  if (!fs.existsSync(targetPath)) {
    recordSkip(cleanedScope, cleanedComponent, cleanedVariant, `Target component ${targetPath} does not exist; run generation first.`);
    return;
  }

  let source = fs.readFileSync(templatePath, 'utf8');
  source = source.replace(/__SELECTOR__/g, selector).replace(/__CLASS_NAME__/g, className);

  fs.writeFileSync(targetPath, source);
  applied.push({ scope: cleanedScope, component: cleanedComponent, variant: cleanedVariant, path: targetPath });
}

function recordSkip(scope, component, variant, reason) {
  skipped.push({ scope, component, variant, reason });
  log(`WARN: ${reason}`);
}
