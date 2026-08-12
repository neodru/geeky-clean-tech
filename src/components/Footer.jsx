import React from 'react';
import { Cpu, PhoneCall, Mail, MapPin, Clock, ArrowUp, Lock, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-strong)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr', gap: '48px', marginBottom: '64px' }} className="footer-grid">
          
          {/* Col 1: Brand & Cyberpunk Tone */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#05070E'
                }}
              >
                <Cpu size={22} strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                  GEEKY CLEAN <span className="neon-text-cyan">TECH</span>
                </div>
                <div className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--neon-pink)' }}>
                  Mobile & Remote IT Grid • San Diego
                </div>
              </div>
            </a>

            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', maxWidth: '340px' }}>
              San Diego's premier mobile & remote tech support grid. "We Come To You" with certified mobile technicians in Pacific Beach, La Jolla, and Mount Soledad.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span className="font-mono" style={{ fontSize: '11px', padding: '6px 12px', borderRadius: 'var(--radius-pill)', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid var(--border-subtle)', color: 'var(--neon-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={12} />
                90-Day Hardware Warranty
              </span>
              <span className="font-mono" style={{ fontSize: '11px', padding: '6px 12px', borderRadius: 'var(--radius-pill)', background: 'rgba(255, 0, 127, 0.1)', border: '1px solid var(--border-pink)', color: 'var(--text-pink)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Lock size={12} />
                100% Confidentiality
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon-cyan)', fontWeight: 800, marginBottom: '20px' }}>
              // CYBER SERVICES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }} className="font-tech">
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Mobile Senior Tech Tutoring</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Apple Mac Micro-Soldering</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cyber Security & Scam Shield</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Quantum Cleanroom Recovery</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Executive Dual-Monitor Rigs</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Uber Concierge (15-Mi Radius)</a></li>
            </ul>
          </div>

          {/* Col 3: San Diego Coverage */}
          <div>
            <h4 className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon-pink)', fontWeight: 800, marginBottom: '20px' }}>
              // DISPATCH SECTORS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }} className="font-tech">
              <li>Pacific Beach (Primary Hub)</li>
              <li>La Jolla Shores & Village</li>
              <li>Mount Soledad Residences</li>
              <li>Uber Concierge (15-Mi Radius)</li>
              <li>Remote IT Virtual Link</li>
              <li>No Storefront • "We Come To You"</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon-cyan)', fontWeight: 800, marginBottom: '20px' }}>
              // DIRECT CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <PhoneCall size={18} style={{ color: 'var(--neon-cyan)' }} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }} className="font-mono">Direct Line</div>
                  <a href="tel:+16192899205" style={{ color: 'var(--neon-cyan)', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }} className="font-mono">
                    +1-619-289-9205
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Clock size={18} style={{ color: 'var(--neon-cyan)', marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }} className="font-mono">Business Hours</div>
                  <div style={{ color: 'var(--text-main)', fontSize: '13px' }} className="font-tech">
                    Mon – Fri: 9:00 AM – 5:00 PM PT<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>

              <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '12px 20px', fontSize: '13px', marginTop: '8px' }}>
                Request Mobile Dispatch
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} Geeky Clean Technology. All rights reserved. San Diego, California.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>90-Day Warranty Terms</a>
            <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Mobile Service SLA</a>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(0, 240, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--neon-cyan)',
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px'
              }}
              className="font-mono"
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
