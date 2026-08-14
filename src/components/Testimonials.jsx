import React from 'react';

const Testimonials = ({ path }) => {
  const isDark = path === 'businesses';
  const bgColor = isDark ? 'var(--color-charcoal)' : 'var(--color-offwhite)';
  const textColor = isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)';

  const individualTestimonials = [
    {
      quote: "The technician arrived exactly on time, diagnosed the issue with my home network swiftly, and explained everything without using jargon. The level of professionalism was exceptional.",
      author: "Private Client, La Jolla"
    },
    {
      quote: "I value my privacy and time above all else. Geeky Clean Technology understood this implicitly. Their white-glove setup of my new devices was seamless and entirely confidential.",
      author: "Executive, Del Mar"
    }
  ];

  const businessTestimonials = [
    {
      quote: "Partnering with them as our fractional CTO transformed our operations. They overhauled our legacy systems and implemented security protocols that finally let us sleep at night. A true competitive advantage.",
      author: "Managing Partner, Law Firm"
    },
    {
      quote: "We didn't need a full-time IT director, but we desperately needed strategic guidance. Their ability to align technology with our business growth goals has been invaluable.",
      author: "Founder, Consulting Agency"
    }
  ];

  const testimonials = isDark ? businessTestimonials : individualTestimonials;

  return (
    <section className="section" style={{ backgroundColor: bgColor, color: textColor, borderTop: `1px solid ${isDark ? '#333' : '#eaeaea'}` }}>
      <div className="container text-center">
        <h2 style={{ color: textColor }}>Proven Results</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{ 
              flex: '1 1 400px',
              maxWidth: '500px',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <p style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.25rem', 
                lineHeight: 1.6, 
                fontStyle: 'italic',
                color: isDark ? '#ddd' : '#555',
                marginBottom: '1.5rem'
              }}>
                "{t.quote}"
              </p>
              <p style={{ 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                fontSize: '0.85rem',
                color: isDark ? 'var(--color-gold)' : 'var(--color-charcoal-light)'
              }}>
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
