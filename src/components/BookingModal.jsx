import React, { useState } from 'react';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, activePath }) => {
  const [submitted, setSubmitted] = useState(false);
  
  if (!isOpen) return null;

  const isDark = activePath === 'businesses';
  const bgColor = isDark ? 'var(--color-charcoal)' : 'var(--color-offwhite)';
  const textColor = isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: 'var(--spacing-md)'
    }}>
      <div 
        className="fade-in"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          width: '100%',
          maxWidth: '500px',
          borderRadius: '4px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: isDark ? '#aaa' : '#888'
          }}
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <h2 style={{ marginBottom: '1rem', color: textColor }}>
              {isDark ? 'Book a Consultation' : 'Request Service'}
            </h2>
            <p style={{ color: isDark ? '#ccc' : '#555', marginBottom: '2rem' }}>
              Please provide your details and we will contact you shortly to coordinate.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                <input 
                  type="text" 
                  required
                  style={{
                    width: '100%', padding: '0.75rem', 
                    backgroundColor: isDark ? 'var(--color-charcoal-light)' : 'white',
                    border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                    color: textColor,
                    borderRadius: '2px'
                  }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Phone Number</label>
                <input 
                  type="tel" 
                  required
                  style={{
                    width: '100%', padding: '0.75rem', 
                    backgroundColor: isDark ? 'var(--color-charcoal-light)' : 'white',
                    border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                    color: textColor,
                    borderRadius: '2px'
                  }} 
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Brief Description</label>
                <textarea 
                  rows="4"
                  style={{
                    width: '100%', padding: '0.75rem', 
                    backgroundColor: isDark ? 'var(--color-charcoal-light)' : 'white',
                    border: `1px solid ${isDark ? '#444' : '#ccc'}`,
                    color: textColor,
                    borderRadius: '2px',
                    resize: 'vertical'
                  }} 
                />
              </div>
              <button 
                type="submit" 
                className={isDark ? "btn btn-gold" : "btn btn-primary"}
                style={{ width: '100%', marginTop: '1rem' }}
              >
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <h3 style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-charcoal)', marginBottom: '1rem' }}>Request Received</h3>
            <p style={{ color: isDark ? '#ccc' : '#555' }}>Thank you. A member of our team will be in touch with you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
