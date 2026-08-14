import React from 'react';

const WhyChooseUs = ({ path }) => {
  const isDark = path === 'businesses';
  const bgColor = isDark ? 'var(--color-charcoal-light)' : 'var(--color-offwhite-alt)';
  const textColor = isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)';

  return (
    <section className="section" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: textColor }}>The White-Glove Difference</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: isDark ? '#ccc' : '#4a4a4a' }}>
            We bring unparalleled expertise directly to you, combining deep technical knowledge with a premium service experience.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
          {[
            { title: '100% Mobile & Remote', desc: 'We come directly to your location or solve issues remotely, saving you valuable time.' },
            { title: 'Confidentiality First', desc: 'Discretion is our priority. Non-Disclosure Agreements (NDAs) are available upon request.' },
            { title: 'Comprehensive Warranty', desc: 'We stand by our work with robust warranties on all repairs and strategic implementations.' },
            { title: 'Broad Expertise', desc: 'From hardware repair to AI integration and digital transformation, we cover the full spectrum.' }
          ].map((feature, idx) => (
            <div key={idx} style={{ 
              padding: '2rem 1.5rem', 
              borderTop: `1px solid ${isDark ? 'var(--color-gold)' : 'var(--color-charcoal)'}`,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: textColor }}>{feature.title}</h3>
              <p style={{ fontSize: '1rem', color: isDark ? '#aaa' : '#555', marginBottom: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
