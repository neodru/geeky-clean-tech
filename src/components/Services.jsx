import React from 'react';
import { UserCheck, Cpu, Lock, HardDrive, Monitor, Truck, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const SERVICES = [
  {
    id: 'in-home',
    icon: UserCheck,
    title: 'Mobile Senior Tech Tutoring & In-Home Setup',
    subtitle: 'Patient 1-on-1 Guidance • We Come Directly To You',
    image: '/images/senior-concierge.jpg',
    description: 'Designed specifically for seniors and home-based professionals in Pacific Beach, La Jolla, and Mount Soledad. Our certified mobile technician arrives at your door to solve frustrations gracefully and patiently.',
    features: [
      'Patient, jargon-free instruction for Mac, iPad, & iPhone',
      'Password vault organization & two-factor security',
      'High-speed Wi-Fi, mesh network, & smart home sync',
      'Printer, email, & cloud data synchronization'
    ]
  },
  {
    id: 'cleanroom',
    icon: Cpu,
    title: 'Precision Diagnostics & Micro-Soldering',
    subtitle: 'Advanced Chip Repair for Apple Mac & High-End PCs',
    image: '/images/cleanroom.jpg',
    description: 'When standard repair shops tell you a logic board is "unfixable," our precision micro-soldering unit repairs individual chips, thermal liquid-metal systems, and cracked screens with a full 90-day warranty.',
    features: [
      'MacBook Pro liquid damage mitigation & logicboard repair',
      'Retina display screen & chassis component replacement',
      'Thermal liquid metal dissipation & fan overhaul',
      '90-Day Full Hardware Warranty included on all repairs'
    ]
  },
  {
    id: 'home-office',
    icon: Monitor,
    title: 'Mobile IT Unit & Executive Workstation Rigs',
    subtitle: 'High-Performance Dual-Monitor & Silent Rigs',
    image: '/images/home-office.jpg',
    description: 'Our mobile dispatch team arrives with complete diagnostic gear to configure ultra-fast, whisper-quiet workstations for business executives, financial traders, and creative professionals.',
    features: [
      'Dual & quad-monitor ergonomic mounting & setup',
      'Whisper-quiet liquid cooling & acoustic optimization',
      'Encrypted local NAS & automated cloud backup',
      'Zero-latency remote & on-site IT support'
    ]
  }
];

const SECONDARY_SERVICES = [
  {
    icon: Lock,
    title: 'Cyber Security & Phishing Shield',
    desc: 'Fortify your personal identity and accounts. We configure zero-leak VPNs, eliminate malware, and setup biometric password managers.'
  },
  {
    icon: HardDrive,
    title: 'Quantum Cleanroom Data Recovery',
    desc: 'Forensic extraction of priceless photos, financial ledgers, and estate records from corrupted, dropped, or liquid-damaged storage drives.'
  },
  {
    icon: Truck,
    title: 'Uber Concierge & Mobile Pickup (15-Mi Radius)',
    desc: 'Cannot leave your home or office? We dispatch our mobile unit or arrange secure Uber Concierge pickup & return anywhere within a 15-mile radius.'
  }
];

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" style={{ padding: '90px 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Zap size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Mobile IT Service Matrix</span>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, marginBottom: '18px' }}>
            Next-Gen Cyber Services <span className="neon-gradient-text">Built for Precision</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65 }} className="font-tech">
            100% mobile and remote IT support grid. We bring high-tech diagnostic tools directly to your home or executive office in San Diego.
          </p>
        </div>

        {/* Primary Featured Services Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '64px' }}>
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={s.id}
                className="glass-panel"
                style={{
                  padding: '32px',
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                  gap: '40px',
                  alignItems: 'center',
                  borderColor: isEven ? 'var(--border-strong)' : 'var(--border-pink)'
                }}
                className="service-card-grid"
              >
                {/* Text Side */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div className="font-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: isEven ? 'var(--neon-cyan)' : 'var(--neon-pink)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '12px' }}>
                    <Icon size={16} />
                    <span>{s.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
                    {s.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.65, marginBottom: '24px' }}>
                    {s.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
                    {s.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--text-main)' }}>
                        <Check size={16} style={{ color: 'var(--neon-cyan)', marginTop: '3px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="btn-secondary"
                    style={{ padding: '12px 24px', fontSize: '13px' }}
                  >
                    <span>Request Dispatch</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Image Side */}
                <div style={{ order: isEven ? 2 : 1, position: 'relative' }}>
                  <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-strong)', boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)' }}>
                    <img
                      src={s.image}
                      alt={s.title}
                      style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="secondary-services-grid">
          {SECONDARY_SERVICES.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <div
                key={i}
                className="glass-panel"
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neon-cyan)', marginBottom: '20px', boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-main)' }}>
                    {sec.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
                    {sec.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .service-card-grid {
            grid-template-columns: 1fr !important;
          }
          .secondary-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
