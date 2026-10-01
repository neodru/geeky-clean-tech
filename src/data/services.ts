export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFAQ {
  title: string;
  description: string;
}

export interface ServiceCrossSell {
  eyebrow: string;
  heading: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  headline: string;
  subheadline: string;
  intro: string | string[];
  features: ServiceFeature[];
  faqs: ServiceFAQ[];
  crossSell?: ServiceCrossSell;
  ctaText: string;
  ctaHref: string;
}

export const services: Service[] = [
  {
    slug: 'home-it-support',
    title: 'Home IT Support',
    metaTitle: 'Home IT Support San Diego | Geeky Clean Technology',
    metaDescription:
      'White-glove home IT support in San Diego. On-site and remote help for computers, Wi-Fi, printers, smart home, and more.',
    tagline: 'HOME IT SUPPORT',
    headline: 'Technology should just work at home',
    subheadline: 'Patient, expert on-site and remote IT support for your home, devices, and family.',
    intro: [
      'Geeky Clean Technology brings white-glove IT support directly to your home anywhere in the San Diego area. Whether you are setting up a new computer, troubleshooting slow Wi-Fi, or making your smart home actually smart, we handle the technical details so you do not have to.',
      'We work with individuals, families, and professionals who value clear explanations, careful work, and respect for their space. Every visit is backed by our warranty and our commitment to confidentiality.',
    ],
    features: [
      {
        title: 'Wi-Fi & network setup',
        description: 'Whole-home coverage, mesh networks, and reliable connectivity for work and streaming.',
        icon: 'tabler:wifi',
      },
      {
        title: 'Computer setup & troubleshooting',
        description: 'New device configuration, software issues, backups, and performance tuning for Mac and PC.',
        icon: 'tabler:device-laptop',
      },
      {
        title: 'Printer & peripheral help',
        description: 'Wireless printing, scanners, monitors, and other devices connected and working smoothly.',
        icon: 'tabler:printer',
      },
      {
        title: 'Smart home & IoT',
        description: 'Setup and secure configuration of cameras, doorbells, lights, assistants, and automation.',
        icon: 'tabler:home-bolt',
      },
      {
        title: 'Data backup & transfer',
        description: 'Protect photos, documents, and business files with local and cloud backup strategies.',
        icon: 'tabler:database',
      },
      {
        title: 'Security & privacy',
        description: 'Password managers, MFA, safe browsing habits, and privacy settings tailored to your household.',
        icon: 'tabler:shield-lock',
      },
    ],
    faqs: [
      {
        title: 'Do you come to my home, or can you work remotely?',
        description:
          'Both. We provide on-location support across San Diego, and many software issues can be resolved securely over a remote session.',
      },
      {
        title: 'How is home IT support priced?',
        description:
          'Diagnostic and troubleshooting visits start at $100 for the first hour, then $155 per hour. Setup, security, and training services are priced individually on our pricing page. You will know the cost before we begin.',
      },
      {
        title: 'Can you help set up a home office?',
        description:
          'Yes. We configure workstations, video conferencing, VPNs, printers, and reliable Wi-Fi so you can work without interruption.',
      },
      {
        title: 'Is my data kept private?',
        description: 'Absolutely. Confidentiality is central to our work, and NDAs are available upon request.',
      },
    ],
    crossSell: {
      eyebrow: 'ONGOING SUPPORT',
      heading: 'Prefer having someone who already knows your technology?',
      body: 'Monthly Technology Concierge gives you dedicated support time each month for troubleshooting, maintenance, security, training, and technology questions—with lower effective hourly pricing and an ongoing relationship with Geeky Clean Technology.',
      ctaText: 'View Monthly Concierge Plans',
      ctaHref: '/monthly-technology-concierge',
    },
    ctaText: 'Schedule Home IT Support',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'senior-tech-support',
    title: 'Senior Tech Support',
    metaTitle: 'Senior Tech Support San Diego | Geeky Clean',
    metaDescription:
      'Respectful, patient technology support for seniors in San Diego. We help with devices, email, video calls, and online safety.',
    tagline: 'SENIOR TECH SUPPORT',
    headline: 'Tech help that respects your pace',
    subheadline: 'Clear, one-on-one support for seniors who want to stay connected, safe, and confident online.',
    intro: [
      'Staying connected with family, managing appointments, and handling everyday tasks online should not feel frustrating. Our senior tech support is built around patience, respect, and clear explanations—never pressure or jargon.',
      'We help with the devices and services you actually use, at the pace that works for you. Whether you need a single lesson or ongoing help, we adapt to your goals and comfort level.',
    ],
    features: [
      {
        title: 'Patient, jargon-free guidance',
        description: 'We explain each step in plain language and repeat or slow down whenever you need.',
        icon: 'tabler:message-circle',
      },
      {
        title: 'Email & messaging',
        description: 'Set up and confidently use email, texting, and messaging apps to stay in touch.',
        icon: 'tabler:mail',
      },
      {
        title: 'Video calls',
        description: 'Learn FaceTime, Zoom, and other video tools so you can see family and attend appointments.',
        icon: 'tabler:video',
      },
      {
        title: 'Online safety',
        description: 'Recognize scams, avoid phishing, and use strong passwords without memorizing them.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'Device setup',
        description: 'Phones, tablets, computers, and smart displays configured for accessibility and ease of use.',
        icon: 'tabler:devices',
      },
      {
        title: 'Written reference notes',
        description: 'After each session, we leave simple, written steps so you can practice on your own.',
        icon: 'tabler:notes',
      },
    ],
    faqs: [
      {
        title: 'Do you treat seniors with patience?',
        description:
          'Yes. Our approach is respectful and unhurried. We adjust the pace to your comfort and focus on what you want to learn.',
      },
      {
        title: 'Can a family member join the session?',
        description:
          'Of course. Family members are welcome to attend, listen in remotely, or receive a summary afterward.',
      },
      {
        title: 'Do you offer recurring visits?',
        description:
          'Yes. Many clients prefer regular check-ins to stay current, ask questions, and keep devices running well.',
      },
      {
        title: 'Can you help with scams or suspicious messages?',
        description:
          'Yes. We can review messages and calls, secure your accounts, and help report fraud when appropriate.',
      },
    ],
    crossSell: {
      eyebrow: 'ONGOING HELP',
      heading: "Technology support doesn't have to start over every visit.",
      body: 'Monthly Technology Concierge provides regular support time for questions, training, device maintenance, account security, and remote assistance with one technology professional who gets to know your setup and works at your pace.',
      ctaText: 'View Monthly Support Options',
      ctaHref: '/monthly-technology-concierge',
    },
    ctaText: 'Request Senior Tech Support',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'business-it-services',
    title: 'Business IT Services',
    metaTitle: 'Business IT Services & Fractional CTO | San Diego',
    metaDescription:
      'Fractional CTO and business IT services for San Diego small businesses. Strategy, support, cloud, security, and growth.',
    tagline: 'BUSINESS IT SERVICES',
    headline: 'Enterprise-grade IT for small businesses',
    subheadline:
      'Strategic guidance, reliable support, and hands-on implementation—without the full-time executive cost.',
    intro: [
      'Small businesses in San Diego need technology that supports growth, not slows it down. Geeky Clean Technology acts as your part-time CTO and trusted IT partner, helping you plan, implement, and maintain the systems that run your company.',
      'From cloud migrations and cybersecurity to day-to-day help-desk support, we deliver the expertise of a full IT department on a flexible basis.',
      '<p class="text-sm mt-4 italic opacity-80">Looking for ongoing technology support for one person or household rather than an organization? <a href="/monthly-technology-concierge" class="text-primary hover:underline">Explore Monthly Technology Concierge</a>.</p>',
    ],
    features: [
      {
        title: 'Fractional CTO',
        description: 'Strategic technology roadmaps, vendor selection, and leadership at a fraction of full-time cost.',
        icon: 'tabler:building-skyscraper',
      },
      {
        title: 'Managed IT support',
        description: 'Ongoing help desk, monitoring, and maintenance so your team stays productive.',
        icon: 'tabler:headset',
      },
      {
        title: 'Cloud & email migration',
        description: 'Seamless moves to Google Workspace, Microsoft 365, and modern cloud infrastructure.',
        icon: 'tabler:cloud-upload',
      },
      {
        title: 'Cybersecurity',
        description: 'Email security, endpoint protection, MFA, policies, and incident response planning.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Backup & disaster recovery',
        description: 'Protect business-critical data and build recovery plans that minimize downtime.',
        icon: 'tabler:database',
      },
      {
        title: 'Vendor management',
        description: 'We liaise with your software, internet, and hardware vendors so you can focus on operations.',
        icon: 'tabler:briefcase',
      },
    ],
    faqs: [
      {
        title: 'What does a Fractional CTO cost?',
        description:
          'Strategic and diagnostic work is billed at $175/hour. Implementation and technician time is billed at $155/hour. Retainer plans are also available.',
      },
      {
        title: 'Can you support remote or hybrid teams?',
        description:
          'Yes. We design secure remote-access systems, collaboration tools, and policies for distributed teams.',
      },
      {
        title: 'Do you offer SLAs?',
        description:
          'Yes. Business clients can choose priority response and monthly managed support plans with defined SLAs.',
      },
      {
        title: 'Can you help with compliance?',
        description:
          'We can implement security controls and documentation that support common frameworks, and we coordinate with specialized compliance auditors when needed.',
      },
    ],
    ctaText: 'Book a Business Consultation',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    metaTitle: 'Cybersecurity Services San Diego | Geeky Clean',
    metaDescription:
      'Cybersecurity and incident response for San Diego homes and small businesses. Scam recovery, phishing defense, and audits.',
    tagline: 'CYBERSECURITY',
    headline: 'Protect what matters from digital threats',
    subheadline: 'Proactive security, incident response, and scam recovery for individuals and small businesses.',
    intro: [
      'Cybersecurity is no longer just a business concern. From phishing emails and account takeovers to ransomware and identity theft, individuals and small businesses in San Diego face real threats every day.',
      'Geeky Clean Technology provides practical, layered protection that fits your risk level and budget. If you are already dealing with an incident, our rapid response helps contain the damage and secure your accounts.',
      'Note: While we help organizations implement strong security controls and documentation, we do not provide formal HIPAA compliance certification or legal counsel. Clients with regulated compliance needs should consult a qualified auditor or attorney.',
    ],
    features: [
      {
        title: 'Phishing & scam defense',
        description: 'Learn to spot suspicious messages and configure protections that stop them before they land.',
        icon: 'tabler:alert-triangle',
      },
      {
        title: 'Incident response',
        description: 'Fast containment, account recovery, and remediation after breaches, scams, or malware.',
        icon: 'tabler:ambulance',
      },
      {
        title: 'Security audits',
        description: 'Review passwords, MFA, device settings, network security, and backup posture.',
        icon: 'tabler:clipboard-check',
      },
      {
        title: 'Password & MFA setup',
        description: 'Deploy password managers and multi-factor authentication across personal and business accounts.',
        icon: 'tabler:key',
      },
      {
        title: 'Network hardening',
        description: 'Secure routers, firewalls, guest networks, and remote access for home and office.',
        icon: 'tabler:network',
      },
      {
        title: 'Breach & dark-web checks',
        description: 'Identify exposed credentials and take action before they are exploited.',
        icon: 'tabler:search',
      },
    ],
    faqs: [
      {
        title: 'I think I have been hacked. What should I do?',
        description:
          'Call us immediately at 619-289-9205. We will guide you through containment steps and respond as quickly as possible.',
      },
      {
        title: 'Do you help with HIPAA compliance?',
        description:
          'We can implement security controls and documentation that support HIPAA-aligned practices, but we do not issue compliance certifications. We coordinate with qualified auditors and legal counsel for formal compliance needs.',
      },
      {
        title: 'What is included in a security audit?',
        description:
          'We review your devices, accounts, network, backups, and daily habits, then provide a prioritized action plan.',
      },
      {
        title: 'How much does incident response cost?',
        description:
          'Emergency incident response and after-hours support start at $250 for the first hour, then $200 per hour. Retainer plans are available.',
      },
    ],
    ctaText: 'Get Security Help',
    ctaHref: 'tel:+16192899205',
  },
  {
    slug: 'data-recovery',
    title: 'Data Recovery',
    metaTitle: 'Data Recovery Services San Diego | Geeky Clean',
    metaDescription:
      'Professional data recovery and backup in San Diego. Recover photos, documents, and business files. Lab referrals available.',
    tagline: 'DATA RECOVERY',
    headline: 'Recover the files that matter most',
    subheadline:
      'On-site recovery for failed drives, accidental deletion, and backup restoration—with clean-room lab referrals when needed.',
    intro: [
      'Losing photos, documents, or business records can be stressful. We provide calm, methodical data recovery services in San Diego, starting with on-site diagnostics and safe recovery attempts.',
      'For drives with physical damage or complex failures, we partner with trusted clean-room laboratories and can coordinate the referral, shipping, and recovery process. We are transparent about what can be recovered and what it will cost before any lab work begins.',
    ],
    features: [
      {
        title: 'Hard drive & SSD recovery',
        description: 'Diagnostics and recovery for internal and external drives, including Mac and PC storage.',
        icon: 'tabler:disc',
      },
      {
        title: 'Photo & document rescue',
        description: 'Recover precious memories and critical files from failing or accidentally formatted media.',
        icon: 'tabler:photo',
      },
      {
        title: 'Backup setup & verification',
        description: 'Prevent future loss with local, cloud, and hybrid backup strategies that actually work.',
        icon: 'tabler:cloud-upload',
      },
      {
        title: 'RAID & NAS recovery',
        description: 'Support for small business network-attached storage and multi-drive arrays.',
        icon: 'tabler:server',
      },
      {
        title: 'Clean-room lab referrals',
        description: 'When physical recovery is needed, we coordinate with specialized labs and manage the handoff.',
        icon: 'tabler:transfer-in',
      },
      {
        title: 'Recovery planning',
        description: 'Build a disaster recovery plan so the next failure is a minor inconvenience, not a crisis.',
        icon: 'tabler:clipboard-list',
      },
    ],
    faqs: [
      {
        title: 'Can all data be recovered?',
        description:
          'Not always. We give you an honest assessment after diagnostics. Severe physical damage may require a clean-room lab, and success depends on the extent of the damage.',
      },
      {
        title: 'Do you perform clean-room recovery in-house?',
        description:
          'No. We do not have an in-house clean-room facility. For physically damaged drives, we refer to trusted partner labs and help manage the process.',
      },
      {
        title: 'How is data recovery priced?',
        description:
          'On-site diagnostics and logical recovery are billed at our standard rates. Lab recovery is quoted separately by the partner lab based on drive condition.',
      },
      {
        title: 'Can you recover data from phones or tablets?',
        description:
          'In many cases, yes. Contact us with the device details and we will let you know the best path forward.',
      },
    ],
    ctaText: 'Start Data Recovery',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'network-support',
    title: 'Network Support',
    metaTitle: 'Network & Wi-Fi Support San Diego | Geeky Clean',
    metaDescription:
      'Home and office network setup, Wi-Fi optimization, and troubleshooting in San Diego. Fast, secure, whole-building coverage.',
    tagline: 'NETWORK SUPPORT',
    headline: 'Fast, reliable connectivity everywhere',
    subheadline: 'Professional Wi-Fi design, troubleshooting, and secure network setup for homes and small offices.',
    intro: [
      'A weak or unreliable network turns every work call and streaming session into a struggle. We design, install, and troubleshoot networks that deliver strong, secure coverage throughout your home or office.',
      'Whether you need a single mesh system, a multi-access-point office network, or help fixing mysterious dropouts, we bring the tools and expertise to get you connected.',
    ],
    features: [
      {
        title: 'Wi-Fi coverage mapping',
        description: 'Identify dead zones and design a network layout that covers every room and outdoor space.',
        icon: 'tabler:map',
      },
      {
        title: 'Router & mesh setup',
        description: 'Install and configure consumer and business-grade routers, mesh systems, and access points.',
        icon: 'tabler:router',
      },
      {
        title: 'Wired network installation',
        description: 'Ethernet runs, wall jacks, switch configuration, and structured cabling for demanding spaces.',
        icon: 'tabler:plug',
      },
      {
        title: 'Guest & IoT networks',
        description: 'Separate visitor and smart-device traffic from your primary network for better security.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'VPN & remote access',
        description: 'Secure connections for remote workers and traveling professionals.',
        icon: 'tabler:world',
      },
      {
        title: 'Performance tuning',
        description: 'Optimize DNS, QoS, channel selection, and firmware for speed and stability.',
        icon: 'tabler:activity',
      },
    ],
    faqs: [
      {
        title: 'Why does my Wi-Fi keep dropping?',
        description:
          'Common causes include interference, outdated firmware, poor placement, and overloaded channels. We diagnose the root cause and fix it.',
      },
      {
        title: 'Can you wire my home or office with Ethernet?',
        description:
          'Yes. We install structured cabling, wall jacks, and switches for rooms that need wired reliability.',
      },
      {
        title: 'Do you support business-grade firewalls?',
        description: 'Yes. We configure UniFi, pfSense, SonicWall, and other business firewalls and access points.',
      },
      {
        title: 'How long does a typical network install take?',
        description:
          'A simple mesh setup may take one to two hours. Larger wired installations are scoped and scheduled individually.',
      },
    ],
    ctaText: 'Fix My Network',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'computer-repair',
    title: 'Computer Repair',
    metaTitle: 'Computer Repair San Diego | Mac & PC | Geeky Clean',
    metaDescription:
      'Expert Mac and PC repair in San Diego. Diagnostics, upgrades, virus removal, and performance tuning—on-site or remote.',
    tagline: 'COMPUTER REPAIR',
    headline: 'Mac & PC repair done right',
    subheadline: 'Expert diagnostics, upgrades, and fixes for Apple and Windows computers—at your home or office.',
    intro: [
      'When your computer stops cooperating, you need fast, honest help. Geeky Clean Technology repairs Mac and PC systems on-site across San Diego, from hardware diagnostics and upgrades to virus removal and software issues.',
      'We explain what is wrong, what your options are, and what it will cost before any work begins. No upsells, no jargon—just reliable repair.',
    ],
    features: [
      {
        title: 'Diagnostics & troubleshooting',
        description: 'Identify hardware failures, software conflicts, and performance bottlenecks accurately.',
        icon: 'tabler:stethoscope',
      },
      {
        title: 'Hardware upgrades',
        description: 'RAM, SSD, and storage upgrades that extend the life of your current machine.',
        icon: 'tabler:cpu',
      },
      {
        title: 'Virus & malware cleanup',
        description: 'Remove infections, restore performance, and install protection to keep you safe.',
        icon: 'tabler:bug',
      },
      {
        title: 'Performance tuning',
        description: 'Clean up startup programs, storage clutter, and settings for a faster, smoother machine.',
        icon: 'tabler:rocket',
      },
      {
        title: 'Screen & battery repair',
        description: 'We coordinate screen, battery, and keyboard repairs for laptops and mobile devices.',
        icon: 'tabler:device-laptop',
      },
      {
        title: 'Operating system reinstallation',
        description: 'Clean OS installs, migrations, and recovery when your system will not boot.',
        icon: 'tabler:refresh',
      },
    ],
    faqs: [
      {
        title: 'Do you repair computers on-site?',
        description:
          'Yes. We come to your home or office across the San Diego area. Some repairs may need to be completed off-site and returned.',
      },
      {
        title: 'Should I repair or replace my computer?',
        description:
          'We give you an honest assessment. If a simple upgrade or fix is the better value, we will tell you. If replacement makes more sense, we will help you choose and migrate.',
      },
      {
        title: 'Do you work on Apple products?',
        description:
          'Yes. We support MacBooks, iMacs, Mac minis, and Apple peripherals, including software and many hardware repairs.',
      },
      {
        title: 'Is virus removal guaranteed?',
        description:
          'We thoroughly remove known infections and restore system health. Ongoing safe browsing habits and protection reduce the risk of reinfection.',
      },
    ],
    ctaText: 'Request Repair',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'remote-support',
    title: 'Remote Support',
    metaTitle: 'Remote IT Support San Diego | Geeky Clean',
    metaDescription:
      'Fast, secure remote IT support for San Diego and beyond. Software fixes, email setup, troubleshooting, and training.',
    tagline: 'REMOTE SUPPORT',
    headline: 'Instant help from anywhere',
    subheadline:
      'Secure remote support for software issues, email, printers, and training—no waiting for a house call.',
    intro: [
      'Many technology problems can be solved without anyone stepping through your door. Our secure remote support service connects a technician to your computer quickly, so you can get back to work the same day.',
      'Remote support is available to clients in San Diego and nationwide. It is ideal for software troubleshooting, email and calendar setup, virus cleanup, and one-on-one training.',
    ],
    features: [
      {
        title: 'Same-day sessions',
        description: 'Book a remote session and get help quickly without scheduling an on-site visit.',
        icon: 'tabler:clock',
      },
      {
        title: 'Software troubleshooting',
        description: 'Fix crashes, errors, slow performance, and compatibility issues remotely.',
        icon: 'tabler:tool',
      },
      {
        title: 'Email & calendar setup',
        description: 'Configure Gmail, Outlook, Microsoft 365, and Google Workspace across all your devices.',
        icon: 'tabler:calendar',
      },
      {
        title: 'Virus & malware cleanup',
        description: 'Remove threats and restore performance without handing off your physical machine.',
        icon: 'tabler:shield-check',
      },
      {
        title: 'One-on-one training',
        description: 'Learn new software, shortcuts, and workflows with a live instructor on your screen.',
        icon: 'tabler:school',
      },
      {
        title: 'Secure connection',
        description: 'Encrypted remote sessions with your privacy and data security in mind.',
        icon: 'tabler:lock',
      },
    ],
    faqs: [
      {
        title: 'Is remote support safe?',
        description:
          'Yes. We use encrypted remote-access tools, and you can see everything we do. The session ends when you close it.',
      },
      {
        title: 'What issues can be fixed remotely?',
        description:
          'Most software, email, printing, virus, and training issues can be handled remotely. Hardware problems generally require an on-site visit.',
      },
      {
        title: 'Do I need to be present during the session?',
        description: 'Yes. We work alongside you, explain what we are doing, and answer questions in real time.',
      },
      {
        title: 'Can I get remote support outside San Diego?',
        description: 'Yes. Remote support is available nationwide for individuals and small businesses.',
      },
    ],
    ctaText: 'Book Remote Support',
    ctaHref: 'mailto:support@geekycleantechnology.com',
  },
  {
    slug: 'service-area',
    title: 'Service Area',
    metaTitle: 'San Diego Service Area | Geeky Clean Technology',
    metaDescription:
      'Mobile IT support across San Diego, California. We come to you in La Jolla, Del Mar, Encinitas, Rancho Bernardo, and more.',
    tagline: 'SERVICE AREA',
    headline: "San Diego's mobile IT partner",
    subheadline: 'On-location support across the San Diego area, plus remote service nationwide.',
    intro: [
      'Geeky Clean Technology is a fully mobile IT provider. We do not operate a walk-in storefront; instead, we come directly to your home, office, or property anywhere in the greater San Diego area.',
      'Not sure if we cover your neighborhood? Give us a call at 619-289-9205. If you are outside our on-location range, we can almost certainly help remotely.',
    ],
    features: [
      {
        title: 'On-location',
        description: 'A technician comes to you for hardware, network, and in-person support needs.',
        icon: 'tabler:car',
      },
      {
        title: 'Remote',
        description: 'Secure online support for software issues, training, and quick fixes anywhere.',
        icon: 'tabler:wifi',
      },
      {
        title: 'NDA available',
        description: 'Confidentiality agreements are available for executives, professionals, and businesses.',
        icon: 'tabler:file-shredder',
      },
      {
        title: 'Warranty-backed',
        description: 'We stand by our work. If something is not right, we make it right.',
        icon: 'tabler:certificate',
      },
      {
        title: 'Fully mobile',
        description: 'No storefront to visit. We bring the service directly to your door.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Same-week availability',
        description: 'Most on-location appointments are scheduled within a few business days.',
        icon: 'tabler:calendar-clock',
      },
    ],
    faqs: [
      {
        title: 'Do you have a physical store?',
        description:
          'No. Geeky Clean Technology is mobile and remote-only. We come to your location or connect securely online.',
      },
      {
        title: 'What if I live outside San Diego?',
        description: 'Remote support is available nationwide. On-location visits are focused on the San Diego area.',
      },
      {
        title: 'Do you serve businesses outside San Diego remotely?',
        description: 'Yes. Fractional CTO and remote business support are available to clients across the country.',
      },
      {
        title: 'Can you come to my office on short notice?',
        description:
          'We do our best to accommodate urgent requests. Emergency and after-hours support is available at incident-response rates.',
      },
    ],
    ctaText: 'Confirm Your Location',
    ctaHref: 'tel:+16192899205',
  },
];

// ---------------------------------------------------------------------------
// Service catalog & pricing
// Prices are derived from estimated hours × HOURLY_RATE, rounded to the
// nearest dollar for display. Change the rate here and every price updates.
// ---------------------------------------------------------------------------

export const HOURLY_RATE = 155;

export type PricingType = 'fixed' | 'from';

export interface CatalogService {
  title: string;
  description: string;
  hours: number;
  pricing?: PricingType;
}

export interface CatalogArea {
  id: string;
  title: string;
  icon: string;
  services: CatalogService[];
}

export interface ServiceBundle {
  id: string;
  title: string;
  tagline: string;
  forWho: string;
  icon: string;
  includes: string[];
  hours: number;
  price: number;
}

export const priceFor = (hours: number): number => Math.round(hours * HOURLY_RATE);

export const formatHours = (hours: number): string =>
  hours < 1 ? `${hours * 60} min` : `${hours} ${hours === 1 ? 'hr' : 'hrs'}`;

export const formatPrice = (service: Pick<CatalogService, 'hours' | 'pricing'>): string =>
  `${service.pricing === 'from' ? 'from ' : ''}$${priceFor(service.hours).toLocaleString('en-US')}`;

export const serviceCatalog: CatalogArea[] = [
  {
    id: 'account-security',
    title: 'Secure Online & Email Account Management',
    icon: 'tabler:mail-cog',
    services: [
      {
        title: 'Email Security Checkup',
        description:
          'Review recovery phone and email, signed-in devices, hidden forwarding rules, and apps connected to your email.',
        hours: 1,
      },
      {
        title: 'Two-Step Verification Setup',
        description:
          'Turn on 2-step login for up to 3 key accounts, set up an authenticator app, and print backup codes.',
        hours: 1,
      },
      {
        title: 'Hacked Account Recovery',
        description: 'Regain access, lock out the intruder, remove rules they set up, and help you warn your contacts.',
        hours: 2,
        pricing: 'from',
      },
      {
        title: 'Inbox Cleanup & Scam Filtering',
        description:
          'Unsubscribe from junk, set up filters and blocked senders, and learn how to spot phishing emails.',
        hours: 1.5,
      },
      {
        title: 'Online Account Inventory',
        description: 'List every account you have, close the ones you no longer use, and update old email addresses.',
        hours: 2,
      },
      {
        title: 'Data Breach Check & Response',
        description:
          'Check whether your email or passwords appeared in known data leaks and change any exposed passwords.',
        hours: 1,
      },
    ],
  },
  {
    id: 'mobile-security',
    title: 'Secure Mobile Device Configuration',
    icon: 'tabler:device-mobile-check',
    services: [
      {
        title: 'Phone Security Hardening',
        description: 'Strong passcode, Face or fingerprint ID, auto-lock, automatic updates, and lock-screen privacy.',
        hours: 1,
      },
      {
        title: 'Lost Phone Protection',
        description: 'Set up Find My or Find My Device and remote erase, and practice locating your phone together.',
        hours: 0.5,
      },
      {
        title: 'App Privacy Review',
        description:
          'Check which apps can see your location, camera, microphone, and contacts, and turn off what is not needed.',
        hours: 1,
      },
      {
        title: 'Scam Call & Text Protection',
        description: 'Silence unknown callers, turn on spam filtering, block numbers, and set up carrier protections.',
        hours: 0.75,
      },
      {
        title: 'Family Safety Controls',
        description:
          'Screen Time or Google Family Link for children: time limits, content filters, and purchase approval.',
        hours: 1.5,
      },
      {
        title: 'Backup Verification',
        description: 'Confirm your phone is actually backing up, and show you where your backup lives.',
        hours: 0.5,
      },
    ],
  },
  {
    id: 'pc-security',
    title: 'Secure PC Configuration',
    icon: 'tabler:device-desktop-check',
    services: [
      {
        title: 'Computer Security Baseline',
        description: 'Updates, firewall, antivirus, screen lock, and a separate everyday (non-admin) user account.',
        hours: 1.5,
      },
      {
        title: 'Virus & Malware Removal',
        description: 'Scan for and remove malware, pop-ups, and unwanted programs, then confirm the computer is clean.',
        hours: 2,
        pricing: 'from',
      },
      {
        title: 'Speed & Startup Cleanup',
        description: 'Remove preinstalled junk software and stop unneeded programs from launching at startup.',
        hours: 1,
      },
      {
        title: 'Drive Encryption Setup',
        description:
          'Turn on BitLocker or FileVault so a stolen computer cannot be read, and store the recovery key safely.',
        hours: 1,
      },
      {
        title: 'Automatic Backup Setup',
        description: 'Automatic backups to an external drive and the cloud, plus a test restore so you know it works.',
        hours: 1.5,
      },
      {
        title: 'Safe Browser Setup',
        description: 'Remove risky browser add-ons, block ads and trackers, and set safe defaults.',
        hours: 0.75,
      },
    ],
  },
  {
    id: 'password-training',
    title: 'Password Management Training',
    icon: 'tabler:password-user',
    services: [
      {
        title: 'Password Manager Setup',
        description:
          'Install a password manager (Apple Passwords, Bitwarden, or 1Password), create your master password, and set it up on all your devices.',
        hours: 1.5,
      },
      {
        title: 'Password Import & Cleanup',
        description: 'Import saved passwords, then fix weak and reused ones on your most important accounts.',
        hours: 2,
      },
      {
        title: 'One-on-One Password Training',
        description: 'Hands-on practice saving, filling in, and creating passwords until you are comfortable.',
        hours: 1,
      },
      {
        title: 'Family Password Sharing',
        description: 'A shared vault for household accounts such as streaming, utilities, and Wi-Fi.',
        hours: 1.5,
      },
      {
        title: 'Emergency & Legacy Access',
        description:
          'Set up a trusted contact, Apple Legacy Contact, and a printed emergency kit stored somewhere safe.',
        hours: 1,
      },
      {
        title: 'Passkeys Introduction',
        description: 'What passkeys are, and how to set them up on accounts that support them.',
        hours: 0.75,
      },
    ],
  },
  {
    id: 'ios',
    title: 'Apple iOS Setup & Configuration (iPhone & iPad)',
    icon: 'tabler:brand-apple',
    services: [
      {
        title: 'New iPhone/iPad Setup & Transfer',
        description: 'Activate your device and move apps, photos, messages, and contacts from your old one.',
        hours: 1.5,
      },
      {
        title: 'Android-to-iPhone Switch',
        description:
          'Move contacts, photos, and messages from an Android phone, then walk you through the differences.',
        hours: 2,
      },
      {
        title: 'Apple Account Setup & Security',
        description: 'Create or recover your Apple Account, turn on 2-step login, and add recovery contacts.',
        hours: 1,
      },
      {
        title: 'iCloud Photos & Storage Fix',
        description: 'Solve "storage full," choose the right iCloud plan, and confirm your photos are syncing.',
        hours: 1,
      },
      {
        title: 'Senior-Friendly Setup',
        description:
          'Larger text, a simplified home screen (Assistive Access), hearing aid pairing, and Emergency SOS.',
        hours: 1,
      },
      {
        title: 'Family Sharing Setup',
        description: "Share purchases, iCloud storage, and locations, and approve children's purchases.",
        hours: 1,
      },
      {
        title: 'iPhone/iPad Basics Training',
        description: 'Calls, texts, photos, FaceTime, and the App Store, practiced at your pace.',
        hours: 1,
      },
    ],
  },
  {
    id: 'android',
    title: 'Android Setup & Configuration',
    icon: 'tabler:brand-android',
    services: [
      {
        title: 'New Android Setup & Transfer',
        description: 'Activate your phone or tablet and move apps, photos, and contacts from your old device.',
        hours: 1.5,
      },
      {
        title: 'iPhone-to-Android Switch',
        description: "Move your data off an iPhone and turn off iMessage so you don't miss texts.",
        hours: 2,
      },
      {
        title: 'Google Account Setup & Security',
        description: "Create or recover your Google account, turn on 2-step login, and run Google's Security Checkup.",
        hours: 1,
      },
      {
        title: 'Google Photos & Storage Fix',
        description: 'Solve "storage full," manage your Google One plan, and confirm your photos are backing up.',
        hours: 1,
      },
      {
        title: 'Simplified & Accessible Setup',
        description: 'Easy Mode, larger text, a simpler home screen, and hearing aid pairing.',
        hours: 1,
      },
      {
        title: 'Android Basics Training',
        description: 'Calls, texts, photos, video calls, and the Play Store, practiced at your pace.',
        hours: 1,
      },
    ],
  },
  {
    id: 'macos',
    title: 'Apple macOS Setup & Configuration',
    icon: 'tabler:device-laptop',
    services: [
      {
        title: 'New Mac Setup & Migration',
        description: 'Set up your new Mac and transfer everything from your old one.',
        hours: 2,
      },
      {
        title: 'Windows-to-Mac Switch',
        description: 'Transfer your files from a PC and get a hands-on orientation to how a Mac works.',
        hours: 3,
      },
      {
        title: 'iCloud & iPhone Integration',
        description: 'Messages, Photos, AirDrop, and Handoff working between your Mac and iPhone.',
        hours: 1,
      },
      {
        title: 'Time Machine Backup Setup',
        description: 'Automatic backups to an external drive, with a test restore.',
        hours: 0.75,
      },
      {
        title: 'Mac Printer & Accessory Setup',
        description: 'Printer, scanner, monitor, keyboard, or mouse.',
        hours: 0.75,
      },
      {
        title: 'Mac Basics Training',
        description: 'Finder, files, Safari, Mail, and updates, practiced at your pace.',
        hours: 1,
      },
    ],
  },
  {
    id: 'windows',
    title: 'Windows Setup & Configuration',
    icon: 'tabler:brand-windows',
    services: [
      {
        title: 'New PC Setup & Data Transfer',
        description:
          'Set up your new PC, transfer files, browser bookmarks, and passwords, and remove preinstalled junk.',
        hours: 2.5,
      },
      {
        title: 'Windows 10 to 11 Upgrade',
        description:
          'Check that your computer can run Windows 11, back it up, and upgrade, or get a plan for replacing it.',
        hours: 2.5,
      },
      {
        title: 'Microsoft Account Setup & Security',
        description:
          'Create or recover your Microsoft account, turn on 2-step login, and set up a PIN or Windows Hello.',
        hours: 1,
      },
      {
        title: 'OneDrive Setup & Cleanup',
        description: 'Fix files unexpectedly moved to OneDrive and "storage full" warnings, and set up sync properly.',
        hours: 1,
      },
      {
        title: 'Windows Printer & Accessory Setup',
        description: 'Printer, scanner, monitor, or webcam.',
        hours: 0.75,
      },
      {
        title: 'Windows Basics Training',
        description: 'Files, the Start menu, your web browser, and updates, practiced at your pace.',
        hours: 1,
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Account Configuration',
    icon: 'tabler:cloud-lock',
    services: [
      {
        title: 'Cloud Storage Setup',
        description: 'Set up iCloud, Google Drive, OneDrive, or Dropbox on all your devices.',
        hours: 1,
      },
      {
        title: 'Cloud Plan Cost Review',
        description: 'Find duplicate or oversized storage subscriptions and recommend the right one.',
        hours: 0.75,
      },
      {
        title: 'Cloud Security & Sharing Audit',
        description: 'Check 2-step login, connected apps, and old shared links that still expose your files.',
        hours: 1,
      },
      {
        title: 'Shared Family Folders',
        description: 'Shared albums and folders with the right permissions for each family member.',
        hours: 1,
      },
      {
        title: 'Photo Library Consolidation',
        description: 'Combine photos from phones, computers, and clouds into one organized library.',
        hours: 3,
        pricing: 'from',
      },
      {
        title: 'Microsoft 365 / Google One Setup',
        description: 'Activate your subscription, install the apps, and add family members.',
        hours: 1.5,
      },
      {
        title: 'Cloud Service Migration',
        description: 'Move everything from one cloud service to another and verify nothing was lost.',
        hours: 2,
        pricing: 'from',
      },
    ],
  },
];

// Lead packages, designed around the top worries of non-technical and senior clients.
// Each bundles 4 hours of catalog services ($620 at the standard rate).
export const serviceBundles: ServiceBundle[] = [
  {
    id: 'scam-protection',
    title: 'Stop the Scammers',
    tagline: '"I keep getting scary calls and emails. I\'m afraid I\'ll click the wrong thing."',
    forWho: 'For anyone worried about scam calls, fake emails, and pop-ups.',
    icon: 'tabler:shield-x',
    includes: [
      'Scam Call & Text Protection',
      'Inbox Cleanup & Scam Filtering',
      'Email Security Checkup',
      'Safe Browser Setup',
    ],
    hours: 4,
    price: 575,
  },
  {
    id: 'new-phone',
    title: 'New Phone, Made Easy',
    tagline: '"I bought a new phone, but I\'m afraid to lose my photos and I can\'t read the screen."',
    forWho: 'For a new iPhone or Android, set up the way you like it.',
    icon: 'tabler:device-mobile-heart',
    includes: [
      'New Phone Setup & Transfer (iPhone or Android)',
      'Senior-Friendly / Accessible Setup',
      'Lost Phone Protection',
      'Phone Basics Training',
    ],
    hours: 4,
    price: 575,
  },
  {
    id: 'never-locked-out',
    title: 'Never Locked Out',
    tagline: '"I can\'t remember my passwords, and my family wouldn\'t know how to get in if something happened."',
    forWho: 'For peace of mind for you and your family.',
    icon: 'tabler:lock-open',
    includes: [
      'Password Manager Setup',
      'One-on-One Password Training',
      'Emergency & Legacy Access',
      'Backup Verification',
    ],
    hours: 4,
    price: 575,
  },
];
