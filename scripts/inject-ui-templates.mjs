import fs from 'node:fs';
import path from 'node:path';

const selectionPath = path.join('scripts', 'ui-template-selection.json');
const templateRoot = process.env.UI_TEMPLATE_LIBRARY_ROOT || '';
const manifestPath = path.join(templateRoot, 'manifest.json');

function log(msg) {
  console.log(`[ui-templates] ${msg}`);
}

if (!fs.existsSync(selectionPath)) {
  log('Selection file not found; skipping template injection.');
  process.exit(0);
}

if (!templateRoot || !fs.existsSync(templateRoot)) {
  log('Template library root missing; skipping.');
  process.exit(0);
}

if (!fs.existsSync(manifestPath)) {
  log('Manifest not found; skipping.');
  process.exit(0);
}

const selections = JSON.parse(fs.readFileSync(selectionPath, 'utf8') || '{}');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8') || '{}');

const toPascal = (str = '') =>
  str
    .split(/[-_\s]+/g)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

const applied = [];

for (const [scope, scopedMap] of Object.entries(selections || {})) {
  if (!scopedMap || typeof scopedMap !== 'object') continue;
  for (const [component, variant] of Object.entries(scopedMap)) {
    applyTemplate(scope, component, variant);
  }
}

if (!applied.length) {
  log('No matching template selections found.');
  process.exit(0);
}

for (const entry of applied) {
  log(`Injected ${entry.component} (${entry.variant}) into ${entry.path}`);
}

function applyTemplate(scope, component, variant) {
  const cleanedScope = (scope || '').trim().toLowerCase();
  const cleanedComponent = (component || '').trim().toLowerCase();
  const cleanedVariant = (variant || '').trim();

  if (!cleanedScope || !cleanedComponent || !cleanedVariant) return;

  const manifestEntry = manifest[cleanedComponent];
  if (!manifestEntry) {
    log(`WARN: Unknown component '${cleanedComponent}' in template selections.`);
    return;
  }

  const variantEntry = manifestEntry.variants?.[cleanedVariant];
  if (!variantEntry) {
    log(`WARN: Unknown variant '${cleanedVariant}' for component '${cleanedComponent}'.`);
    return;
  }

  const templatePath = path.join(templateRoot, variantEntry.file);
  if (!fs.existsSync(templatePath)) {
    log(`WARN: Template file missing at ${templatePath}.`);
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
    log(`WARN: Target component ${targetPath} does not exist; run generation first.`);
    return;
  }

  let source = fs.readFileSync(templatePath, 'utf8');
  source = source.replace(/__SELECTOR__/g, selector).replace(/__CLASS_NAME__/g, className);

  fs.writeFileSync(targetPath, source);
  applied.push({ scope: cleanedScope, component: cleanedComponent, variant: cleanedVariant, path: targetPath });
}
