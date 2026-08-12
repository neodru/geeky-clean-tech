import React, { useState } from 'react';
import { Laptop, Monitor, Smartphone, HardDrive, Wifi, Sparkles, Shield, ArrowRight, CheckCircle, Clock, Cpu, Zap } from 'lucide-react';

const DEVICES = [
  { id: 'mac', name: 'Apple Mac Matrix', icon: Laptop, desc: 'MacBook Pro, Air, iMac, Mac Studio' },
  { id: 'pc', name: 'Executive Workstation', icon: Monitor, desc: 'Dell XPS, ThinkPad, Custom Rigs' },
  { id: 'mobile', name: 'iPad / Mobile Array', icon: Smartphone, desc: 'Tablets, mobile devices, cloud sync' },
  { id: 'storage', name: 'Encrypted Storage', icon: HardDrive, desc: 'External SSD, RAID, damaged drives' },
  { id: 'network', name: 'Smart Mesh Network', icon: Wifi, desc: 'High-speed Wi-Fi, smart security' }
];

const ISSUES = [
  { id: 'tutoring', title: '1-on-1 Patient Senior Tech Tutoring', subtitle: 'Patient, jargon-free in-home guidance for email, passwords, apps' },
  { id: 'hardware', title: 'Precision Component Repair', subtitle: 'Screen, battery, thermal liquid metal overhaul, micro-soldering' },
  { id: 'security', title: 'Cyber Security & Phishing Shield', subtitle: 'Malware eradication, password manager, zero-leak VPN setup' },
  { id: 'recovery', title: 'Quantum File & Data Recovery', subtitle: 'Retrieval of family photos, documents, and corrupted drives' },
  { id: 'performance', title: 'System Acceleration Overhaul', subtitle: 'Eliminate system lag, thermal throttling, and boot friction' }
];

export default function InteractiveWizard({ onOpenBooking }) {
  const [selectedDevice, setSelectedDevice] = useState('mac');
  const [selectedIssue, setSelectedIssue] = useState('tutoring');

  const getRecommendation = () => {
    if (selectedIssue === 'tutoring') {
      return {
        title: 'Mobile Senior Tech Tutoring Unit',
        estTime: '1 - 2 Hours (In-Home)',
        desc: 'Our certified mobile technician deploys directly to your residence in Pacific Beach, La Jolla, or Mount Soledad. We walk you through your devices step-by-step with infinite patience.',
        price: 'Mobile Flat Rate • $195/hr',
        badge: 'Top Pick for Seniors'
      };
    } else if (selectedIssue === 'hardware') {
      return {
        title: 'Precision Mobile Diagnostic & Hardware Repair',
        estTime: '24 - 48 Hour Return (90-Day Warranty)',
        desc: 'Micro-soldering logicboard diagnostic, component replacement, and thermal dissipation tuning. Includes secure mobile pickup & dropoff.',
        price: 'Includes 90-Day Full Hardware Warranty',
        badge: 'Mobile Pickup Included'
      };
    } else if (selectedIssue === 'security') {
      return {
        title: 'Cyber Security & Anti-Phishing Shield',
        estTime: 'Same-Day Dispatch or Remote Link',
        desc: 'Complete vulnerability audit, 1Password manager installation, biometric authentication, and phishing defense shield.',
        price: 'Comprehensive Audit • $290 Flat Rate',
        badge: 'Fortified Privacy'
      };
    } else if (selectedIssue === 'recovery') {
      return {
        title: 'Quantum Cleanroom Data Recovery',
        estTime: '24 - 72 Hours',
        desc: 'Forensic extraction of lost photos, legal records, and corrupt drive sectors. Backed by our 90-day guarantee and strict confidentiality protocol.',
        price: 'No Recovery, No Charge Policy',
        badge: '98.4% Recovery Rate'
      };
    } else {
      return {
        title: 'Full Tech Matrix Refresh & Tuning',
        estTime: 'Same-Day or Remote Session',
        desc: 'Complete system optimization, thermal paste re-application, memory cleaning, and startup acceleration.',
        price: 'Full System Refresh • $245 Flat Rate',
        badge: 'Peak Speed Restoration'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="concierge-finder" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 54px' }}>
          <div className="vip-badge" style={{ marginBottom: '16px' }}>
            <Cpu size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span>Interactive Diagnostic Matrix</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, marginBottom: '16px' }}>
            Find Your Custom <span className="neon-gradient-text">IT Tech Solution</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '16px' }} className="font-tech">
            Select your hardware module and primary concern to generate an instant mobile IT recommendation.
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="glass-panel" style={{ padding: '36px', border: '1px solid var(--border-strong)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px' }} className="wizard-grid">
            
            {/* Left Steps */}
            <div>
              
              {/* Step 1: Device */}
              <div style={{ marginBottom: '32px' }}>
                <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon-cyan)', fontWeight: 700, display: 'block', marginBottom: '14px' }}>
                  // STEP 01: SELECT HARDWARE MODULE
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {DEVICES.map(d => {
                    const Icon = d.icon;
                    const isSelected = selectedDevice === d.id;
                    return (
                      <button
                        key={d.id}
                        onClick={() => setSelectedDevice(d.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '14px',
                          borderRadius: 'var(--radius-sm)',
                          background: isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                          border: isSelected ? '1px solid var(--neon-cyan)' : '1px solid var(--border-glass)',
                          color: isSelected ? 'var(--neon-cyan)' : 'var(--text-main)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          boxShadow: isSelected ? '0 0 15px rgba(0, 240, 255, 0.25)' : 'none',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        <Icon size={20} style={{ color: isSelected ? 'var(--neon-cyan)' : 'var(--text-muted)', flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', fontWeight: 700 }} className="font-tech">{d.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Need */}
              <div>
                <label className="font-mono" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon-pink)', fontWeight: 700, display: 'block', marginBottom: '14px' }}>
                  // STEP 02: SELECT SYSTEM REQUIREMENT
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {ISSUES.map(issue => {
                    const isSelected = selectedIssue === issue.id;
                    return (
                      <button
                        key={issue.id}
                        onClick={() => setSelectedIssue(issue.id)}
                        style={{
                          padding: '14px 18px',
                          borderRadius: 'var(--radius-sm)',
                          background: isSelected ? 'rgba(255, 0, 127, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                          border: isSelected ? '1px solid var(--neon-pink)' : '1px solid var(--border-glass)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          boxShadow: isSelected ? '0 0 15px rgba(255, 0, 127, 0.25)' : 'none',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        <div style={{ fontSize: '14px', fontWeight: 700, color: isSelected ? 'var(--text-pink)' : 'var(--text-main)' }} className="font-tech">
                          {issue.title}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {issue.subtitle}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Output Recommendation Box */}
            <div
              style={{
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                border: '1px solid var(--border-strong)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--neon-cyan)', fontWeight: 800 }}>
                    // RECOMMENDED PROTOCOL
                  </div>
                  <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: 'var(--radius-pill)', background: 'rgba(0, 255, 102, 0.15)', color: 'var(--neon-green)', fontWeight: 700 }} className="font-mono">
                    {rec.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: 'var(--text-main)' }}>
                  {rec.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '18px' }} className="font-tech">
                  <Clock size={16} style={{ color: 'var(--neon-cyan)' }} />
                  <span>Estimated Response: <strong style={{ color: 'var(--text-main)' }}>{rec.estTime}</strong></span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.65, marginBottom: '24px' }}>
                  {rec.desc}
                </p>

                <div style={{ padding: '16px', borderRadius: 'var(--radius-sm)', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }} className="font-mono">
                    Service Terms & Warranty
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--neon-cyan)', marginTop: '2px' }} className="font-tech">
                    {rec.price}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '14px' }}
              >
                <Zap size={16} />
                <span>Deploy Mobile Tech Now</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .wizard-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
