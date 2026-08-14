import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = ({ path }) => {
  const isDark = path === 'businesses';
  const bgColor = isDark ? 'var(--color-charcoal-light)' : 'var(--color-offwhite-alt)';
  const textColor = isDark ? 'var(--color-offwhite)' : 'var(--color-charcoal)';

  const individualFaqs = [
    {
      q: "Do you come to my home or office?",
      a: "Yes. We operate on a 100% mobile and remote basis. We bring our white-glove service directly to your preferred location for maximum convenience and privacy."
    },
    {
      q: "What is your service area?",
      a: "We provide on-location services nationally, with a specialized focus on premium clientele. For many issues, our secure remote assistance can resolve problems instantly no matter where you are."
    },
    {
      q: "How does the diagnostic fee work?",
      a: "We charge a $100 diagnostic fee for the initial consultation and assessment. If you choose to proceed with our recommended repair or service, that $100 is fully applied toward the total cost."
    },
    {
      q: "Is my data and privacy protected?",
      a: "Absolutely. Discretion and privacy are core to our service. We are happy to sign Non-Disclosure Agreements (NDAs) and we adhere to the strictest data protection protocols."
    }
  ];

  const businessFaqs = [
    {
      q: "What exactly is a Fractional CTO?",
      a: "A Fractional CTO provides executive-level technology strategy, leadership, and implementation on a part-time basis. This allows small businesses to gain enterprise-grade expertise without the cost of a full-time executive."
    },
    {
      q: "Do you handle day-to-day IT support as well?",
      a: "Yes. In addition to strategic planning, we offer ongoing managed support to ensure your infrastructure runs smoothly, including rapid response for critical issues."
    },
    {
      q: "How do you charge for your services?",
      a: "We engage at $175/hour for high-level diagnostics, strategy, and roadmapping. Implementation and ongoing technician time are billed at $155/hour."
    },
    {
      q: "Can you help with digital transformation and AI integration?",
      a: "Yes. We specialize in modernizing legacy systems and integrating AI solutions to streamline workflows, increase efficiency, and give you a distinct competitive advantage."
    }
  ];

  const faqs = isDark ? businessFaqs : individualFaqs;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="section" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="text-center" style={{ color: textColor, marginBottom: 'var(--spacing-lg)' }}>Frequently Asked Questions</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              style={{ 
                borderBottom: `1px solid ${isDark ? '#444' : '#ccc'}`,
                paddingBottom: '1rem'
              }}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  width: '100%', 
                  textAlign: 'left',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: textColor,
                  padding: '1rem 0'
                }}
              >
                {faq.q}
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              <div style={{ 
                maxHeight: openIndex === idx ? '200px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.3s ease-in-out',
                opacity: openIndex === idx ? 1 : 0
              }}>
                <p style={{ color: isDark ? '#aaa' : '#555', paddingTop: '0.5rem', marginBottom: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
