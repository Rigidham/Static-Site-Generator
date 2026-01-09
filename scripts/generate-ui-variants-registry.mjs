#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const argRootFlagIndex = process.argv.indexOf('--root');
const cliRoot = argRootFlagIndex !== -1 ? process.argv[argRootFlagIndex + 1] : null;

const templateRoot =
  cliRoot ||
  process.env.UI_TEMPLATE_LIBRARY_ROOT ||
  path.join(process.cwd(), 'templates', 'ui-components');

if (!templateRoot) {
  console.error('[ui-variants] ERROR: Template root not provided. Set UI_TEMPLATE_LIBRARY_ROOT or pass --root.');
  process.exit(1);
}

if (!fs.existsSync(templateRoot) || !fs.statSync(templateRoot).isDirectory()) {
  console.error(`[ui-variants] ERROR: Template root ${templateRoot} does not exist or is not a directory.`);
  process.exit(1);
}

const manifestPath = path.join(templateRoot, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error(`[ui-variants] ERROR: Manifest not found at ${manifestPath}.`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8') || '{}');

const slugify = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/-+/g, '-');

const components = {};
let variantCount = 0;

for (const [componentSlug, entry] of Object.entries(manifest || {})) {
  if (!componentSlug) continue;
  const normalized = slugify(componentSlug);
  const variants = entry?.variants || {};
  const normalizedVariants = {};
  for (const [variantSlug, variant] of Object.entries(variants)) {
    const variantKey = slugify(variantSlug);
    normalizedVariants[variantKey] = {
      label: variant?.label || variantSlug,
      description: variant?.description || '',
      file: variant?.file || '',
    };
  }

  variantCount += Object.keys(normalizedVariants).length;
  components[normalized] = {
    label: entry?.label || componentSlug,
    description: entry?.description || '',
    variants: normalizedVariants,
    variantSlugs: Object.keys(normalizedVariants),
  };
}

const outPath = path.join(process.cwd(), 'scripts', 'ui-variants.registry.json');
const payload = {
  __meta: {
    generatedAt: new Date().toISOString(),
    templateRoot: path.relative(process.cwd(), templateRoot) || templateRoot,
    sourceManifest: path.relative(process.cwd(), manifestPath) || manifestPath,
    componentCount: Object.keys(components).length,
    variantCount,
  },
  components,
};

fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n');
console.log(`[ui-variants] Wrote ${outPath} (${payload.__meta.componentCount} components / ${payload.__meta.variantCount} variants).`);
