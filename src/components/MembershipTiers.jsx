import React from 'react';
import { Shield, Sparkles, Check, ArrowRight, Star, HeartHandshake, Zap, Cpu } from 'lucide-react';

const TIERS = [
  {
    name: 'On-Demand Mobile',
    tagline: 'Per-Dispatch Mobile Service',
    price: '$195',
    unit: 'per hour / project based',
    desc: 'Perfect for immediate hardware repair, screen replacement, or single-session setup.',
    popular: false,
    badge: 'Mobile Service',
    features: [
      'Precision mobile diagnostic',
      'In-home visit or 15-mi Uber Concierge pickup',
      '100% Confidentiality & NDA option',
      '90-Day Full Hardware Warranty',
      'Patient 1-on-1 instruction'
    ]
  },
  {
    name: 'Senior Legacy Care',
    tagline: 'Dedicated Mobile Tech Tutor',
    price: '$149',
    unit: 'per month (billed annually)',
    desc: 'The ultimate peace-of-mind package for seniors wanting trusted, patient tech support on call.',
    popular: true,
    badge: 'Most Popular for Seniors',
    features: [
      'Unlimited Phone & Remote Help Desk',
      'Dedicated Personal Senior Technician',
      '2 In-Home Tune-Up Visits Per Year',
      'Scam Shield & Password Vault Setup',
      'Automated Encrypted Cloud Backup',
      '90-Day Warranty on all repairs'
    ]
  },
  {
    name: 'Executive IT Matrix',
    tagline: 'Priority SLA & Cyber Defense',
    price: '$299',
    unit: 'per month (billed annually)',
    desc: 'Complete coverage for executives, legal partners, & home offices requiring maximum uptime.',
    popular: false,
    badge: 'Executive Standard',
    features: [
      'Priority Mobile SLA Dispatch',
      'Cyber Security & Anti-Phishing Shield',
      'Complimentary Temporary Loaner Laptop',
      'Unlimited Remote & Priority Mobile Support',
      'Quarterly Workstation Audits',
      'Full 90-Day Repair Warranty'
    ]
  }
];

export default function MembershipTiers({ onOpenBooking }) {
  return (
    <section id="memberships" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Zap size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Mobile IT Plans</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
            Transparent Pricing <span className="neon-gradient-text">Backed by 90-Day Warranty</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }} className="font-tech">
            Whether you require a single mobile diagnostic or dedicated year-round IT assistance, we offer transparent rates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'stretch' }} className="pricing-grid">
          {TIERS.map((tier, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: tier.popular ? 'rgba(0, 240, 255, 0.05)' : 'var(--bg-card)',
                border: tier.popular ? '2px solid var(--neon-cyan)' : '1px solid var(--border-subtle)',
                boxShadow: tier.popular ? '0 0 30px rgba(0, 240, 255, 0.3)' : 'var(--shadow-card)',
                transform: tier.popular ? 'scale(1.03)' : 'none',
                zIndex: tier.popular ? 2 : 1
              }}
            >
              {/* Top Badge */}
              {tier.popular && (
                <div
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
                    color: '#05070E',
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '4px 16px',
                    borderRadius: 'var(--radius-pill)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)'
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>
                  {tier.tagline}
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
                  {tier.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '42px', fontWeight: 900, color: 'var(--neon-cyan)' }} className="font-display">
                    {tier.price}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }} className="font-tech">{tier.unit}</span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.5, marginBottom: '28px' }}>
                  {tier.desc}
                </p>

                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '24px', marginBottom: '32px' }}>
                  <div className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--neon-cyan)', fontWeight: 700, marginBottom: '16px' }}>
                    // INCLUDED FEATURES
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)' }}>
                        <Check size={16} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className={tier.popular ? 'btn-primary' : 'btn-secondary'}
                style={{ width: '100%', padding: '16px', fontSize: '14px' }}
              >
                <span>Select {tier.name}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
