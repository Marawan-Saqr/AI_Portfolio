import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link detector
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#" className="nav-brand" aria-label="Marawan Mahmoud Nasr - Home">
          <div className="brand-logo-icon">
            <Code2 size={20} className="icon-cyan" />
          </div>
          <span className="brand-name">
            Marawan<span className="brand-dot">.dev</span>
          </span>
          <span className="brand-status-dot" title="Available for hire">
            <span className="status-dot"></span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
                {isActive && <span className="nav-link-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="nav-actions-desktop">
          <button
            type="button"
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm nav-resume-btn"
            title="View Marawan's Resume"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm nav-cta-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-status-tag">
            <span className="status-dot"></span>
            <span>Available for Opportunities</span>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="mobile-nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-actions">
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                onOpenResume();
              }}
              className="btn btn-secondary mobile-btn"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="btn btn-primary mobile-btn"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <p className="mobile-email">{personalInfo.email}</p>
            <p className="mobile-phone">{personalInfo.phone} • Egypt</p>
          </div>
        </div>
      </div>
    </header>
  );
}
