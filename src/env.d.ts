// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

interface ImportMetaEnv {
  /** Overrides the contact form endpoint (defaults to the /api/contact Pages Function). */
  readonly PUBLIC_CONTACT_FORM_ENDPOINT?: string;
  /** Cloudflare Turnstile site key; the widget is only rendered when set. */
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}
