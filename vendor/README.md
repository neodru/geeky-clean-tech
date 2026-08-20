# AstroWind Integration

This directory contains the work-in-progress AstroWind integration that turns the `src/config.yaml` configuration file and the `vendor/integration` package into a first-class Astro integration.

It is the bridge between a single configuration file and the rest of the Astro site, and it is the foundation for the upcoming AstroWind v2 update/upgrade flow.

---

## Overview

The AstroWind theme is an Astro 7 + Tailwind CSS v4 starter. This `vendor/` folder holds the local version of the integration so that it can be iterated on without publishing to npm yet.

In `astro.config.ts`, the integration is loaded like any other Astro integration:

```ts
import astrowind from './vendor/integration';

export default defineConfig({
  integrations: [
    astrowind({
      config: './src/config.yaml',
    }),
    // ... other integrations
  ],
});
```

The integration is responsible for reading the site's YAML configuration, exposing it as a virtual module, and applying build-time side effects such as updating `robots.txt`.

---

## What the integration does

### 1. Load `src/config.yaml`

`vendor/integration/utils/loadConfig.ts` reads the YAML (or a plain object) and passes it into the configuration builder.

### 2. Build a normalized config

`vendor/integration/utils/configBuilder.ts` merges the user-provided YAML with sensible defaults and produces a strongly typed config with the following namespaces:

- `SITE` — `name`, `site`, `base`, `trailingSlash`, `googleSiteVerificationId`
- `METADATA` — default title, description, robots, Open Graph, Twitter
- `I18N` — `language` and `textDirection`
- `APP_BLOG` — enable/disable blog, posts per page, permalink patterns, related posts
- `UI` — theme mode (`system`, `light`, `dark`, `light:only`, `dark:only`)
- `ANALYTICS` — Google Analytics id, Partytown support

### 3. Expose `astrowind:config`

The integration registers a Vite virtual module so that components can import the config as a module:

```ts
import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
```

This is defined in `vendor/integration/types.d.ts`.

### 4. Apply Astro config overrides

During `astro:config:setup`, the integration sets:

- `site`
- `base`
- `trailingSlash` (`always` or `never`)

It also marks `src/config.yaml` as a watched file, so the dev server reloads when the YAML changes.

### 5. Patch `robots.txt` after build

During `astro:build:done`, if the `@astrojs/sitemap` integration produced a `sitemap-index.xml`, the integration appends or replaces the `Sitemap:` line in the generated `robots.txt`.

---

## Project status

This repo is currently a customized AstroWind instance for **Geeky Clean Technology**.

Key project details:

- **Package name:** `temp-astro`
- **Version:** `1.0.0-beta.65`
- **Runtime:** Node.js `>=22.22.3`
- **Site:** `https://geekycleantechnology.com`
- **Build target:** Static (`output: 'static'`)
- **CSS framework:** Tailwind CSS v4 with CSS-first configuration
- **Font provider:** Fontsource Inter, self-hosted via Astro's native Fonts API
- **Integrations used:** sitemap, mdx, icon, partytown (optional), astro-compress, astro-embed, rss

### Recent notable changes

Latest commits on `main`:

- Added a 3-tier pricing page with an Incident Response card and a per-hour structure.
- Moved `sharp` from `devDependencies` to `dependencies` so Cloudflare builds can pre-optimize images.
- Replaced AstroWind default copy and metadata with the **Geeky Clean Technology** brand.
- Updated the hero image to `Dru_hero` and removed the announcement banner.
- Imported a texture image through Astro's asset pipeline.

### Active pages

- `/` — home
- `/about`
- `/services`
- `/pricing`
- `/contact`
- `/blog` and `/blog/[...page]` (paginated blog list)
- `/privacy` and `/terms` (Markdown)
- `/rss.xml.ts`
- A collection of alternative landing and home templates under `/homes/*` and `/landing/*` (currently included from the AstroWind template and available for future use)

---

## Roadmap / next steps

The end goal is to move this local `vendor/integration` into a published package or an `astro add` ready integration so that AstroWind template instances can receive updates without having to copy-paste the source code.

Until then, changes to the integration should keep the virtual module contract and the `src/config.yaml` schema stable so that components and layouts continue to work when the package is eventually extracted.
