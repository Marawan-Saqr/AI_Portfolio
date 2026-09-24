import React, { useState } from 'react';
import { Code, Smartphone, Database, Zap, HelpCircle, ChevronDown, Check } from 'lucide-react';
import { valueProps, recruiterFaqs } from '../data/portfolioData';
import './WhyHireMe.css';

export default function WhyHireMe() {
  const [openFaq, setOpenFaq] = useState(0);

  const icons = {
    code: <Code size={22} className="val-icon-cyan" />,
    smartphone: <Smartphone size={22} className="val-icon-cyan" />,
    database: <Database size={22} className="val-icon-cyan" />,
    zap: <Zap size={22} className="val-icon-cyan" />
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="section why-hire-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">05. Value & Alignment</span>
          <h2 className="section-title">
            Why Hire <span className="text-gradient">Marawan?</span>
          </h2>
          <p className="section-subtitle">
            What recruiters and hiring managers gain by bringing me onto their engineering team or client projects.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="value-cards-grid">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="value-card glass-card">
              <div className="val-icon-box">{icons[prop.icon]}</div>
              <h3 className="val-title">{prop.title}</h3>
              <p className="val-desc">{prop.desc}</p>
            </div>
          ))}
        </div>

        {/* Recruiter FAQs Accordion */}
        <div className="recruiter-faqs-wrapper glass-card">
          <div className="faqs-header">
            <div className="faqs-icon-box">
              <HelpCircle size={22} className="text-cyan" />
            </div>
            <div>
              <h3 className="faqs-title">Recruiter & Hiring Manager FAQs</h3>
              <p className="faqs-subtitle">Quick answers to common questions about my availability, stack, and workflow.</p>
            </div>
          </div>

          <div className="faqs-list">
            {recruiterFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
