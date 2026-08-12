import React from 'react';
import { ShieldCheck, XCircle, CheckCircle2, Award, HeartHandshake, Lock, Sparkles, Cpu } from 'lucide-react';

const COMPARISONS = [
  {
    feature: 'Service Convenience & Location',
    ordinary: 'You must unplug cables, haul heavy towers, and stand in long retail lines.',
    geekyClean: '100% Mobile & Remote IT ("We Come To You") or Uber Concierge pickup.'
  },
  {
    feature: 'Technician Demeanor & Senior Patience',
    ordinary: 'Rushed retail staff who use confusing jargon and talk down to non-techies.',
    geekyClean: 'Patient, respectful, jargon-free 1-on-1 instruction at your natural pace.'
  },
  {
    feature: 'Hardware Warranty Protection',
    ordinary: '30-day limited warranty with restrictive fine print.',
    geekyClean: 'Comprehensive 90-Day Full Hardware & Repair Warranty.'
  },
  {
    feature: 'Data Security & Confidentiality',
    ordinary: 'Unscreened retail workers with unmonitored access to private drives.',
    geekyClean: '100% background-checked mobile techs with signed NDA agreements.'
  },
  {
    feature: 'Component Repair Capability',
    ordinary: 'Forces expensive full logic board swaps rather than chip repair.',
    geekyClean: 'Precision micro-soldering chip diagnostics & thermal liquid metal tuning.'
  }
];

export default function WhyChooseUs({ onOpenBooking }) {
  return (
    <section style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Cpu size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Competitive Matrix</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
            Why San Diego Chooses <span className="neon-gradient-text">Geeky Clean Mobile IT</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }} className="font-tech">
            We eliminated storefront overhead to deliver rapid, patient, and high-tech mobile IT services directly to your door.
          </p>
        </div>

        {/* Comparison Table / Grid Card */}
        <div className="glass-panel" style={{ padding: '36px', overflow: 'hidden', borderColor: 'var(--border-strong)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-subtle)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }} className="table-header font-mono">
            <div style={{ color: 'var(--text-muted)' }}>// CRITERIA</div>
            <div style={{ color: 'var(--text-dim)' }}>Standard Retail Repair Stores</div>
            <div style={{ color: 'var(--neon-cyan)' }}>Geeky Clean Mobile Grid</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {COMPARISONS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr 1fr',
                  gap: '20px',
                  padding: '22px 0',
                  borderBottom: idx === COMPARISONS.length - 1 ? 'none' : '1px solid var(--border-glass)',
                  alignItems: 'center'
                }}
                className="table-row"
              >
                {/* Feature Name */}
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }} className="font-tech">
                  <Sparkles size={16} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                  <span>{item.feature}</span>
                </div>

                {/* Ordinary Shop */}
                <div style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <XCircle size={18} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item.ordinary}</span>
                </div>

                {/* Geeky Clean */}
                <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '14px', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(0, 240, 255, 0.05)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', boxShadow: '0 0 12px rgba(0, 240, 255, 0.1)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--neon-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item.geekyClean}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div
            style={{
              marginTop: '32px',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShieldCheck size={36} style={{ color: 'var(--neon-cyan)' }} />
              <div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }} className="font-tech">
                  Backed By Our 90-Day Full Hardware Warranty
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Mobile dispatch available in Pacific Beach, La Jolla, Mount Soledad & 15-Mile Uber Concierge radius.
                </div>
              </div>
            </div>

            <button onClick={onOpenBooking} className="btn-primary">
              Schedule Mobile Service Now
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .table-header { display: none !important; }
          .table-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
