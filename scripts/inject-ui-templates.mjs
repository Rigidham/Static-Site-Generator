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
const componentSlugs = Object.keys(manifest || {});

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
  if (hasSelections) {
    log('ERROR: Template injection aborted; no selections could be applied.');
    printSkippedSummary();
    process.exit(1);
  }
  log('No matching template selections found.');
  printSkippedSummary();
  process.exit(0);
}

for (const entry of applied) {
  log(`Injected ${entry.component} (${entry.variant}) into ${entry.path}`);
}

printSkippedSummary();

if (hasSelections && skipped.length) {
  log('ERROR: Template injection completed with errors. See skipped summary above.');
  process.exit(1);
}

function applyTemplate(scope, component, variant) {
  const cleanedScope = (scope || '').trim().toLowerCase();
  const cleanedComponent = (component || '').trim().toLowerCase();
  const cleanedVariant = (variant || '').trim();

  if (!cleanedScope || !cleanedComponent || !cleanedVariant) return;

  const manifestEntry = manifest[cleanedComponent];
  if (!manifestEntry) {
    const suggestion = suggestClosest(cleanedComponent, componentSlugs);
    const reason = suggestion
      ? `Unknown component '${cleanedComponent}' in template selections. Did you mean '${suggestion}'?`
      : `Unknown component '${cleanedComponent}' in template selections.`;
    recordSkip(cleanedScope, cleanedComponent, cleanedVariant, reason);
    return;
  }

  const variantEntry = manifestEntry.variants?.[cleanedVariant];
  if (!variantEntry) {
    const variantSlugs = Object.keys(manifestEntry.variants || {});
    const suggestion = suggestClosest(cleanedVariant, variantSlugs);
    const variantSummary = suggestion
      ? `Did you mean '${suggestion}'?`
      : `Available variants: ${variantSlugs.join(', ') || 'none'}.`;
    recordSkip(
      cleanedScope,
      cleanedComponent,
      cleanedVariant,
      `Unknown variant '${cleanedVariant}' for component '${cleanedComponent}'. ${variantSummary}`,
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
    recordSkip(
      cleanedScope,
      cleanedComponent,
      cleanedVariant,
      `Target component ${targetPath} does not exist; ensure the ${cleanedComponent} component was generated for scope '${cleanedScope}'.`,
    );
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

function levenshtein(a = '', b = '') {
  if (a === b) return 0;
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }
  return matrix[a.length][b.length];
}

function suggestClosest(target, pool = []) {
  if (!target || !pool.length) return null;
  const normalizedTarget = target.toLowerCase();
  let best = { value: null, score: Infinity };
  for (const candidate of pool) {
    const score = levenshtein(normalizedTarget, candidate.toLowerCase());
    if (score < best.score) {
      best = { value: candidate, score };
    }
  }
  const threshold = Math.max(2, Math.floor(normalizedTarget.length * 0.4));
  return best.score <= threshold ? best.value : null;
}
