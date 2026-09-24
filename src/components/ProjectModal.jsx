import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-top">
          <div className="modal-header-info">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Banner Graphic */}
        <div
          className="modal-banner"
          style={{ background: project.imageTheme || 'linear-gradient(135deg, #0d1b2a, #1b263b)' }}
        >
          <div className="modal-banner-content">
            <div className="modal-banner-pill">
              <Sparkles size={14} />
              <span>{project.statBadge || 'Production Ready'}</span>
            </div>
            <div className="modal-banner-mockup">
              <div className="mockup-header">
                <span className="mockup-dot red" />
                <span className="mockup-dot yellow" />
                <span className="mockup-dot green" />
                <span className="mockup-address">https://marawan-saqr.dev/projects/{project.id}</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-line title-line" />
                <div className="mockup-grid">
                  <div className="mockup-box" />
                  <div className="mockup-box" />
                  <div className="mockup-box" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-scroll-area">
          <div className="modal-section">
            <h3 className="modal-section-heading">Overview & Summary</h3>
            <p className="modal-description">{project.summary}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">Problem Solved & Frontend Architecture</h3>
            <p className="modal-description">{project.problemSolved}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">Key Features & Engineering Highlights</h3>
            <ul className="modal-features-list">
              {project.features.map((feature, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle size={16} className="feature-check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-heading">Technologies & Libraries</h3>
            <div className="modal-tech-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="modal-footer-actions">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary modal-action-btn"
          >
            <span>Live Demonstration</span>
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary modal-action-btn"
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
