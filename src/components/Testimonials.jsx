import React from 'react';
import { Star, Quote, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Geeky Clean sent out a brilliant young technician — a sharp Asian gentleman in his 20s wearing glasses and a crisp lab coat. He spent 2 hours at our La Jolla home patiently teaching me how to manage my iPad, backup my photos, and avoid email scams. Completely stress-free!",
    author: "Dr. Arthur Vance",
    title: "Retired Professor & Resident",
    location: "La Jolla",
    verified: "In-Home Senior Tutoring Client",
    stars: 5
  },
  {
    quote: "My laptop logicboard crashed right before a major presentation. I called +1-619-289-9205 and their mobile tech dispatched to my Pacific Beach office within 30 minutes. Micro-soldered the power chip and had me operational the same day with a full 90-day warranty.",
    author: "Victoria Sterling, Esq.",
    title: "Managing Attorney",
    location: "Pacific Beach",
    verified: "Mobile Hardware Diagnostic Client",
    stars: 5
  },
  {
    quote: "The 'we come to you' model is brilliant. I live up on Mount Soledad and didn't want to carry my dual-monitor setup to a store. Their tech arrived with diagnostic gear and optimized my entire home network. Highly professional and courteous.",
    author: "Harrison Montgomery",
    title: "Business Executive",
    location: "Mount Soledad",
    verified: "Mobile Workstation Client",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '90px 0', background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Cpu size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Verified User Logs</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
            Trusted Across <span className="neon-gradient-text">Pacific Beach & La Jolla</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }} className="font-tech">
            Read real feedback from San Diego seniors, executives, and home office professionals.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={15} fill="#00F0FF" color="#00F0FF" />
                    ))}
                  </div>
                  <Quote size={28} style={{ color: 'rgba(0, 240, 255, 0.2)' }} />
                </div>

                <p style={{ color: 'var(--text-main)', fontSize: '14px', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
                <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--neon-cyan)' }} className="font-tech">
                  {t.author}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {t.title} • {t.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--neon-green)', marginTop: '8px', fontWeight: 600 }} className="font-mono">
                  <CheckCircle2 size={14} />
                  <span>{t.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
