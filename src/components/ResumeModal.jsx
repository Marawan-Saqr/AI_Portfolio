import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, skillsData, experienceData, educationData } from '../data/portfolioData';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-toolbar">
          <div className="toolbar-info">
            <span className="toolbar-pill">Curriculum Vitae</span>
            <span className="toolbar-title">{personalInfo.name}</span>
          </div>
          <div className="toolbar-actions">
            <button
              type="button"
              className="btn btn-outline btn-sm print-hide"
              onClick={handlePrint}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              className="resume-close-btn"
              onClick={onClose}
              aria-label="Close resume"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">{personalInfo.name}</h1>
            <p className="resume-role">{personalInfo.title}</p>
            <p className="resume-location">Based in {personalInfo.location}</p>

            <div className="resume-contact-grid">
              <a href={`mailto:${personalInfo.email}`} className="resume-contact-item">
                <Mail size={14} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="resume-contact-item">
                <Phone size={14} />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="resume-contact-item">
                <LinkedinIcon size={14} />
                <span>LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="resume-contact-item">
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          <div className="resume-divider" />

          {/* Professional Summary */}
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-summary-text">{personalInfo.bio}</p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="resume-section">
            <h2 className="resume-section-title">Technical Skills</h2>
            <div className="resume-skills-grid">
              {skillsData.map((category) => (
                <div key={category.category} className="resume-skill-group">
                  <span className="resume-group-title">{category.category}:</span>
                  <span className="resume-group-items">
                    {category.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Experience</h2>
            <div className="resume-exp-list">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="resume-exp-card">
                  <div className="resume-exp-header">
                    <div>
                      <h3 className="resume-exp-role">{exp.role}</h3>
                      <p className="resume-exp-company">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="resume-exp-date">{exp.period}</span>
                  </div>
                  <ul className="resume-exp-bullets">
                    {exp.achievements.map((item, bIdx) => (
                      <li key={bIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 className="resume-section-title">Education & Certifications</h2>
            <div className="resume-edu-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="resume-edu-item">
                  <div className="resume-edu-header">
                    <h3 className="resume-edu-degree">{edu.degree}</h3>
                    <span className="resume-edu-period">{edu.period}</span>
                  </div>
                  <p className="resume-edu-school">{edu.institution} • {edu.location}</p>
                  <p className="resume-edu-detail">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
