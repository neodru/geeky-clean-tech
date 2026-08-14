import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/#services') },
    { text: 'Why Us', href: getPermalink('/#why-us') },
    { text: 'Pricing', href: getPermalink('/#pricing') },
    { text: 'Testimonials', href: getPermalink('/#testimonials') },
    { text: 'FAQ', href: getPermalink('/#faq') },
    { text: 'Contact', href: getPermalink('/#contact') },
  ],
  actions: [
    { 
      text: 'Request Service', 
      href: '#contact', 
      variant: 'primary',
      class: 'shadow-[0_0_15px_rgba(34,211,238,0.5)] border-primary hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-shadow duration-300'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Services', href: getPermalink('/#services') },
        { text: 'Why Us', href: getPermalink('/#why-us') },
        { text: 'Pricing', href: getPermalink('/#pricing') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Testimonials', href: getPermalink('/#testimonials') },
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Contact', href: getPermalink('/#contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'NDA available', href: '#' },
    { text: 'Warranty-backed', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    © 2026 Geeky Clean Technology.
  `,
};
