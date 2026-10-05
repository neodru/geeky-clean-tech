// "Service needed" choices on the contact form. Shared by src/pages/contact.astro
// (the dropdown) and functions/api/contact.ts (the server-side allowlist), so a
// choice the form offers is always one the server accepts. Keep this file free
// of "~/" aliases and Astro imports: the Pages Function bundles it directly.
import catalog from './catalog.json';

export interface ContactServiceOption {
  value: string;
  // Matches ?service=<slug> links elsewhere on the site.
  slug: string;
  // Plans this service accepts from ?plan= links (none for most services).
  plans?: string[];
}

export interface ContactPackageOption {
  value: string;
  label: string;
  // Matches ?service=package&plan=<plan>.
  plan: string;
}

const SERVICES: ContactServiceOption[] = [
  { value: 'Home IT Support', slug: 'home-it-support' },
  { value: 'Senior Tech Support', slug: 'senior-tech-support' },
  { value: 'Business IT Services', slug: 'business-it-services' },
  { value: 'Cybersecurity', slug: 'cybersecurity' },
  { value: 'Data Recovery', slug: 'data-recovery' },
  { value: 'Network Support', slug: 'network-support' },
  { value: 'Computer Repair', slug: 'computer-repair' },
  { value: 'Remote Support', slug: 'remote-support' },
  // Tiers linked from src/pages/monthly-technology-concierge.astro.
  { value: 'Monthly Technology Concierge', slug: 'monthly-concierge', plans: ['essential', 'executive', 'premier'] },
];

export const OTHER_SERVICE = 'Other / Not sure';

export function contactServiceOptions(): { services: ContactServiceOption[]; packages: ContactPackageOption[] } {
  return {
    services: [
      ...SERVICES,
      ...catalog.areas.flatMap((area) =>
        area.services.map((service) => ({ value: service.title, slug: `catalog-${service.sku}` }))
      ),
    ],
    // Packages come from the Notion-synced catalog. The stored value has no
    // price, so a price change in Notion doesn't create a new lead category.
    packages: catalog.bundles.map((b) => ({
      value: `Package: ${b.title}`,
      label: `${b.title} package ($${b.price.toLocaleString('en-US')})`,
      plan: b.id,
    })),
  };
}

// The plan a lead may record for a service: a package's own id, a listed
// tier, or nothing. Anything else (e.g. Home IT Support + "executive") is dropped.
export function planForService(service: string, plan: string): string {
  if (!plan) return '';
  const { services, packages } = contactServiceOptions();
  const pkg = packages.find((p) => p.value === service);
  if (pkg) return pkg.plan === plan ? plan : '';
  return services.find((s) => s.value === service)?.plans?.includes(plan) ? plan : '';
}

export function allowedContactServices(): string[] {
  const { services, packages } = contactServiceOptions();
  return [...services.map((s) => s.value), ...packages.map((p) => p.value), OTHER_SERVICE];
}
