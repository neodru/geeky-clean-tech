import React from 'react';

const Footer = ({ onOpenBooking }) => {
  return (
    <footer style={{ backgroundColor: 'var(--color-charcoal-dark)', color: 'var(--color-offwhite)', padding: 'var(--spacing-xl) 0 var(--spacing-md) 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 'var(--spacing-lg)', borderBottom: '1px solid #333', paddingBottom: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-offwhite)' }}>
              Geeky Clean Technology
            </h3>
            <p style={{ color: '#aaa', marginBottom: '1.5rem', maxWidth: '300px' }}>
              A premium, white-glove technology partner providing on-location and remote IT services. We come to you.
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, letterSpacing: '0.05em' }}>
              <a href="tel:+16192899205" style={{ color: 'var(--color-gold)' }}>+1-619-289-9205</a>
            </p>
          </div>

          <div style={{ flex: '1 1 400px' }}>
            <h4 style={{ color: 'var(--color-offwhite)', marginBottom: '1.5rem' }}>Ready to Elevate Your Technology?</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-gold" onClick={onOpenBooking}>Contact Us</button>
            </div>
            <p style={{ color: '#888', marginTop: '1rem', fontSize: '0.9rem' }}>
              National remote support • On-location white-glove visits
            </p>
          </div>
          
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', color: '#666', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} Geeky Clean Technology. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#666' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#666' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
