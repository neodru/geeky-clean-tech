import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, ShieldCheck, CheckCircle, Lock, Phone, Zap } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'in-home-tutoring',
    preferredDate: '',
    preferredTime: 'morning',
    requestNda: true,
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-fast)'
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="vip-badge" style={{ marginBottom: '14px' }}>
              <Zap size={14} style={{ color: 'var(--neon-cyan)' }} />
              <span>Mobile IT Dispatch Request</span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-main)' }}>
              Deploy Mobile Technician
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
              We bring certified tech support directly to Pacific Beach, La Jolla, Mount Soledad, or Uber Concierge (15-mi radius).
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Arthur Vance"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1-619-289-9205"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                  Location (Pacific Beach / La Jolla / Mount Soledad) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Grand Ave, Pacific Beach, CA"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                    Service Protocol
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                    className="font-tech"
                  >
                    <option value="in-home-tutoring">In-Home Senior Tutoring & Setup</option>
                    <option value="mac-hardware">Apple Mac Hardware Diagnostic</option>
                    <option value="cybersecurity">Cyber Security & Scam Shield Audit</option>
                    <option value="data-recovery">Quantum File & Data Recovery</option>
                    <option value="uber-pickup">Uber Concierge Pickup (15-Mi Radius)</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                    Window (Mon-Fri 9am-5pm PT)
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                    className="font-tech"
                  >
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                    <option value="saturday">Saturday By Appointment</option>
                  </select>
                </div>
              </div>

              {/* NDA Checkbox */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--neon-cyan)', cursor: 'pointer', padding: '10px 14px', background: 'rgba(0, 240, 255, 0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <input
                  type="checkbox"
                  checked={formData.requestNda}
                  onChange={e => setFormData({ ...formData, requestNda: e.target.checked })}
                  style={{ accentColor: 'var(--neon-cyan)', width: '16px', height: '16px' }}
                />
                <span>Include Non-Disclosure Agreement (NDA) & 90-Day Warranty Protection</span>
              </label>

              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '16px', fontSize: '15px', marginTop: '8px' }}
              >
                Confirm Dispatch Request
              </button>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(0, 255, 102, 0.15)',
                color: 'var(--neon-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 0 20px rgba(0, 255, 102, 0.3)'
              }}
            >
              <CheckCircle size={40} />
            </div>

            <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
              Dispatch Order Confirmed
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you, <strong style={{ color: 'var(--text-main)' }}>{formData.name}</strong>. Our mobile dispatcher will contact you at <strong style={{ color: 'var(--neon-cyan)' }}>{formData.phone}</strong> to confirm your technician's arrival window.
            </p>

            <div className="font-mono" style={{ padding: '16px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '24px', fontSize: '12px', color: 'var(--neon-cyan)' }}>
              🛡️ Backed by 90-Day Full Hardware Warranty • Mobile Dispatch Operational
            </div>

            <button onClick={resetForm} className="btn-primary" style={{ padding: '12px 28px' }}>
              Close Confirmation Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
