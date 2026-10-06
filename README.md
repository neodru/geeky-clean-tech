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
| `src/data/catalog.json`                | Service menu, packages, and prices — generated from Notion, do not edit by hand   |
| `scripts/sync-catalog.mjs`             | Pulls the Notion Service Catalog into `catalog.json`                              |
| `src/utils/serviceSearch.ts`           | "Find a service" search on `/pricing` (synonyms, typos, ranking)                  |
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

### Changing prices or services

Notion is the master copy of the service menu and packages shown on `/pricing`.

1. Edit the **Service Catalog — Geeky Clean Technology** database in Notion. Only rows with **Active** checked are published.
2. Run `NOTION_TOKEN=... npm run sync:catalog` locally, or run **Sync catalog from Notion** from the GitHub Actions tab (it also runs daily). The workflow opens a pull request with the changes.
3. Merge the pull request to publish.

The sync validates every row (known Area, hours in 15-minute steps, prices filled in, one hourly rate, globally unique positive service SKUs) and changes nothing if a row is wrong. A new Area in Notion must also be added to `AREAS` in `scripts/sync-catalog.mjs`.

### Turning the blog on

1. Add posts to `src/data/post/`.
2. Set `apps.blog.isEnabled: true` in `src/config.yaml`.
3. Remove the blog rules from `public/_redirects`.

## Contact form

`/contact` posts to the Cloudflare Pages Function `functions/api/contact.ts`, which validates the submission and creates a row in the Notion [Website Leads](https://www.notion.so/e61123ba4ee848b9ad0983d34405bff1) database (Dashboard → Sales CRM). Honeypot and optional Cloudflare Turnstile block bots; the function rejects posts from other origins.

## Configuration

Site and contact form: set in Cloudflare Pages → Settings → Variables and secrets, for Production and Preview.

| Variable                       | Kind               | Purpose                                                                                            |
| ------------------------------ | ------------------ | -------------------------------------------------------------------------------------------------- |
| `NOTION_TOKEN`                 | Secret (runtime)   | Notion internal integration token; the integration must be connected to the Website Leads database |
| `NOTION_DATABASE_ID`           | Variable (runtime) | Website Leads database ID (`e61123ba4ee848b9ad0983d34405bff1`)                                     |
| `TURNSTILE_SECRET_KEY`         | Secret (runtime)   | Optional. Enables the server-side Turnstile check                                                  |
| `PUBLIC_TURNSTILE_SITE_KEY`    | Variable (build)   | Optional. Renders the Turnstile widget; set together with `TURNSTILE_SECRET_KEY`                   |
| `PUBLIC_CONTACT_FORM_ENDPOINT` | Variable (build)   | Optional. Overrides `/api/contact` (testing only)                                                  |

`PUBLIC_*` variables are baked in at **build** time, so redeploy after changing them. See `.env.example`.

Cloudflare Pages production builds (`CF_PAGES_BRANCH=main`) reject official
Turnstile test site keys. Configure a real widget site key and its matching runtime
secret in Production; test keys belong only in the dedicated test Preview.
This guard does not require Turnstile when both keys are intentionally unset.
If the production branch changes, update the guard in `src/utils/turnstile.ts`.

Notion select names cannot contain commas. The handler removes commas from the
stored Service name while retaining the form's original label and package plan.

Catalog sync: set as a GitHub repository secret (or in your shell for local runs).

| Variable       | Kind                     | Purpose                                                                                                                      |
| -------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `NOTION_TOKEN` | GitHub repository secret | Notion integration secret used by `npm run sync:catalog`. The integration must be connected to the Service Catalog database. |

Cloudflare secrets do not configure GitHub Actions. Create `NOTION_TOKEN` under
GitHub repository Settings → Secrets and variables → Actions, using a read-only
integration connected to the Service Catalog. Enable “Allow GitHub Actions to
create and approve pull requests” under Settings → Actions → General so the sync
can open an update PR, then manually run **Sync catalog from Notion**.

## Deployment

Cloudflare Pages builds `main` with `npm run build` and publishes `dist/`. Every pull request gets a preview URL. GitHub Actions (`.github/workflows/actions.yaml`) runs `npm run check` and a build on each PR.

## License

Site content and branding © Geeky Clean Technology. Template code is MIT-licensed; see [LICENSE.md](./LICENSE.md).

## Booking verification

Install browser dependencies once with `npx playwright install --with-deps chromium`.
Run `npm run test:booking` for desktop Chromium and a mobile viewport with touch
emulation. The command builds the site and starts a local production preview.
In proxy-only Node 24 environments, enable inherited proxy support with
`NODE_USE_ENV_PROXY=1 npm run test:booking`.
GitHub Actions also runs this suite on PRs and pushes to `main`, retaining failure
evidence for seven days. It covers plain-language search, keyboard selection, exact service/package
prefill, submitted fields, success feedback, invalid inputs, recoverable server
and network errors, retries, and stale-plan clearing. Browser submissions use
mocked API responses; separate checks run the actual Pages Function with mocked
Notion calls. Neither establishes real Notion persistence. Mobile emulation does
not establish Safari or physical-device compatibility.

### Preview UI checks

Set `E2E_PREVIEW_URL` to a Cloudflare preview URL and run
`npm run test:booking:preview` to reuse the desktop/mobile UI scenarios on the
hosted build. These checks intercept form submissions and block every unmatched
POST, so they cannot create Notion leads. They verify search, keyboard access,
selection, validation, and success/error rendering with mocked responses.
When `HTTPS_PROXY` is configured, the preview browser uses it.
Open the report with `npx playwright show-report playwright-report/preview-ui`.

### Real preview-to-Notion checks

Create a **dedicated test database**, with the same properties as Website Leads:
Name (title), Lead Status, Service, Audience, Source (select), Email (email), Phone
(phone), and Message (rich text). Connect the preview's Notion integration and a
read integration used by the tests. Keep the production database out of this flow.

On a Cloudflare Pages **preview** deployment containing these changes, configure:

- `NOTION_TOKEN`: secret with write access to the test database.
- `NOTION_DATABASE_ID`: the test database ID.
- `E2E_NOTION_TEST_DATABASE_ID`: the same test database ID. This enables the
  read-only `/api/booking-test-target` preflight on preview hostnames only.
- Leave `PUBLIC_CONTACT_FORM_ENDPOINT` unset so the form uses `/api/contact`.
- For bot verification, use Cloudflare's official test keys on the dedicated
  preview: `PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA` and
  `TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA`.
  Alternatively leave both unset on the dedicated test preview. Production bot
  verification is never changed or bypassed. Redeploy after build-variable changes.

Set these environment variables in the shell that runs the tests (do not commit
secrets):

| Variable                      | Purpose                                                                     |
| ----------------------------- | --------------------------------------------------------------------------- |
| `E2E_PREVIEW_URL`             | HTTPS preview origin, such as `https://<deployment>.<project>.pages.dev`    |
| `E2E_NOTION_TEST_DATABASE_ID` | Dedicated test database ID; production Website Leads is explicitly rejected |
| `E2E_NOTION_TOKEN`            | Secret with read access to that database                                    |

Run `npm run test:booking:integration`. Missing configuration skips these tests.
The preflight must confirm that the preview's actual write target matches the
expected test database before any submission. Each desktop/mobile service and
package test uses a unique synthetic name and `example.invalid` email, then
checks for exactly one matching Notion record and all submitted fields. Plans
are stored in Message as `Plan: <id>`, matching the existing handler. A second
query checks for duplicates 1.5 seconds after the initial match; this is a bounded
observation, not a guarantee against indefinitely delayed writes. Test records
remain in the dedicated database for inspection; remove them there when finished.

Open a report with `npx playwright show-report playwright-report/local` or
`npx playwright show-report playwright-report/integration`. Local failures retain
screenshots and Playwright traces in `test-results/`; traces include request data.
Integration traces are disabled to avoid retaining Notion authorization headers;
failure screenshots remain available. Reports and results are ignored by Git.
