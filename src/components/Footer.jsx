import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand & Bio Column */}
          <div className="footer-col brand-col">
            <a href="#" className="footer-brand">
              <Code2 size={22} className="footer-brand-icon" />
              <span>Marawan<span className="brand-dot">.dev</span></span>
            </a>
            <p className="footer-bio">
              Frontend Web Developer crafting high-performance, responsive, and user-centric web applications. Based in {personalInfo.location}.
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              <span>Available for full-time & remote engineering roles</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#experience">Experience & Journey</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#contact">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Tech Focus Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Core Technologies</h4>
            <div className="footer-tech-grid">
              <span className="tech-pill">React.js</span>
              <span className="tech-pill">JavaScript ES6+</span>
              <span className="tech-pill">REST APIs</span>
              <span className="tech-pill">SCSS</span>
              <span className="tech-pill">Bootstrap 5</span>
              <span className="tech-pill">Angular</span>
              <span className="tech-pill">HTML5 / CSS3</span>
              <span className="tech-pill">Git & GitHub</span>
            </div>
          </div>

          {/* Connect Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Connect</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${personalInfo.email}`} className="footer-contact-link">
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="footer-contact-link">
                <Phone size={15} />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="footer-location-tag">
                <MapPin size={15} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="footer-social-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Developed with precision.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
