const testSiteKeys = new Set([
  '1x00000000000000000000AA',
  '2x00000000000000000000AB',
  '1x00000000000000000000BB',
  '2x00000000000000000000BB',
  '3x00000000000000000000FF',
]);

export function assertProductionTurnstileSiteKey(
  siteKey: string | undefined,
  pagesBranch: string | undefined,
  productionBuild: boolean
) {
  // main is this project's Cloudflare Pages production branch. Preview builds
  // may use the official test keys for dedicated-database verification.
  if (productionBuild && pagesBranch === 'main' && testSiteKeys.has(siteKey?.trim() ?? '')) {
    throw new Error(
      'PUBLIC_TURNSTILE_SITE_KEY cannot use a Turnstile test key on the production branch main. Configure a real widget site key and matching TURNSTILE_SECRET_KEY, then rebuild.'
    );
  }
}
