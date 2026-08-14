import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import PricingSection from './PricingSection';
import Testimonials from './Testimonials';
import FaqSection from './FaqSection';

const BusinessesPath = ({ onOpenBooking }) => {
  return (
    <div className="theme-dark fade-in">
      <header className="section" style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.9), var(--color-charcoal)), url(https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: 'calc(var(--spacing-xl) + 80px)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }} className="fade-in delay-1">
            <h1>Your Fractional CTO</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Enterprise-grade technology strategy for small service-based businesses. Gain a competitive advantage without the overhead.
            </p>
            <button className="btn btn-gold" onClick={onOpenBooking}>Book a Consultation</button>
          </div>
        </div>
      </header>

      <section className="section theme-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2>Strategic Outcomes</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>
              We focus on outcomes that drive efficiency, security, and growth, ensuring your technology aligns perfectly with your business goals.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
            {[
              { title: 'IT Strategy & Roadmap', desc: 'Aligning technology investments with your long-term business objectives.' },
              { title: 'Infrastructure & Networking', desc: 'Building robust, scalable foundations for your daily operations.' },
              { title: 'Cybersecurity & Compliance', desc: 'Protecting your assets and ensuring industry compliance standards.' },
              { title: 'AI Integration & Automation', desc: 'Streamlining workflows and unlocking new efficiencies.' },
              { title: 'Digital Transformation', desc: 'Modernizing legacy systems to keep you ahead of the curve.' },
              { title: 'Ongoing Managed Support', desc: 'Proactive maintenance and rapid response when you need it most.' }
            ].map((service, idx) => (
              <div key={idx} style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-offwhite-alt)', borderRadius: '4px', borderLeft: '3px solid var(--color-charcoal)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>{service.title}</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0, color: '#4a4a4a' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs path="businesses" />
      <PricingSection path="businesses" onOpenBooking={onOpenBooking} />
      <Testimonials path="businesses" />
      <FaqSection path="businesses" />
    </div>
  );
};

export default BusinessesPath;
