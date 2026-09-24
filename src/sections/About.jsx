import React from 'react';
import { Layers, Layout, Globe, Cpu, CheckCircle2, MapPin, Briefcase, GraduationCap, Languages, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

export default function About({ onOpenResume }) {
  const pillars = [
    {
      icon: <Layers size={22} className="pillar-icon-cyan" />,
      title: "Reusable Components",
      desc: "Building modular, encapsulated React components with predictable state flow and clear props interfaces."
    },
    {
      icon: <Layout size={22} className="pillar-icon-cyan" />,
      title: "Mobile-First & Responsive",
      desc: "Pixel-perfect CSS3, SCSS, and Bootstrap styling ensuring fluid adaptation across all screens from phones to 4K."
    },
    {
      icon: <Globe size={22} className="pillar-icon-cyan" />,
      title: "API & Asynchronous State",
      desc: "Seamlessly fetching and synchronizing data with REST APIs, handling loading skeletons and error fallbacks."
    },
    {
      icon: <Cpu size={22} className="pillar-icon-cyan" />,
      title: "Performance & Clean Code",
      desc: "Writing semantic HTML, optimized assets, and clean ES6+ logic adhering to industry best practices."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">01. About Me</span>
          <h2 className="section-title">
            Passionate About Building <span className="text-gradient">Flawless Web Interfaces</span>
          </h2>
          <p className="section-subtitle">
            Get to know the developer behind the code, my core technical values, and how I bring ideas to life.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Story & Philosophy */}
          <div className="about-bio-card glass-card">
            <h3 className="about-card-title">Engineering Mindset & Background</h3>
            <p className="about-paragraph">
              I am <strong className="text-white">Marawan Mahmoud Nasr</strong>, an ambitious and detail-oriented <span className="text-cyan">Frontend Web Developer</span> based in <strong className="text-white">6th October City, Egypt</strong>. With <strong>2 years of dedicated experience</strong>, I have focused on engineering responsive, high-performance web applications that merge intuitive UI with robust architecture.
            </p>
            <p className="about-paragraph">
              My technical foundation revolves around <span className="tech-badge-inline">React.js</span>, <span className="tech-badge-inline">JavaScript (ES6+)</span>, <span className="tech-badge-inline">REST APIs</span>, and modern CSS frameworks like <span className="tech-badge-inline">SCSS</span>, <span className="tech-badge-inline">Bootstrap 5</span>, along with experience in <span className="tech-badge-inline">Angular</span>.
            </p>
            <p className="about-paragraph">
              I don't just write code; I care deeply about how real humans interact with the interface. From smooth micro-interactions to bulletproof responsive layouts, I ensure every project is performant, accessible, and easily maintainable by any engineering team.
            </p>

            {/* Quick Developer Specs */}
            <div className="about-specs-grid">
              <div className="spec-item">
                <MapPin size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Location:</span>
                  <p className="spec-val">6th October City, Egypt</p>
                </div>
              </div>
              <div className="spec-item">
                <Briefcase size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Experience:</span>
                  <p className="spec-val">2+ Years Active Dev</p>
                </div>
              </div>
              <div className="spec-item">
                <Languages size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Languages:</span>
                  <p className="spec-val">Arabic (Native), English (Proficient)</p>
                </div>
              </div>
              <div className="spec-item">
                <GraduationCap size={16} className="spec-icon" />
                <div>
                  <span className="spec-label">Availability:</span>
                  <p className="spec-val text-green">Full-time, Remote, Hybrid</p>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <button
                type="button"
                onClick={onOpenResume}
                className="btn btn-primary"
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>
              <a href="#contact" className="btn btn-secondary">
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Pillars of Excellence */}
          <div className="about-pillars-column">
            <h3 className="pillars-heading">What I Bring to Your Team</h3>
            <div className="pillars-list">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card glass-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div className="pillar-info">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
