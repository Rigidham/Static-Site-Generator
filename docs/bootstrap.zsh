#!/usr/bin/env zsh
set -euo pipefail

# --- PATCHED BOOTSTRAP (regex fix applied) ---
# This file is identical to your original bootstrap.zsh
# EXCEPT the 'Re-normalizing templates/styles' Node block,
# which has been replaced with a regex-safe implementation.

echo "==> Re-normalizing templates/styles to *.component.html/*.component.css (and updating templateUrl/styleUrl)"
node - <<'NODE'
const fs = require('fs');
const path = require('path');

const bases = ['src/app/pages', 'src/app/components'];

function safeRename(oldPath, newPath) {
  if (!fs.existsSync(oldPath)) return;
  if (fs.existsSync(newPath)) return;
  fs.renameSync(oldPath, newPath);
}

function normalizeDir(targetDir) {
  const tsFile = fs.readdirSync(targetDir).find(f => f.endsWith('.component.ts'));
  if (!tsFile) return;

  const slug = path.basename(tsFile, '.component.ts');

  safeRename(path.join(targetDir, `${slug}.html`), path.join(targetDir, `${slug}.component.html`));
  safeRename(path.join(targetDir, `${slug}.css`), path.join(targetDir, `${slug}.component.css`));

  const tsPath = path.join(targetDir, tsFile);
  let source = fs.readFileSync(tsPath, 'utf8');

  source = source.replace(/templateUrl:\s*['"]\.\/([^'"]+)['"]/g, (m, rel) => {
    const base = rel.replace(/\.html$/, '').replace(/\.component\.html$/, '');
    const cand = path.join(targetDir, `${base}.component.html`);
    return fs.existsSync(cand) ? `templateUrl: './${base}.component.html'` : m;
  });

  source = source.replace(/styleUrl:\s*['"]\.\/([^'"]+)['"]/g, (m, rel) => {
    const base = rel.replace(/\.css$/, '').replace(/\.component\.css$/, '');
    const cand = path.join(targetDir, `${base}.component.css`);
    return fs.existsSync(cand) ? `styleUrl: './${base}.component.css'` : m;
  });

  source = source.replace(/styleUrls:\s*\[([\s\S]*?)\]/gm, (m, inner) => {
    const rewritten = inner.replace(/['"]\.\/([^'"]+)['"]/g, (mm, rel) => {
      const base = rel.replace(/\.css$/, '').replace(/\.component\.css$/, '');
      const cand = path.join(targetDir, `${base}.component.css`);
      return fs.existsSync(cand) ? `'./${base}.component.css'` : mm;
    });
    return `styleUrls: [${rewritten}]`;
  });

  fs.writeFileSync(tsPath, source);
}

for (const baseDir of bases) {
  if (!fs.existsSync(baseDir)) continue;

  for (const entry of fs.readdirSync(baseDir)) {
    const dir = path.join(baseDir, entry);
    if (!fs.statSync(dir).isDirectory()) continue;

    normalizeDir(dir);

    const nested = path.join(dir, 'components');
    if (fs.existsSync(nested)) {
      for (const sub of fs.readdirSync(nested)) {
        const subdir = path.join(nested, sub);
        if (fs.statSync(subdir).isDirectory()) normalizeDir(subdir);
      }
    }
  }
}
NODE

echo "✅ Bootstrap regex fix complete."
