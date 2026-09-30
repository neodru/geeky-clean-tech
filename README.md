# Geeky Clean Technology — Website

Marketing site for [Geeky Clean Technology](https://geekycleantechnology.com), a San Diego IT support and technology services company (home, senior, small-business, cybersecurity, and monthly technology concierge support).

Built with [Astro 7](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/), starting from the open-source [AstroWind](https://github.com/arthelokyo/astrowind) template (MIT). Deployed on Cloudflare Pages.

## Getting started

Requires Node.js 22+ (see `.nvmrc`).

```sh
npm ci
npm run dev        # http://localhost:4321
```

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Local dev server                               |
| `npm run build`   | Production build to `dist/`                    |
| `npm run preview` | Serve the production build locally             |
| `npm run check`   | `astro check` + ESLint + Prettier (runs in CI) |
| `npm run fix`     | Auto-fix ESLint and Prettier issues            |

## Where things live

| Path                                   | Purpose                                                                           |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| `src/config.yaml`                      | Site name, URL, default SEO metadata, blog on/off, analytics, theme               |
| `src/navigation.ts`                    | Header and footer menus                                                           |
| `src/data/services.ts`                 | Content for every service page (features, FAQs, cross-sell, SEO)                  |
| `src/pages/[service].astro`            | Renders one page per entry in `services.ts`                                       |
| `src/pages/*.astro`                    | Standalone pages: home, about, contact, services, service area, monthly concierge |
| `src/pages/privacy.md`, `terms.md`     | Legal pages                                                                       |
| `src/data/post/`                       | Blog posts (Markdown/MDX). The blog is disabled until the first post is added     |
| `functions/api/contact.ts`             | Contact form handler (Cloudflare Pages Function → Notion)                         |
| `src/components/`, `src/layouts/`      | UI building blocks (from AstroWind, restyled)                                     |
| `src/assets/`                          | Images, favicons, global styles                                                   |
| `public/_redirects`, `public/_headers` | Cloudflare Pages redirects and cache headers                                      |
| `.agents/skills/`                      | How-to notes for AI coding agents (add a page, component, post; styling)          |

### Adding a service page

Add an entry to `services` in `src/data/services.ts` with a new `slug`, then link it from `src/navigation.ts`. The page is generated at `/<slug>`.

### Turning the blog on

1. Add posts to `src/data/post/`.
2. Set `apps.blog.isEnabled: true` in `src/config.yaml`.
3. Remove the blog rules from `public/_redirects`.

## Contact form

`/contact` posts to the Cloudflare Pages Function `functions/api/contact.ts`, which validates the submission and creates a row in the Notion [Website Leads](https://www.notion.so/e61123ba4ee848b9ad0983d34405bff1) database (Dashboard → Sales CRM). Honeypot and optional Cloudflare Turnstile block bots; the function rejects posts from other origins.

## Configuration

Set in Cloudflare Pages → Settings → Variables and secrets, for Production and Preview.

| Variable                       | Kind               | Purpose                                                                                            |
| ------------------------------ | ------------------ | -------------------------------------------------------------------------------------------------- |
| `NOTION_TOKEN`                 | Secret (runtime)   | Notion internal integration token; the integration must be connected to the Website Leads database |
| `NOTION_DATABASE_ID`           | Variable (runtime) | Website Leads database ID (`e61123ba4ee848b9ad0983d34405bff1`)                                     |
| `TURNSTILE_SECRET_KEY`         | Secret (runtime)   | Optional. Enables the server-side Turnstile check                                                  |
| `PUBLIC_TURNSTILE_SITE_KEY`    | Variable (build)   | Optional. Renders the Turnstile widget; set together with `TURNSTILE_SECRET_KEY`                   |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | Variable (build)   | Optional. Overrides `/api/contact` (testing only)                                                  |

`PUBLIC_*` variables are baked in at **build** time, so redeploy after changing them. See `.env.example`.

## Deployment

Cloudflare Pages builds `main` with `npm run build` and publishes `dist/`. Every pull request gets a preview URL. GitHub Actions (`.github/workflows/actions.yaml`) runs `npm run check` and a build on each PR.

## License

Site content and branding © Geeky Clean Technology. Template code is MIT-licensed; see [LICENSE.md](./LICENSE.md).
