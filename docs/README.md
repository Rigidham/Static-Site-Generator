# Websites

Internal factory for building client websites using Angular (latest),
PrimeNG, TailwindCSS, and Firebase Hosting.

## What this repo does
- Creates prerender-capable Angular sites
- Enforces a standard page + component structure
- Installs and configures PrimeNG (Aura) + Tailwind
- Generates Codex-ready documentation for UI work
- Supports Firebase Hosting with `public/` output

## Usage
```bash
./bootstrap.zsh <app-name> [--style-url "https://example.com"] [--firebase]
```

### UI Template Library
- Templates live under `templates/ui-components/<component>/<variant>.ts` and are registered in `templates/ui-components/manifest.json`. Add a new variant by copying one of the existing files, keeping the `__SELECTOR__` and `__CLASS_NAME__` placeholders in place, and wiring the file path plus metadata into the manifest entry for that component.
- You can preselect templates from the CLI via `--ui-components`. Examples:
  - `--ui-components "banner:dark-and-full-width,hero:split"` (treats each entry as global)
  - `--ui-components "global:footer=simple-columns;home:hero=split,cta=primary;about:faq=accordion"`
  - Scopes accept `global` plus any page slug (home included). Without the flag you can answer the interactive template prompts during bootstrap.
- Selected templates overwrite the Angular CLI stubs right after component generation:
  - `global` scope → component under `src/app/components/<component>` and auto-added to global buckets (default placement: bottom, so it renders after the outlet unless you explicitly move it via `--global-components-*` flags).
  - `<page>` scope → component under `src/app/pages/<page>/components/<component>-<page>` with tags + imports injected into that page template/TS.
