import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, GraduationCap, Award, ChevronRight } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import './Experience.css';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">03. Career & Journey</span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            A track record of crafting responsive web solutions, delivering client projects, and mastering modern frontend technologies.
          </p>
        </div>

        <div className="experience-layout">
          {/* Main Experience Timeline */}
          <div className="experience-timeline-col">
            <h3 className="column-title">
              <Briefcase size={20} className="col-icon" />
              <span>Work Experience & Client Delivery</span>
            </h3>

            <div className="timeline-items">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <div className="role-company">
                      <h4 className="exp-role">{exp.role}</h4>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="badge-period">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="badge-status">{exp.badge}</span>
                    </div>
                  </div>

                  <div className="exp-location-row">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="exp-achievements">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="achievement-item">
                        <CheckCircle size={15} className="achievement-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech-stack">
                    <span className="tech-label">Applied Tech:</span>
                    <div className="tech-pills-row">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Continuous Growth Sidebar */}
          <div className="education-sidebar-col">
            <h3 className="column-title">
              <GraduationCap size={20} className="col-icon" />
              <span>Education & Credentials</span>
            </h3>

            <div className="education-cards">
              {educationData.map((edu, idx) => (
                <div key={idx} className="edu-card glass-card">
                  <div className="edu-header">
                    <span className="edu-badge">{edu.period}</span>
                    <Award size={18} className="edu-icon" />
                  </div>
                  <h4 className="edu-title">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-location">{edu.location}</p>
                  <p className="edu-desc">{edu.details}</p>
                </div>
              ))}

              {/* Recruiter Quick Note Card */}
              <div className="recruiter-highlight-card glass-card">
                <div className="highlight-pill">Recruiter Summary</div>
                <h4 className="highlight-title">Ready for Immediate Impact</h4>
                <p className="highlight-text">
                  With hands-on experience building production React interfaces, handling API data pipelines, and implementing responsive mobile layouts, I hit the ground running with minimal onboarding.
                </p>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="btn btn-outline btn-sm full-width-btn"
                >
                  <span>Download Curriculum Vitae</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
