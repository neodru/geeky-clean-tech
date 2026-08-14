import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingView from './components/LandingView';
import IndividualsPath from './components/IndividualsPath';
import BusinessesPath from './components/BusinessesPath';
import BookingModal from './components/BookingModal';

function App() {
  // 'landing', 'individuals', 'businesses'
  const [activePath, setActivePath] = useState('landing');
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="app-container">
      {activePath !== 'landing' && (
        <Navbar 
          activePath={activePath} 
          onPathChange={setActivePath}
          onOpenBooking={() => setBookingOpen(true)}
        />
      )}
      
      <main>
        {activePath === 'landing' && (
          <LandingView onSelectPath={setActivePath} />
        )}
        {activePath === 'individuals' && (
          <IndividualsPath onOpenBooking={() => setBookingOpen(true)} />
        )}
        {activePath === 'businesses' && (
          <BusinessesPath onOpenBooking={() => setBookingOpen(true)} />
        )}
      </main>

      {activePath !== 'landing' && (
        <Footer onOpenBooking={() => setBookingOpen(true)} />
      )}

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        activePath={activePath}
      />
    </div>
  );
}

export default App;
