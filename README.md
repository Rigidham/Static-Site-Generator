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

## UI Template Library

We maintain a PrimeNG/Aura-ready component catalog under `templates/ui-components/`. Each variant ships as a standalone Angular component skeleton with placeholder tokens (`__SELECTOR__`, `__CLASS_NAME__`) that get replaced when `bootstrap.zsh` injects the template into a generated project.

### Catalog snapshot (Dec 2025)

The library now spans 16 component families / 180 variants:

| Family | Variants | Description |
| --- | --- | --- |
| Banner | 5 | Promotional announcement bars and countdown headers |
| Blog | 9 | Editorial grids and article highlight layouts |
| Contact&nbsp;Us | 9 | Contact cards with maps, tabs, and cover imagery |
| Content | 4 | Storytelling copy blocks and text/image sections |
| CTA | 13 | Bold call-to-action layouts with imagery and buttons |
| FAQ | 10 | Question-and-answer sections using accordions and grids |
| Feature | 28 | Feature highlight sections with icons, tabs, and screenshots |
| Footer | 10 | Footer layouts with multi-column links and CTAs |
| Hero | 9 | Above-the-fold hero sections with media and forms |
| Logo Cloud | 11 | Logo showcase grids, sliders, and floating cards |
| Navbar | 13 | Navigation bars, mega menus, and header patterns |
| Newsletter | 7 | Newsletter opt-in cards and split signup sections |
| Pricing | 10 | Pricing tables, tier cards, and comparison layouts |
| Stats | 9 | Metric highlight sections with counters and grids |
| Team | 13 | Team member grids, bios, and hover overlays |
| Testimonial | 20 | Testimonial layouts including quotes, carousels, and grids |

#### Variant reference

Granular variant metadata mirrors `templates/ui-components/manifest.json` (labels + descriptions) and is summarized below for quick scanning:

##### Banner
- **Dark & Full Width** – Full-width announcement bar with dismiss CTA
- **Condensed & Colored** – Compact primary banner with icon + dismiss
- **Condensed & Gradient** – Gradient banner with verification CTA
- **Countdown** – Live sale countdown with CTA buttons
- **Full Width w/ BG Images** – Full-width announcement with mirrored background art

##### Blog
- **Highlighted Articles** – Three-card editorial grid
- **Alternating** – Two-column alternating feature list
- **Emphasized Post** – Hero post with two side articles
- **Gradient Border** – Three-card grid with gradient borders and avatars
- **Three Columns w/ Images** – Three-card grid with author avatars
- **Three Columns w/ Lines** – Three-card grid with accent line headers
- **Three Columns w/ Tags** – Three-card grid with metadata chips
- **Two Column Cards** – Responsive two-column cards with image + excerpt
- **Two Columns w/ Emphasized Heading** – Two-column list with highlighted intro column

##### Contact Us
- **Two Column** – Details with contact form
- **Address Tabs** – Tabbed office selector with map
- **Centered w/ Badge** – Centered form with avatar badge and CTA
- **Floating Card on Cover** – Hero cover with floating contact card
- **In Card** – Two-column in-card layout with form and details
- **Two Columns** – Side-by-side contact form with contact details
- **Two Columns w/ Image** – Split layout with hero image and form
- **Two Rows w/ Map** – Contact summary with map image
- **With Cover & Map** – Hero cover with form + map card

##### Content
- **Simple Centered** – Centered copy with supporting text
- **Centered** – Rich article layout with tags/image
- **Three Columns** – Hero + three-column content layout
- **Two Columns w/ Image** – Article layout with image aside

##### CTA
- **Primary** – Bold CTA banner
- **Simple Centered** – Centered CTA with Discord badge
- **Branded w/ Background Image** – High-impact CTA with full-bleed image
- **Dark Background w/ Features** – Two-column CTA with feature bullets + image
- **Dark Background w/ Image** – Headline, copy, and image card CTA
- **Gradient Background** – Split CTA with gradient card
- **Gradient Background w/ Effects** – Glow-heavy CTA with layered imagery
- **Image Background** – Split CTA with image overlay
- **Overlapping Image** – Overlapping photo with monochrome CTA card
- **Split Content** – Split CTA with badges and dual buttons
- **Two Columns w/ CTA** – Dual card CTA with subscription form
- **Two Columns w/ Images** – Side-by-side CTA cards with avatars and pricing
- **With Browser Mockup** – Radial gradient CTA with floating browser mockup

##### FAQ
- **Accordion** – Three question accordion
- **Glassmorphic Accordion** – Glassmorphic FAQ accordion with frosted overlay
- **Simple Accordion** – Bordered accordion with centered heading
- **Side by Side** – Two-column FAQ answers with dividing rules
- **Three Columns** – Three-column FAQ grid with concise answers
- **Three Columns w/ Cards** – Three-column FAQ cards with borders
- **Two Accordion Columns** – Dual-column accordion groups with category headings
- **Two by Four Grid** – Two-column grid grouped into four rows
- **Two Columns w/ Accordion Questions** – Labeled two-section accordion FAQ list
- **With Contact Card** – Accordion FAQ with supporting contact CTA card

##### Feature
- **Icons Grid** – 4-up icon grid
- **Centered 3x3 Grid** – Centered nine-card feature grid with icons
- **Centered 3x2 Grid Boxes** – Six-card database feature grid with icons
- **Centered 2x2 Simple Grid** – Two-column security feature tiles with arrows
- **Dark Feature List** – Dark radial feature list with angled card art
- **Dark Feature List w/ Screenshot** – Dark feature list with floating screenshot
- **Feature Grid w/ Image** – Two-column feature grid with supporting image
- **Feature List w/ Image** – Feature list with badge and supporting image
- **Feature Timeline w/ Image** – Timeline-style feature list with supporting image
- **Floating Card w/ Background Image** – Full-bleed hero with floating feature cards
- **4x1 w/ Logos** – Four-card feature grid with logo imagery
- **4 Features Centered Image** – Four feature callouts flanking center image
- **Horizontal Tabs** – Hover-driven horizontal feature tabs
- **Overlapping Card** – Hero background with overlapping feature cards
- **Sliding Screenshots** – Interactive feature tabs with screenshot carousel
- **Testimonial Badge CTA & Image** – Split CTA with badge, quote, and theme-aware image
- **3x1 w/ Colored Icons** – Three feature cards with colored icon badges
- **3x2 Grid w/ Big Image** – Six feature grid under hero image
- **3x2 Grid w/ Big Image & Icons** – Six feature grid with icons under hero image
- **3 Features w/ CTA** – Three feature callouts with CTA column
- **3 Main Features w/ Sub Features** – Three feature columns with sub-feature checklist
- **Timeline** – Responsive feature timeline with imagery
- **2x5 Grid Accordion** – Two-column accordion grid for services/support
- **Two Columns w/ Icon Line** – Two-column feature list with vertical icon line
- **Two Sub Features w/ Image** – Two sub-feature callouts alongside hero image
- **Vertical Tabs** – Vertical hover tabs with hero screenshot
- **With Chips** – Chip-based feature selector with preview
- **Alternating Sections w/ Sub Features** – Alternating image/text feature rows with bullet lists

##### Footer
- **Simple Columns** – Four-column footer with signup
- **Centered** – Centered footer with nav links and social icons
- **Dark Background** – Dark footer with four columns and contact info
- **Dark BG 4 Columns w/ Image** – Large image-backed footer with four columns
- **Dark Background Single Row** – Single-row dark footer with links + social icons
- **4 Columns w/ CTA** – Four-column footer with signup CTA
- **Simple Floating** – Floating card footer with nav + social links
- **6 Columns w/ CTA** – Six-column footer with CTA and social links
- **3 Column w/ Newsletter** – Three-column footer with newsletter signup
- **Three Columns** – Two link columns with brand summary footer

##### Hero
- **Split** – Two-column hero with media
- **Right Aligned Image** – Copy column with right-aligned hero image
- **Centered Product Image** – Centered hero with floating product screenshot
- **Dark Image Background** – Dark image hero with newsletter signup
- **Dark w/ Illustration** – Dark hero with illustration and CTA list
- **Form + Video Aligned** – Split hero with signup form and embedded video
- **Light Image Background** – Light hero with radial overlay and CTA buttons
- **With Phone** – Text-first hero with phone mockup
- **With 3D Emoji** – 3D emoji hero with dual CTAs and image

##### Logo Cloud
- **Minimal** – Simple text-based logo row
- **Colored** – Colorful logo grid with brand badges
- **Simple** – Minimal five-column logo grid
- **2x4 Floating Grid** – Floating sponsor cards with CTA and button
- **2x3 Grid Cards** – Bordered sponsor cards with CTA button
- **Two Columns** – Split text + compact logo grid layout
- **Grid** – Four-column bordered logo grid
- **Colored Background** – Primary-colored logo grid with headline
- **Dark Background** – Dark logo grid with white text
- **Fading Slider on Dark Card** – Infinite logo marquee inside a dark card
- **Fading Slider** – Auto-scrolling logo marquee with fade masks

##### Navbar
- **Stacked** – Stacked nav summary
- **Centered Logo** – Centered logo navbar with dropdowns
- **Centered Menu** – Centered menu navbar with dropdowns
- **Colored Right-Aligned Menu** – Primary navbar with right-aligned dropdown menu
- **Dark Mega Menu** – Dark mega dropdown with marketing column
- **Dark Mega Menu w/ Feature** – Mega menu with interactive featured content
- **Floating Mega Menu** – Floating mega menu with image panel
- **Full Height Menu** – Full height navbar with dropdown
- **Ghost Submenu w/ Categories** – Ghost mega menu with category column
- **Ghost Submenu w/ Footer** – Ghost submenu dropdown with footer links
- **Ghost Three-by-Two Grid** – Ghost submenu with two-column grid
- **Left Aligned Mega Menu** – Left aligned mega menu grid
- **Mega Menu with Featured** – Gradient mega menu with featured list

##### Newsletter
- **Card** – Carded subscribe form
- **Gradient Background** – Gradient hero newsletter form
- **Pattern Background** – Pattern hero with latest posts
- **Simple 2 Column** – Two-column copy and form
- **Simple Centered** – Centered badge, heading, and input group
- **With Background Image Grid** – Hero with animated grid background
- **With Image** – Two-column copy with large image

##### Pricing
- **Tiers** – Two-plan pricing
- **Three Tiers** – Three column pricing layout
- **Comparison Table** – Pricing comparison matrix
- **Multi-Colored** – Three pricing cards with toggle
- **Single Tier w/ Features** – Single plan with feature list
- **Three Floating Card Tiers** – Floating cards pricing layout
- **Three Ticket Tiers** – Ticket-inspired pricing layout
- **Three Tiers w/ Selection** – Selectable pricing tiers with feature detail
- **Two Tiers** – Two card pricing with annual toggle
- **With Payment Options** – Free, monthly, and yearly pricing cards

##### Stats
- **3 Column** – Three stat callouts
- **Centered w/ Dark Background** – Centered stats on dark hero
- **Colored Four-by-One Grid** – Four stat cards with icons
- **Dark Two-by-Two Grid** – Dark layout with stats and logos
- **Four Column w/ Colored Icons** – Four stat cards with icons and descriptions
- **Image Background** – Dark hero with blended stat cards
- **Minimal Three Columns** – Three centered stats on dark background
- **Minimal Two-by-Two Grid** – Two-by-two stats with primary accent
- **Simple Four-by-One Grid** – Four stat cards with titles/descriptions

##### Team
- **Grid** – Two-column team grid
- **Cards** – Carded team members with socials
- **Glass Overlay Icons** – Team cards with glass social overlay
- **Grid with Larger Images** – Circular team grid with social links
- **Grid with Smaller Image** – Dense avatar grid
- **Three Columns** – Three-column bios with social buttons
- **Two by Four Grid w/ Cards** – Floating cards over grid
- **Two by Four Grid w/ Images** – Hover-reveal social grid
- **Two by Two Grid w/ Bio and Icons** – Two column team bios with socials
- **Two Columns w/ Vertical List** – Narrative column and stacked bios
- **With Bio** – Side intro with detailed bios
- **With Glass Overlay** – Glass overlays on team cards
- **With Hover Overlay** – Hover overlay with bios

##### Testimonial
- **Quote Card** – Single highlighted quote
- **Background Image** – Full-bleed background testimonial
- **Big Image and Stars** – Image-left testimonial with rating
- **Card Stack** – Stacked testimonial cards with controls
- **Carousel with Image Carousel** – Testimonial carousel with avatar picker
- **Carousel with Rating** – Rating carousel with spotlight and avatars
- **Centered Minimal** – Stacked centered quotes
- **Centered Three-by-Two Grid** – Three-column centered cards grid
- **Carousel with Line Effect** – Line-effect carousel with avatars
- **Centered with Logo** – Centered quote with logo and avatar
- **Centered with Slide** – Carousel-centered testimonial
- **Fading Bento** – Tall scrollable grid with fade-out CTA
- **Horizontally Scrolling** – Two-row horizontally scrolling testimonials
- **Off Screen Carousel** – Off-screen looping testimonial carousel
- **One by Three Grid with Offset Images** – Split layout with stacked testimonial cards
- **Side by Side** – Split narrative with glass testimonial
- **Single Quote** – Single highlighted quote with avatar
- **Three by One Grid with Offset Images** – Three offset cards with centered avatars
- **Vertical Navigation** – Vertical picker with detailed quote
- **Vertically Scrolling** – Tall scrollable grid with fade masks

### Reapplying templates

Every bootstrap run serializes selections to `scripts/ui-template-selection.json` and copies `scripts/inject-ui-templates.mjs` into the generated app. Point `UI_TEMPLATE_LIBRARY_ROOT` at this repo’s `templates/ui-components` folder and run:

```bash
UI_TEMPLATE_LIBRARY_ROOT=/absolute/path/to/templates/ui-components \
node scripts/inject-ui-templates.mjs
```

The injector swaps the placeholders in the target Angular components, so you can safely re-run it after editing either the templates or the generated files.

See `docs/README.md` for deeper documentation and template authoring details.
