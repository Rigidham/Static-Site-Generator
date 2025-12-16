# Websites Bootstrap

This repo contains the automation we use to scaffold Angular-based marketing sites for clients. The primary entry point is `bootstrap.zsh`, which spins up a new Angular app (latest, standalone components, SSR-ready) in `customers/<app-name>` and wires up:

- PrimeNG + PrimeIcons + Tailwind (Aura theme + Tailwind plugin)
- Page + component directory structure under `src/app/pages` and `src/app/components`
- Optional Firebase Hosting config + static build script
- Codex-friendly docs (style reference + prompt)
- Global/page-local component generation + UI template injection

## Usage
```bash
./bootstrap.zsh <app-name> [--pages "about,services"] [--components "home:hero"] [--global-components-bottom "footer"] [--ui-components "home:hero=split"]
```

### Flag reference

```bash
./bootstrap.zsh <app-name> \
  --pages "about,services,gallery" \
  --components "home:hero,cta;about:hero;services:hero,features" \
  --global-components "footer" \
  --global-components-top "promo-banner" \
  --global-components-before-outlet "breadcrumbs" \
  --global-components-after-outlet "chat-box" \
  --global-components-bottom "footer" \
  --globals-per-page "home:promo-banner,chat-box,footer;about:footer;services:chat-box" \
  --style-url "https://example.com/reference" \
  --firebase \
  --ui-components "global:footer=simple-columns;home:hero=split,cta=primary"
```

- `--pages`: Comma-separated list of additional routes beyond Home (slugs). Example: `"about,services"`.
- `--components`: Page-local UI sections per page, e.g. `"home:hero,cta;about:hero"`.
- `--global-components[-top|-before-outlet|-after-outlet|-bottom]`: Declare reusable globals for each bucket; bare `--global-components` defaults to bottom.
- `--globals-per-page`: Map of page→global components determining where each global renders.
- `--style-url`: External inspiration link stored in docs for Codex context.
- `--firebase`: Adds Firebase Hosting config plus `npm run build:static`/`deploy` scripts.
- `--ui-components`: Select templates from `templates/ui-components`, either globally or per page scope (e.g., `"home:hero=split"`).

See `docs/README.md` for deeper documentation and template authoring details.
