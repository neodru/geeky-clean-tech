import React from 'react';
import { Cpu, Zap, PhoneCall, ShieldCheck, Clock, CheckCircle2, Star, ArrowRight, Lock, Radio, Navigation } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '60px',
        paddingBottom: '90px',
        overflow: 'hidden'
      }}
    >
      {/* Background Cyber Glow & Grid Accents */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(255, 0, 127, 0.08) 45%, rgba(5, 7, 14, 0) 75%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Content */}
          <div className="animate-fade-up">
            
            {/* Cyber Pill */}
            <div className="vip-badge" style={{ marginBottom: '22px' }}>
              <span className="dot"></span>
              <span>San Diego Mobile IT Grid • "We Come To You"</span>
            </div>

            {/* Cyberpunk Headline */}
            <h1
              style={{
                fontSize: 'clamp(34px, 4.2vw, 52px)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.15,
                marginBottom: '22px'
              }}
            >
              Next-Gen Tech Support & <span className="neon-gradient-text">Precision Mobile Diagnostics</span>
            </h1>

            {/* Cyberpunk Subhead */}
            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '600px'
              }}
            >
              Zero storefront hassle. We deploy certified mobile technicians directly to your location in <strong style={{ color: 'var(--neon-cyan)' }}>Pacific Beach, La Jolla, Mount Soledad & Uber Concierge (15-Mile Radius)</strong> — providing patient senior tech tutoring, logic board diagnostics, & cybersecurity.
            </p>

            {/* High-Tech Bullets */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '36px'
              }}
              className="font-tech"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)' }}>
                <CheckCircle2 size={17} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                <span>100% Mobile & Remote ("We Come To You")</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)' }}>
                <Lock size={17} style={{ color: 'var(--neon-pink)', flexShrink: 0 }} />
                <span>Fortified Confidentiality Protocols</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)' }}>
                <ShieldCheck size={17} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                <span>90-Day Full Hardware Warranty</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)' }}>
                <Clock size={17} style={{ color: 'var(--neon-pink)', flexShrink: 0 }} />
                <span>Mon–Fri 9am–5pm • Sat by Appt</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '15px' }}
              >
                <Zap size={18} />
                <span>Deploy Mobile Technician</span>
              </button>

              <a
                href="tel:+16192899205"
                className="btn-secondary"
                style={{ padding: '16px 26px', fontSize: '15px' }}
              >
                <PhoneCall size={18} style={{ color: 'var(--neon-cyan)' }} />
                <span>+1-619-289-9205</span>
              </a>
            </div>

            {/* Social Proof */}
            <div
              style={{
                marginTop: '36px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '18px'
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={17} fill="#00F0FF" color="#00F0FF" />
                ))}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }} className="font-tech">
                <strong style={{ color: 'var(--neon-cyan)' }}>4.9 / 5.0 Rating</strong> across Pacific Beach, La Jolla & San Diego
              </div>
            </div>

          </div>

          {/* Right Column: Cyberpunk Visual Frame */}
          <div style={{ position: 'relative' }}>
            
            <div
              className="glass-panel"
              style={{
                padding: '12px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                borderColor: 'var(--border-strong)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.25)'
              }}
            >
              <img
                src="/images/hero.jpg"
                alt="Geeky Clean Technology Cyberpunk Mobile Tech Unit Technician"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '14px',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Floating Cyber Badge 1 */}
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(5, 7, 14, 0.9)',
                  borderColor: 'var(--neon-cyan)',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 240, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon-cyan)',
                    flexShrink: 0
                  }}
                >
                  <Navigation size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }} className="font-tech">
                    Mobile Dispatch Grid
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--neon-cyan)' }} className="font-mono">
                    Pacific Beach • La Jolla • 15-Mi Radius
                  </div>
                </div>
              </div>

              {/* Floating Cyber Badge 2 */}
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(5, 7, 14, 0.9)',
                  borderColor: 'var(--neon-pink)'
                }}
              >
                <ShieldCheck size={15} style={{ color: 'var(--neon-pink)' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-pink)' }} className="font-mono">
                  90-Day Cyber Warranty
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
