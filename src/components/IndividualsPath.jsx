import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import PricingSection from './PricingSection';
import Testimonials from './Testimonials';
import FaqSection from './FaqSection';

const IndividualsPath = ({ onOpenBooking }) => {
  return (
    <div className="theme-light fade-in">
      <header className="section" style={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(248, 249, 250, 0.9), var(--color-offwhite)), url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: 'calc(var(--spacing-xl) + 80px)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }} className="fade-in delay-1">
            <h1>Your Personal Technology Concierge</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              We bring white-glove technology service directly to your home or office. Experience patience, discretion, and simplicity.
            </p>
            <button className="btn btn-primary" onClick={onOpenBooking}>Request Service</button>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2>Comprehensive Support</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>
              Whether you need help setting up a new device, securing your digital life, or integrating a smart home, we are here to assist with expertise and patience.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
            {[
              { title: 'Device Setup & Tutoring', desc: 'Patient, personalized guidance for all your devices.' },
              { title: 'Home Network & Wi-Fi', desc: 'Seamless, fast, and reliable connectivity throughout your home.' },
              { title: 'Cybersecurity & Protection', desc: 'Defending against scams, phishing, and digital threats.' },
              { title: 'Data Backup & Recovery', desc: 'Ensuring your priceless memories and documents are safe.' },
              { title: 'Hardware Repair', desc: 'Expert diagnostics and repair for Apple and PC systems.' },
              { title: 'Smart Home Integration', desc: 'Automating and simplifying your living space.' }
            ].map((service, idx) => (
              <div key={idx} style={{ padding: 'var(--spacing-md)', backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ fontSize: '1rem', marginBottom: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs path="individuals" />
      <PricingSection path="individuals" onOpenBooking={onOpenBooking} />
      <Testimonials path="individuals" />
      <FaqSection path="individuals" />
    </div>
  );
};

export default IndividualsPath;
