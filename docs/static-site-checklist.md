# Static Website Build Standard

**Status:** Active / Canonical  
**Last updated:** 2025-12-18

This document defines the complete, authoritative standard for building client-facing static websites under the Websites project. It is designed for repeatable quality, fast delivery, and clean handoff between humans, AI tools (Codex), and repos.

---

## 0. What this standard is for

Static sites built under this standard are intended for:
- Small businesses
- Solo operators / consultants
- Landing pages and credibility sites
- Marketing pages with clear CTAs
- Content that can be managed as simple files (markdown, JSON, images)

Not intended for:
- Authenticated user systems
- Dashboards / complex workflows
- Custom backend logic beyond simple integrations
- Highly dynamic apps requiring runtime server state

---

## 1. Core principles (non‑negotiable)

- **Fast:** minimal JS, optimized assets, correct caching behavior
- **Clear:** obvious purpose + call-to-action above the fold
- **Accessible:** semantic HTML, labels, contrast, keyboard usable
- **Maintainable:** simple structure, consistent patterns, few moving parts
- **Client-friendly:** content and structure understandable by non-technical people
- **Repeatable:** every site follows the same scaffolding + checks

---

## 2. Default tech stack (canonical)

### Framework
- Angular (latest at bootstrap time) with SSR-capable build (prerender allowed)
- Standalone components + Router

### UI / Design System
- PrimeNG
- PrimeIcons
- PrimeUIX theme preset (**Aura**)
- TailwindCSS v3 (pinned) + PostCSS + Autoprefixer
- `tailwindcss-primeui` plugin (PrimeBlocks utility support)

### PrimeBlocks support
PrimeBlocks patterns rely on:
- PrimeNG tokens (theme preset)
- Tailwind utilities
- `tailwindcss-primeui` plugin  
**Therefore all PrimeBlocks prerequisites must be present in every bootstrap.**

---

## 3. Bootstrap script (authoritative behavior)

### 3.1 Inputs (non-interactive mode)

Required:
- `bootstrap.zsh <app-name>`

Optional flags (canonical):
- `--pages "about,services,gallery,contact"`  
  - Home is always included  
  - Pages may be labels or slugs depending on script version (prefer labels → slugged)
- `--components "home:hero,cta;about:hero;services:hero,features;gallery:slider;contact:hero,contact-form"`
  - Per-page components are created under that page (unique per page)
- Global component buckets:
  - `--global-components-top "promo-banner"`
  - `--global-components-before-outlet "breadcrumbs"`
  - `--global-components-after-outlet "chat-box"`
  - `--global-components-bottom "footer"`
- Global component placement per page (controls which global components are actually injected into each page template):
  - `--globals-per-page "home:promo-banner,chat-box,footer;about:footer;services:chat-box;gallery:footer;contact:chat-box,footer"`
- Optional:
  - `--style-url "https://example.com"`
  - `--firebase`
  - `--ui-components "global:footer=simple-columns;home:hero=split,cta=primary"`
    - Scope templates globally or per page; selections must map to keys inside `templates/ui-components/manifest.json`
  - Color overrides for PrimeNG styled mode:
    - `--color-primary "#39FF14"` (default)
    - `--color-secondary "#FF3CAC"` (default)
    - `--color-background "#0B0B0B"` (default)  
      Example: `--color-primary "#0ea5e9" --color-secondary "#fbbf24" --color-background "#020617"`
    - `--color-mode "light"` (default) or `"dark"` to declare the intended color scheme.
    - Values must be valid hex (`#RGB` or `#RRGGBB`). Bootstrap always writes `src/styles/primeng-tokens.css` with a full Prime token scale (`--p-primary-50…950`, `--p-secondary-*`, hover/active/contrast tokens, surface overrides, etc.) and wires it after `src/prime-theme.css`. Override the defaults via flags when needed.

### 3.2 Canonical directory rules (hard rule)
- **Do not create anything in `src/app/app/**`**
- All app code lives in:
  - `src/app/pages/**`
  - `src/app/components/**`
- Per-page components live in:
  - `src/app/pages/<page>/components/<component>/<component>.component.ts|html|css`

### 3.3 Canonical navigation rule
- Brand / company name in header is the only link to `/`
- **Do not show a “Home” link** in the nav list  
- Nav should contain only non-home pages

### 3.4 UI template library (canonical)
- Template source of truth lives at `templates/ui-components/**` with metadata in `templates/ui-components/manifest.json` (16 families / 180 variants as of Dec 2025).
- Each variant keeps `__SELECTOR__` and `__CLASS_NAME__` placeholders so the injector can rewrite them per scope.
- Bootstrap serializes the user’s choices to `scripts/ui-template-selection.json` and copies `scripts/inject-ui-templates.mjs` into every generated project (alongside the customer-specific copy).
- Always point `UI_TEMPLATE_LIBRARY_ROOT` at the template root before running `node scripts/inject-ui-templates.mjs`; rerun the injector any time you edit either the templates or the generated components so the sources stay in sync.
- Adding or modifying a template requires:
  1. Dropping the file under `templates/ui-components/<component>/<variant>.ts`
  2. Updating the manifest entry (label, description, file path)
  3. Updating the README + this checklist so the catalog remains documented
- Do not ship unregistered templates; the manifest is authoritative.
- If template selections exist but `UI_TEMPLATE_LIBRARY_ROOT` or `manifest.json` is missing, the injector must exit non-zero (no silent skips). Every run also emits a summary of skipped components/variants so issues can be corrected immediately.

---

## 4. Required configuration (Angular + PrimeNG)

### 4.1 app.config.ts must include PrimeNG theme preset
`src/app/app.config.ts` must include:

- `providePrimeNG({ theme: { preset: Aura } })`

If animations are used or expected by UI components:
- Ensure `@angular/animations` is installed and animation providers are configured as needed.

### 4.2 angular.json must register global styles
`angular.json` build options must include:

- `src/styles.css`
- `node_modules/primeicons/primeicons.css`
- `src/prime-theme.css` (generated from `@primeuix/themes/aura/css`)

**Do not** import PrimeNG base CSS via `@import 'primeng/resources/primeng.min.css'`  
(PrimeNG package exports can block direct file imports.)

### 4.3 PrimeNG styled token overrides (required)
- Bootstrap defaults to the studio palette (`#39FF14` primary, `#FF3CAC` secondary, `#0B0B0B` background) and always emits `src/styles/primeng-tokens.css` using those values unless overridden.
- Any `--color-*` flags must:
  - Validate the values are `#RGB` or `#RRGGBB` (fail immediately if not).
  - Regenerate a full Prime-style token scale (`--p-*-50…950`, hover/active/contrast, and surface tokens) so page-level CSS that references `--p-primary-600`, etc., picks up the new palette.
  - Register the stylesheet in `angular.json` *after* `src/prime-theme.css` (both build + test targets).
  - Update `app.config.ts` to pass the same palette (primary + surface tokens) into `providePrimeNG({ theme: { preset: … } })` so Prime’s semantic theme preset mirrors the CSS token overrides (light + dark color schemes).
  - Apply the requested `--color-mode` to `:root`/`:host` via `color-scheme: light|dark` so browsers and Prime templates render with the correct base tone.
- The file should not be referenced if it does not exist, and the injector should only add it once (no duplicates).

---

## 5. Tailwind requirements (canonical)

- Tailwind pinned to v3 for consistent CLI + plugin behavior
- `tailwind.config.js` must have:
  - `content: ["./src/**/*.{html,ts}"]`
  - `plugins: [require('tailwindcss-primeui')]`

`src/styles.css` must include Tailwind directives:
- `@tailwind base;`
- `@tailwind components;`
- `@tailwind utilities;`

---

## 6. Pages + components (scaffolding standard)

### 6.1 Pages
- Each page is a standalone component at:
  - `src/app/pages/<slug>/<slug>.component.ts`
  - `src/app/pages/<slug>/<slug>.component.html`
  - `src/app/pages/<slug>/<slug>.component.css`
- Bootstrap must strip the Angular CLI default `<p>___ works!</p>` stub and leave the canonical shell comment (`<!-- Add page content -->`) so no placeholder text ships to clients.

### 6.2 Per-page components
If specified via `--components`, create unique components per page, e.g.:
- `hero-home`, `hero-about` (not shared)
- Each page imports only the components that are used in its template.

### 6.3 Global components
Global components are created once under:
- `src/app/components/<component>/<component>.component.ts|html|css`

Then:
- They can be injected into pages by template placement (top / before-outlet / after-outlet / bottom)
- They must also be added to `imports: []` of each page that uses them (script must enforce this)

---

## 7. App shell standard

### Required
- Header always present (site-header)
- Router outlet present
- Footer may be global or per-page, but the wiring must be consistent

### File expectations
- Prefer inline template in `app.component.ts` (no missing templateUrl files)
- Do not delete or rely on legacy `app.html` paths

---

## 8. Router standard

- `src/app/app.routes.ts` must include:
  - Home route: `{ path: '', loadComponent: ...home... }`
  - One route per selected page slug
  - Wildcard redirect to home

- Header nav links must match routes.

---

## 9. Build + deploy standard

### 9.1 build:static must produce `/public`
- Build output: `dist/<project>/browser`
- Copy to `public/`
- `scripts/build-static.mjs` is canonical

### 9.2 npm scripts (required)
- `build:static`: `npm run build && node scripts/build-static.mjs`
- `deploy`: `npm run build:static && firebase deploy`

---

## 10. Firebase Hosting (optional but standardized)

If using Firebase Hosting:
- `firebase.json` must use:
  - `"public": "public"`
  - SPA rewrite: `source: "**" → destination: "/index.html"`

---

## 11. Content + SEO minimums

Every site must ship with:
- Clear hero section (headline + subhead + CTA)
- At least one proof/credibility section (reviews, logos, stats, certifications)
- Services/offerings section (even if minimal)
- Contact CTA (button + form or mailto/phone)
- Meta title + description
- Open Graph basics (title/description/image if available)
- Sitemap + robots (update `src/sitemap.xml` + `src/robots.txt` with the production domain or set `SEO_BASE_URL` before bootstrap)
- Page-level SEO services (`src/app/pages/<slug>/<slug>-seo.service.ts`) updated with final Title/Meta copy

---

## 12. Accessibility minimums

- Proper heading structure (one H1)
- Link text is descriptive (no “click here”)
- Form fields have labels
- Keyboard navigation works for header + menu
- Contrast meets WCAG AA where feasible

---

## 13. Performance minimums

- Images optimized (size, format)
- Avoid heavy client-side libraries beyond PrimeNG/Tailwind necessities
- No unbounded animations
- Lighthouse targets (guideline):
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+

---

## 14. Code style + repo expectations

- Keep components small and composable
- No unused imports (treat warnings as failures when possible)
- Keep cross-page shared logic in `src/app/components` (global) only when truly shared
- Prefer plain TS + HTML templates; avoid over-abstracting

---

## 15. Codex workflow (standard)

### docs/style-reference.md must exist
- Contains:
  - Reference URL (layout/feel only)
  - Rules: no copying assets/copy
  - Pages list
  - Implementation constraints (PrimeNG Aura + Tailwind)

### docs/codex-prompt.md must exist
- Clear tasks:
  - Which pages to update
  - Where to put components
  - Router + nav expectations
  - Maintain `angular.json` global styles

---

## 16. Regression checklist (run for every site)

- [ ] `npm install` succeeds
- [ ] `npm start` (ng serve) renders without warnings/errors
- [ ] `npm run build:static` succeeds
- [ ] Header renders correctly (no stray characters; brand link works)
- [ ] PrimeIcons render (`pi pi-...`)
- [ ] Prime theme tokens apply (Aura colors visible)
- [ ] Global components appear only on pages specified by `--globals-per-page`
- [ ] Per-page components are unique per page and imported correctly
- [ ] No files exist under `src/app/app/**`
- [ ] `public/` contains built output after build:static
- [ ] Routes all work (direct navigation + refresh)
- [ ] `node scripts/inject-ui-templates.mjs` (with `UI_TEMPLATE_LIBRARY_ROOT` set) completes without warnings and re-applies the selected templates
- [ ] Each page’s SeoService (`src/app/pages/<slug>/<slug>-seo.service.ts`) sets the final title + meta description

---

## 17. Ownership & enforcement

This standard exists to:
- Protect build quality
- Prevent over-engineering
- Keep projects profitable

If something violates this standard:
- It must be documented
- It must be explicitly approved

Otherwise, it is out of scope.
