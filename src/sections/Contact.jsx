import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Time Job Opportunity',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'Full-Time Job Opportunity',
    'Contract / Freelance Project',
    'Technical Interview / Consultation',
    'General Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    if (onToast) onToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    if (onToast) onToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onToast) onToast('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onToast) onToast('Thank you! Your message inquiry has been generated.');

      // Open mailto with the typed content
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Marawan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">06. Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            I am currently open to full-time engineering roles, freelance projects, and exciting collaborations. Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-col">
            <div className="contact-info-header">
              <h3 className="contact-col-title">Direct Contact Channels</h3>
              <p className="contact-col-desc">
                Have a job opening or project in mind? Reach me directly via email, phone, or WhatsApp. I typically reply within 24 hours.
              </p>
            </div>

            <div className="contact-cards-stack">
              {/* Email Card */}
              <div className="contact-channel-card glass-card">
                <div className="channel-icon-box">
                  <Mail size={20} className="icon-cyan" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-val">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-channel-card glass-card">
                <div className="channel-icon-box">
                  <Phone size={20} className="icon-cyan" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Phone & WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="channel-val">
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="channel-multi-actions">
                  <button
                    type="button"
                    className="channel-action-btn"
                    onClick={handleCopyPhone}
                    title="Copy phone"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                  </button>
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-action-btn whatsapp-action"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-channel-card glass-card">
                <div className="channel-icon-box">
                  <MapPin size={20} className="icon-cyan" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Location</span>
                  <p className="channel-val text-white">{personalInfo.location}</p>
                  <span className="location-tz">Timezone: UTC+2 / UTC+3 (Egypt Standard Time)</span>
                </div>
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="response-time-box glass-card">
              <Clock size={18} className="icon-cyan" />
              <div>
                <h4 className="box-title">Rapid Response Guarantee</h4>
                <p className="box-text">Average response time: under 12 hours for recruiter inquiries.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col glass-card">
            <div className="form-card-header">
              <div className="form-icon-pill">
                <MessageSquare size={16} />
                <span>Send a Message</span>
              </div>
              <h3 className="form-title">Start a Direct Conversation</h3>
              <p className="form-desc">Fill out the quick form below and I'll get back to you promptly.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType" className="form-label">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  className="form-select"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message Details <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Share details about the role, project requirements, or question..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary form-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : submitted ? (
                  <>
                    <Check size={18} />
                    <span>Inquiry Sent! Send Another?</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
