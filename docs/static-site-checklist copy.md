Static Website Build Standard

This document defines the standard process, constraints, and expectations for building client-facing static websites.

This standard is used to ensure:
	•	speed and consistency
	•	predictable scope
	•	high-quality client outcomes
	•	easy handoff between humans, AI tools, and repos

⸻

1. Purpose

Static sites built under this standard are intended for:
	•	small businesses
	•	solo operators
	•	landing pages
	•	informational or credibility-focused sites

They are not intended for:
	•	authenticated user systems
	•	dashboards
	•	complex workflows
	•	custom backend logic

⸻

2. Core Principles

All static sites must follow these principles:
	•	Fast: minimal JavaScript, optimized assets
	•	Clear: obvious purpose and call-to-action
	•	Accessible: semantic HTML and readable contrast
	•	Maintainable: simple structure, no unnecessary tooling
	•	Client-friendly: understandable by non-technical users

⸻

3. Scope Definition

In Scope
	•	1–5 pages
	•	Static HTML/CSS/JS or static framework output
	•	Responsive layout (mobile-first)
	•	SEO-ready copy
	•	Contact method (form or mailto)

Out of Scope (unless explicitly contracted)
	•	Backend services
	•	Authentication or accounts
	•	CMS integrations
	•	Databases
	•	E-commerce
	•	Custom animations or heavy effects

⸻

4. Page Types

Required Minimum Pages

All projects must start with the following pages:
	•	Home – value proposition + primary CTA
	•	About – credibility and trust
	•	Services – clear offerings and benefits
	•	Gallery – visual proof / portfolio
	•	Contact – how to reach the business

Each page must:
	•	be implemented as a standalone Angular component
	•	live under app/pages
	•	be registered in the Angular Router
	•	be included in the prerender route list
	•	have at least one CTA

⸻

5. Technical Standards

Framework & Rendering
	•	Framework: Angular (latest stable version)
	•	Rendering: Pre-rendered (Angular SSG / prerender)
	•	Architecture: Standalone components and routes (no NgModules)

UI & Styling
	•	Component library: PrimeNG (latest version)
	•	Icons: PrimeIcons (latest version)
	•	Styling: Tailwind CSS (latest version)
	•	PrimeNG theming must be compatible with Tailwind utilities

Angular Workspace Configuration (Required)
	•	All global stylesheets (Tailwind base, PrimeNG theme, custom globals) must be registered in angular.json
	•	All static assets (images, icons, fonts) must be registered in angular.json under the assets array
	•	Do not rely on implicit imports or non-standard paths

⸻

Canonical angular.json Snippet (Required)

This snippet shows the minimum required configuration for styles and assets.

{
  "projects": {
    "client-site": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/@primeuix/themes/aura/theme.css"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}

Notes:
	•	src/styles.css should include Tailwind directives:

@tailwind base;
@tailwind components;
@tailwind utilities;


	•	Replace client-site with the actual Angular project name
	•	Use one PrimeNG theme per project
	•	Additional global styles must be added here (not imported ad-hoc)

⸻

6. Design & Branding Rules
	•	Use provided brand assets when available
	•	If no brand exists:
	•	select 1 primary color
	•	1 neutral
	•	1 accent (optional)
	•	Limit fonts to 2 max

Design should favor:
	•	readability
	•	whitespace
	•	simple section hierarchy

⸻

6.1 PrimeNG + Tailwind Integration Rules

To avoid styling conflicts and keep builds consistent:
	•	Tailwind is the utility layer (layout, spacing, typography tweaks)
	•	PrimeNG is the component layer (inputs, buttons, menus, dialogs)
	•	Do not recreate PrimeNG components with custom HTML unless required
	•	Prefer Tailwind utilities around PrimeNG components (wrappers, grids)
	•	Keep a single, consistent PrimeNG theme choice per project
	•	Avoid global CSS overrides unless documented in the repo

⸻

7. Content Standards
	•	No lorem ipsum in final delivery
	•	Clear, concise language
	•	Benefits over features
	•	Local SEO when applicable

Required Elements
	•	Headline with value proposition
	•	Supporting subtext
	•	CTA button or link
	•	Contact information

⸻

8. SEO & Metadata

Each page must include:
	•	unique title tag
	•	meta description
	•	semantic headings (h1–h3)

Optional:
	•	Open Graph tags
	•	favicon

⸻

8.1 Default Route Map (Required)

All projects must ship with these routes:
	•	/ → Home
	•	/about → About
	•	/services → Services
	•	/gallery → Gallery
	•	/contact → Contact

These routes must:
	•	be registered in app.routes.ts
	•	be included in the prerender/static route list

⸻

9. Canonical Angular Folder Structure

This repo standard assumes Angular (latest) + standalone.

/
├── firebase.json
├── .firebaserc
├── package.json
├── angular.json
├── src
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app
│       ├── app.config.ts
│       ├── app.routes.ts
│       ├── pages
│       │   ├── home
│       │   │   └── home.component.ts
│       │   ├── about
│       │   │   └── about.component.ts
│       │   ├── services
│       │   │   └── services.component.ts
│       │   ├── gallery
│       │   │   └── gallery.component.ts
│       │   └── contact
│       │       └── contact.component.ts
│       ├── components
│       │   ├── site-header
│       │   │   └── site-header.component.ts
│       │   ├── site-footer
│       │   │   └── site-footer.component.ts
│       │   └── cta-button
│       │       └── cta-button.component.ts
│       └── shared
│           ├── models
│           └── utils
└── public (optional for firebase static assets)

Notes:
	•	pages/** are route targets only.
	•	components/** are reusable UI.
	•	Use shared/ for non-visual code.

⸻

9.1 Generate Pages and Components with Angular CLI

Use Angular CLI generation (preferred) so everything stays consistent and standalone.

Generate the 5 baseline pages

ng g component app/pages/home --standalone --skip-tests
ng g component app/pages/about --standalone --skip-tests
ng g component app/pages/services --standalone --skip-tests
ng g component app/pages/gallery --standalone --skip-tests
ng g component app/pages/contact --standalone --skip-tests

Generate shared UI components

ng g component app/components/site-header --standalone --skip-tests
ng g component app/components/site-footer --standalone --skip-tests

Notes:
	•	This standard treats pages/*/*.component.ts as pages (routed views).
	•	If you prefer a *.page.ts naming convention, rename after generation — but keep the file inside app/pages/*.

⸻

10. Deliverables

Each project must include:
	•	production-ready prerendered Angular site
	•	Firebase Hosting configuration
	•	deployment instructions
	•	basic README explaining:
	•	how to update content
	•	how to run dev
	•	how to build + prerender
	•	how to deploy

Required baseline pages:
	•	Home, About, Services, Gallery, Contact

⸻

11. Router, Prerendering, and Navigation (Required)

11.1 Router Requirements
	•	Use standalone route config in app.routes.ts
	•	Provide a header/nav component that links to all baseline pages
	•	Ensure there are no orphan pages (every page reachable via nav and/or footer)

11.2 Prerender Requirements
	•	Prerender must include at minimum:
	•	/
	•	/about
	•	/services
	•	/gallery
	•	/contact
	•	Any additional static routes must be added to the prerender list

11.3 Canonical Route Config Example

// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' },
];


⸻

12. Firebase Hosting Standard

12.1 Hosting Model
	•	Deploy prerendered/static output to Firebase Hosting
	•	If using Angular SSR tooling, ensure hosting serves the static/prerender output (not a Node runtime) unless explicitly contracted

12.2 firebase.json (Typical SPA Rewrite)

{
  "hosting": {
    "public": "dist/<app-name>/browser",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}

Notes:
	•	Replace <app-name> with your Angular project name.
	•	This rewrite keeps router navigation working on refresh.

⸻

13. Iteration & Review
	•	Structure approved before full copy
	•	Routing + prerender validated before polish
	•	Avoid late scope changes

Defaults > indecision.

⸻

12. Success Criteria

A successful static site:
	•	loads quickly on mobile
	•	communicates value in <5 seconds
	•	tells the user exactly what to do next
	•	feels trustworthy and professional

If those conditions are met, the site is done.

⸻

13. Optional Phase-Upgrades (Upsells)

Only offered if requested:
	•	analytics
	•	form backend
	•	performance tuning
	•	copy refinements
	•	future CMS migration planning

⸻

14. Ownership

This standard exists to:
	•	protect build quality
	•	prevent over-engineering
	•	keep projects profitable

If something violates this standard, it must be documented and approved.
