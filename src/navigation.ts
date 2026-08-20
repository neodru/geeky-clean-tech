import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    {
      text: 'Services',
      links: [
        { text: 'Home IT Support', href: getPermalink('home-it-support') },
        { text: 'Senior Tech Support', href: getPermalink('senior-tech-support') },
        { text: 'Business IT Services', href: getPermalink('business-it-services') },
        { text: 'Cybersecurity', href: getPermalink('cybersecurity') },
        { text: 'Data Recovery & Backup', href: getPermalink('data-recovery') },
        { text: 'Network Support', href: getPermalink('network-support') },
        { text: 'Computer Repair', href: getPermalink('computer-repair') },
        { text: 'Remote Support', href: getPermalink('remote-support') },
      ],
    },
    { text: 'Service Area', href: getPermalink('service-area') },
    { text: 'About', href: getPermalink('about') },
    { text: 'Contact', href: getPermalink('contact') },
  ],
  actions: [
    {
      text: 'Schedule IT Support',
      href: getPermalink('contact'),
      variant: 'primary' as const,
      class: 'shadow-[0_0_15px_rgba(34,211,238,0.5)] border-primary hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-shadow duration-300',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Home IT Support', href: getPermalink('home-it-support') },
        { text: 'Senior Tech Support', href: getPermalink('senior-tech-support') },
        { text: 'Business IT Services', href: getPermalink('business-it-services') },
        { text: 'Cybersecurity', href: getPermalink('cybersecurity') },
        { text: 'Data Recovery', href: getPermalink('data-recovery') },
        { text: 'Network Support', href: getPermalink('network-support') },
        { text: 'Computer Repair', href: getPermalink('computer-repair') },
        { text: 'Remote Support', href: getPermalink('remote-support') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('about') },
        { text: 'Service Area', href: getPermalink('service-area') },
        { text: 'Contact', href: getPermalink('contact') },
        { text: 'Privacy Policy', href: getPermalink('privacy') },
        { text: 'Terms of Service', href: getPermalink('terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mobile & Remote IT', href: getPermalink('service-area') },
    { text: 'NDA available', href: getPermalink('contact') },
    { text: 'Warranty-backed', href: getPermalink('contact') },
  ],
  socialLinks: [
    { ariaLabel: 'Call', icon: 'tabler:phone', href: 'tel:+16192899205' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:support@geekycleantechnology.com' },
  ],
  footNote: `© ${new Date().getFullYear()} Geeky Clean Technology. Mobile and remote IT service for the San Diego area. No walk-ins.`,
};
