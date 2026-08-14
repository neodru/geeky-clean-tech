import React, { useState, useEffect } from 'react';

const Navbar = ({ activePath, onPathChange, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = activePath === 'businesses';

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'var(--transition-smooth)',
      backgroundColor: scrolled ? (isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(248, 249, 250, 0.95)') : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? `1px solid ${isDark ? '#333' : '#e0e0e0'}` : '1px solid transparent',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand */}
        <div 
          onClick={() => onPathChange('landing')} 
          style={{ 
            cursor: 'pointer', 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.25rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)'
          }}
        >
          Geeky Clean Technology
        </div>

        {/* Desktop Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            borderRight: `1px solid ${isDark ? '#444' : '#ccc'}`,
            paddingRight: '2rem'
          }}>
            <button 
              onClick={() => onPathChange('individuals')}
              style={{
                fontSize: '0.9rem',
                color: activePath === 'individuals' ? (isDark ? 'var(--color-gold)' : 'var(--color-charcoal)') : (isDark ? '#888' : '#888'),
                fontWeight: activePath === 'individuals' ? 600 : 400,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Individuals
            </button>
            <button 
              onClick={() => onPathChange('businesses')}
              style={{
                fontSize: '0.9rem',
                color: activePath === 'businesses' ? (isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)') : (isDark ? '#888' : '#888'),
                fontWeight: activePath === 'businesses' ? 600 : 400,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Businesses
            </button>
          </div>

          <a 
            href="tel:+16192899205" 
            style={{ 
              fontWeight: 500, 
              color: isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)' 
            }}
          >
            +1-619-289-9205
          </a>

          <button 
            className={isDark ? "btn btn-gold" : "btn btn-primary"} 
            onClick={onOpenBooking}
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
          >
            {isDark ? 'Consultation' : 'Request Service'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
