import React, { useState } from 'react';
import { MapPin, Clock, Shield, Phone, Sparkles, Navigation, Zap, Radio } from 'lucide-react';

const NEIGHBORHOODS = [
  {
    id: 'pb',
    name: 'Pacific Beach',
    zip: '92109',
    dispatchTime: '15 Mins',
    desc: 'Rapid mobile IT dispatch unit for Pacific Beach residents, coastal professionals, and seniors. In-home tech tutoring, Wi-Fi tuning, & screen repair.',
    badge: 'Primary Dispatch Hub'
  },
  {
    id: 'lajolla',
    name: 'La Jolla',
    zip: '92037',
    dispatchTime: '20 Mins',
    desc: 'Mobile tech support across Prospect St, La Jolla Shores, & Village. 1-on-1 senior tutoring, Mac logic board diagnostics, & 90-day warranty.',
    badge: 'Daily Mobile Patrol'
  },
  {
    id: 'soledad',
    name: 'Mount Soledad',
    zip: '92037',
    dispatchTime: '20 Mins',
    desc: 'On-site technical support for hilltop residences. Smart home Wi-Fi mesh optimization, password vault security, & executive custom rigs.',
    badge: 'High-Elevation Sector'
  },
  {
    id: 'uber',
    name: 'Uber Concierge (15-Mi Radius)',
    zip: 'Greater San Diego',
    dispatchTime: 'Same-Day Pickup',
    desc: 'Complimentary secure courier pickup and return service via Uber Concierge within a 15-mile radius of Pacific Beach.',
    badge: '15-Mile Mobile Radius'
  }
];

export default function SanDiegoLocations({ onOpenBooking }) {
  const [activeLoc, setActiveLoc] = useState('pb');

  const active = NEIGHBORHOODS.find(n => n.id === activeLoc);

  return (
    <section id="locations" style={{ padding: '90px 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 54px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Navigation size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Mobile Service Grid</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
            San Diego <span className="neon-gradient-text">Dispatch Sectors</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }} className="font-tech">
            We operate as a 100% mobile and remote IT provider with no physical storefront overhead — "We Come To You."
          </p>
        </div>

        {/* Neighborhood Selector Tabs */}
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px', justifyContent: 'center' }}>
          {NEIGHBORHOODS.map(n => {
            const isSelected = activeLoc === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setActiveLoc(n.id)}
                className="font-tech"
                style={{
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-sm)',
                  background: isSelected ? 'linear-gradient(135deg, #00F0FF 0%, #0099FF 100%)' : 'rgba(255, 255, 255, 0.03)',
                  color: isSelected ? '#05070E' : 'var(--text-main)',
                  border: isSelected ? '1px solid var(--neon-cyan)' : '1px solid var(--border-glass)',
                  fontWeight: 800,
                  fontSize: '13px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                  transition: 'var(--transition-fast)'
                }}
              >
                {n.name}
              </button>
            );
          })}
        </div>

        {/* Active Location Showcase Card */}
        {active && (
          <div className="glass-panel" style={{ padding: '40px', border: '1px solid var(--border-strong)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', alignItems: 'center' }} className="loc-grid">
              
              <div>
                <div className="font-mono" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(0, 240, 255, 0.12)', color: 'var(--neon-cyan)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                  <Radio size={14} style={{ color: 'var(--neon-cyan)' }} />
                  <span>{active.badge}</span>
                </div>

                <h3 style={{ fontSize: '30px', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
                  {active.name} Sector
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.65, marginBottom: '24px' }}>
                  {active.desc}
                </p>

                <div style={{ display: 'flex', gap: '24px', marginBottom: '28px' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }} className="font-mono">Est Dispatch Time</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--neon-cyan)' }} className="font-tech">{active.dispatchTime}</div>
                  </div>
                  <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '24px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }} className="font-mono">Coverage Area</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }} className="font-tech">{active.zip}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '14px 28px' }}>
                    Request Mobile Dispatch
                  </button>
                  <a href="tel:+16192899205" className="btn-secondary" style={{ padding: '14px 22px' }}>
                    <Phone size={16} style={{ color: 'var(--neon-cyan)' }} />
                    <span>+1-619-289-9205</span>
                  </a>
                </div>
              </div>

              {/* Mobile Service Positioning Card */}
              <div
                style={{
                  background: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--neon-cyan)' }}>
                  <Zap size={22} style={{ color: 'var(--neon-cyan)' }} />
                  <span style={{ fontSize: '16px', fontWeight: 800 }} className="font-tech">100% Mobile & Remote IT Service</span>
                </div>

                <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  We are a premium mobile and remote IT provider with <strong style={{ color: 'var(--text-main)' }}>no storefront overhead</strong>. Our technicians come directly to your residence, business, or meet via secure remote link.
                </div>

                <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(5, 7, 14, 0.8)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '13px', color: 'var(--neon-cyan)', fontWeight: 700 }} className="font-mono">
                    🕒 REAL BUSINESS HOURS
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '4px' }} className="font-tech">
                    Mon – Fri: 9:00 AM – 5:00 PM PT<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--neon-pink)', marginTop: '8px', fontWeight: 600 }} className="font-mono">
                    🛡️ All Work Covered by 90-Day Full Warranty
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 850px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
