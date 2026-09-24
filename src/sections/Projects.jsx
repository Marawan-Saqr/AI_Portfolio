import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filterTabs = ['All', 'React.js', 'API-Driven', 'Angular', 'JavaScript'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter || p.tags.includes(selectedFilter));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">04. Featured Work</span>
          <h2 className="section-title">
            Real-World <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated showcase of responsive web applications, API integrations, and clean frontend architectures built to solve real problems.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          <div className="filter-pill-group" role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={selectedFilter === tab}
                className={`filter-btn ${selectedFilter === tab ? 'active' : ''}`}
                onClick={() => setSelectedFilter(tab)}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>
          <span className="projects-count-label">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Visual Mockup Header */}
              <div
                className="project-mockup-wrapper"
                style={{ background: project.imageTheme }}
              >
                <div className="mockup-window">
                  <div className="mockup-nav">
                    <span className="nav-dot red" />
                    <span className="nav-dot yellow" />
                    <span className="nav-dot green" />
                    <span className="nav-url">marawan.dev/{project.id}</span>
                  </div>
                  <div className="mockup-screen">
                    <div className="screen-wireframe">
                      <div className="wireframe-header" />
                      <div className="wireframe-row">
                        <div className="wireframe-tile" />
                        <div className="wireframe-tile" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-badges-overlay">
                  <span className="badge-category">{project.category}</span>
                  {project.statBadge && (
                    <span className="badge-highlight">
                      <Sparkles size={11} />
                      {project.statBadge}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                {/* Tech Pills */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-card-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm project-details-btn"
                    onClick={() => setActiveProject(project)}
                  >
                    <Eye size={15} />
                    <span>Case Study</span>
                  </button>

                  <div className="project-links-group">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={17} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-link link-highlight"
                      title="View Live Demonstration"
                      aria-label="Live Demonstration"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
