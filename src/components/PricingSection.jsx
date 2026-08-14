import React from 'react';

const PricingSection = ({ path, onOpenBooking }) => {
  if (path === 'individuals') {
    return (
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container text-center">
          <h2>Transparent Engagement</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            We believe in straightforward pricing with no hidden fees. Experience premium service tailored to your personal needs.
          </p>
          
          <div style={{ 
            maxWidth: '500px', 
            margin: '0 auto', 
            padding: '3rem', 
            border: '1px solid #eaeaea', 
            borderRadius: '4px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>$100</h3>
            <p style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#888', marginBottom: '2rem' }}>Diagnostic Fee</p>
            <p style={{ marginBottom: '2rem' }}>
              We come to you to diagnose the issue. The $100 fee is fully applied toward your total repair or service cost if you choose to proceed.
            </p>
            <button className="btn btn-primary" onClick={onOpenBooking} style={{ width: '100%' }}>Request Service</button>
          </div>
        </div>
      </section>
    );
  }

  // Businesses Path
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-charcoal)' }}>
      <div className="container text-center">
        <h2 style={{ color: 'var(--color-offwhite)' }}>Strategic Partnership</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto var(--spacing-lg)', color: '#ccc' }}>
          Invest in a fractional CTO and enterprise-grade support without the overhead of full-time staff.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-md)' }}>
          
          <div style={{ 
            flex: '1 1 350px',
            maxWidth: '450px', 
            padding: '3rem', 
            backgroundColor: 'var(--color-charcoal-light)', 
            borderTop: '4px solid var(--color-gold)',
            borderRadius: '4px'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-offwhite)' }}>$175 <span style={{fontSize: '1rem', color: '#888'}}>/hour</span></h3>
            <p style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '2rem' }}>Diagnostic & Strategy</p>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>
              Comprehensive assessment of your current infrastructure, security posture, and strategic alignment.
            </p>
          </div>

          <div style={{ 
            flex: '1 1 350px',
            maxWidth: '450px', 
            padding: '3rem', 
            backgroundColor: 'var(--color-charcoal-light)', 
            borderTop: '4px solid var(--color-gold)',
            borderRadius: '4px'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-offwhite)' }}>$155 <span style={{fontSize: '1rem', color: '#888'}}>/hour</span></h3>
            <p style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '2rem' }}>Implementation</p>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>
              Execution of technology roadmaps, ongoing managed support, and technician time after the first hour.
            </p>
          </div>

        </div>
        <div style={{ marginTop: 'var(--spacing-lg)' }}>
           <button className="btn btn-gold" onClick={onOpenBooking}>Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
