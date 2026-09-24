import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Phone, MapPin, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';
import TerminalCard from '../components/TerminalCard';
import './Hero.css';

export default function Hero({ onOpenResume, onToast }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="status-dot" />
            <span>Available for Opportunities</span>
            <span className="hero-location-text">
              <MapPin size={12} />
              {personalInfo.location}
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">{personalInfo.name}</span>
            <span className="hero-role text-gradient">{personalInfo.title}</span>
          </h1>

          {/* Short Description */}
          <p className="hero-description">
            Ambitious and detail-oriented <strong className="text-highlight">Front-End Developer</strong> with <strong>2 years of experience</strong> building responsive, user-friendly websites. I specialize in <span className="tech-word">React.js</span>, <span className="tech-word">JavaScript (ES6+)</span>, and <span className="tech-word">REST APIs</span>, delivering clean interfaces and pixel-perfect digital experiences.
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View My Work</span>
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              onClick={onOpenResume}
              className="btn btn-outline hero-btn"
              title="View CV"
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Links Bar */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <div className="social-links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-link"
                title="Email Marawan"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="hero-social-link"
                title="Call 01090502377"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="hero-stats-row">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Terminal Preview */}
        <div className="hero-visual">
          <TerminalCard onCopyNotification={onToast} />
        </div>
      </div>
    </section>
  );
}
