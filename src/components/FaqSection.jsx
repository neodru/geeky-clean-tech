import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Cpu } from 'lucide-react';

const FAQS = [
  {
    q: 'Do you have a physical store where I drop off my computer?',
    a: 'No — Geeky Clean Technology is a 100% mobile and remote IT service provider with no storefront. "We Come To You!" Our certified mobile technicians visit your residence or business directly in Pacific Beach, La Jolla, Mount Soledad, or arrange secure Uber Concierge pickup within a 15-mile radius.'
  },
  {
    q: 'What are your business hours and phone number?',
    a: 'You can reach us at +1-619-289-9205. Our operational hours are Monday through Friday from 9:00 AM to 5:00 PM PT. Saturdays are available by appointment, and we are closed on Sundays.'
  },
  {
    q: 'What warranty do you offer on hardware repairs and services?',
    a: 'All hardware repairs, component replacements, micro-soldering, and system overhauls performed by Geeky Clean Technology are backed by our full 90-Day Hardware Warranty.'
  },
  {
    q: 'I am a senior citizen and need patient, non-rushed technology help. Can you help me?',
    a: 'Absolutely. Patient 1-on-1 tutoring is our specialty. Our technicians take all the time you need to comfortably master your Apple Mac, iPad, email, password vault, or printer without jargon or pressure.'
  },
  {
    q: 'How does the Uber Concierge 15-mile service work?',
    a: 'If you prefer not to have an in-home visit, we can arrange secure courier pickup of your computer or device via Uber Concierge anywhere within a 15-mile radius of Pacific Beach. Once repaired, we return it directly to your door.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Cpu size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
            System Matrix <span className="neon-gradient-text">FAQ</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }} className="font-tech">
            Clear answers regarding our mobile dispatch grid, 90-day warranty, and operating hours.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid var(--neon-cyan)' : '1px solid var(--border-subtle)',
                  boxShadow: isOpen ? '0 0 20px rgba(0, 240, 255, 0.2)' : 'none',
                  overflow: 'hidden',
                  transition: 'var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    color: isOpen ? 'var(--neon-cyan)' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer'
                  }}
                  className="font-tech"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: 'var(--neon-cyan)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: '0 28px 24px', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, borderTop: '1px solid var(--border-glass)', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
