import React, { useState } from 'react';
import { Code, Layers, Database, Wrench, CheckCircle, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Core Frontend', 'Frameworks & Libraries', 'Data & Architecture', 'Tooling & Workflow'];

  const getFilteredCategories = () => {
    if (activeCategory === 'All') return skillsData;
    return skillsData.filter((cat) => cat.category === activeCategory);
  };

  const categoryIcons = {
    'Core Frontend': <Code size={18} />,
    'Frameworks & Libraries': <Layers size={18} />,
    'Data & Architecture': <Database size={18} />,
    'Tooling & Workflow': <Wrench size={18} />
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">02. Technical Arsenal</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the modern frontend technologies, frameworks, and tools I use to build scalable web applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`skill-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="skills-grid">
          {getFilteredCategories().map((catData) => (
            <div key={catData.category} className="skills-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {categoryIcons[catData.category] || <Code size={18} />}
                </div>
                <div>
                  <h3 className="category-title">{catData.category}</h3>
                  <p className="category-desc">{catData.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {catData.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <span className="skill-highlight">
                      <Sparkles size={12} className="sparkle-icon" />
                      {skill.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Highlights Banner */}
        <div className="tech-marquee-card glass-card">
          <div className="marquee-label">
            <CheckCircle size={16} className="text-cyan" />
            <span>Core Toolset:</span>
          </div>
          <div className="marquee-tags">
            {["React.js", "JavaScript ES6+", "HTML5", "CSS3", "SCSS", "Bootstrap 5", "REST APIs", "Fetch / Axios", "Git & GitHub", "Vite", "Angular", "Responsive Design"].map((item) => (
              <span key={item} className="tech-pill marquee-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
