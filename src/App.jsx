import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveWizard from './components/InteractiveWizard';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import SanDiegoLocations from './components/SanDiegoLocations';
import MembershipTiers from './components/MembershipTiers';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [theme, setTheme] = useState('dark');
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main style={{ flex: 1 }}>
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <InteractiveWizard onOpenBooking={() => setBookingOpen(true)} />
        <Services onOpenBooking={() => setBookingOpen(true)} />
        <WhyChooseUs onOpenBooking={() => setBookingOpen(true)} />
        <SanDiegoLocations onOpenBooking={() => setBookingOpen(true)} />
        <MembershipTiers onOpenBooking={() => setBookingOpen(true)} />
        <Testimonials />
        <FaqSection />
      </main>

      <Footer onOpenBooking={() => setBookingOpen(true)} />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}

export default App;
