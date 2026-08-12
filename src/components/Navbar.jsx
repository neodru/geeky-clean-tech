import React, { useState, useEffect } from 'react';
import { Cpu, PhoneCall, Calendar, Sun, Moon, MapPin, Zap, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar({ onOpenBooking, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? theme === 'dark' ? 'rgba(5, 7, 14, 0.94)' : 'rgba(255, 255, 255, 0.94)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-strong)' : '1px solid transparent',
        padding: scrolled ? '12px 0' : '20px 0',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 240, 255, 0.1)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00F0FF 0%, #FF007F 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
              color: '#05070E'
            }}
          >
            <Cpu size={26} strokeWidth={2.2} />
          </div>
          <div>
            <div
              className="font-display"
              style={{
                fontSize: '19px',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: 'var(--text-main)',
                lineHeight: 1.1
              }}
            >
              GEEKY CLEAN <span className="neon-text-cyan" style={{ fontWeight: 900 }}>TECH</span>
            </div>
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--neon-pink)',
                marginTop: '2px',
                fontWeight: 600
              }}
            >
              Mobile & Remote IT Grid • San Diego
            </div>
          </div>
        </a>

        {/* Nav Links Desktop */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px'
          }}
          className="desktop-nav font-tech"
        >
          <a href="#services" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'var(--transition-fast)' }}>
            Cyber Services
          </a>
          <a href="#concierge-finder" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            Diagnostic Matrix
          </a>
          <a href="#locations" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            Dispatch Sectors
          </a>
          <a href="#memberships" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            Support Plans
          </a>
          <a href="#faq" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
            FAQ
          </a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Direct Hotline with Correct Number */}
          <a
            href="tel:+16192899205"
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--neon-cyan)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 0 12px rgba(0, 240, 255, 0.15)'
            }}
          >
            <PhoneCall size={15} style={{ color: 'var(--neon-cyan)' }} />
            <span>+1-619-289-9205</span>
          </a>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <Sun size={17} style={{ color: 'var(--neon-cyan)' }} /> : <Moon size={17} style={{ color: '#0F172A' }} />}
          </button>

          {/* Book Dispatch Button */}
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{ padding: '10px 18px', fontSize: '13px' }}
          >
            <Zap size={15} />
            <span>Request Mobile Dispatch</span>
          </button>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
