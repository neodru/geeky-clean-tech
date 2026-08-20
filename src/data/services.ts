export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFAQ {
  title: string;
  description: string;
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
          'Personal IT Concierge visits start at $100 for the first hour, then $155 per hour. You will know the cost before we begin.',
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
