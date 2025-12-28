import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Zap, Target, CheckCircle2, TrendingUp } from 'lucide-react';
import './CaseStudy.css';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="case-study-not-found">
        <h1>Case Study Not Found</h1>
        <button onClick={() => navigate('/projects')} className="back-button">
          <ArrowLeft size={20} />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} - Case Study`}
        description={project.shortDescription}
        type="article"
      />
      <main className="case-study-page">
        {/* Hero Section */}
        <section className="case-study-hero">
          <div className="case-study-hero__content">
            <button onClick={() => navigate('/projects')} className="back-button">
              <ArrowLeft size={20} />
              Back to Projects
            </button>
            
            <div className="case-study-hero__meta">
              <span className="meta-item">
                <Calendar size={16} />
                {project.year}
              </span>
              <span className="meta-item">
                <Tag size={16} />
                {project.type === 'fullstack' ? 'Full Stack' : project.type === 'ai' ? 'AI/ML' : 'Web Development'}
              </span>
            </div>

            <h1 className="case-study-hero__title">{project.title}</h1>
            <p className="case-study-hero__subtitle">{project.shortDescription}</p>

            <div className="case-study-hero__actions">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-button action-button--primary"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-button action-button--secondary"
                >
                  <Github size={20} />
                  View Source Code
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="case-study-hero__image">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="hero-image"
            />
          </div>
        </section>

        {/* Overview Section */}
        <Section 
          title="Project Overview" 
          subtitle="Understanding the challenge and solution"
          className="case-study-section"
        >
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-card__icon">
                <Target size={32} />
              </div>
              <h3>The Problem</h3>
              <p>{project.problem}</p>
            </div>

            <div className="overview-card">
              <div className="overview-card__icon">
                <Zap size={32} />
              </div>
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="full-description">
            <p>{project.fullDescription}</p>
          </div>
        </Section>

        {/* Key Features Section */}
        <Section 
          title="Key Features" 
          subtitle="What makes this project stand out"
          className="case-study-section"
        >
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <CheckCircle2 size={24} className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Stack Section */}
        <Section 
          title="Technology Stack" 
          subtitle="Tools and technologies used"
          className="case-study-section"
        >
          <div className="tech-stack-grid">
            {project.techStack.map((tech, index) => (
              <div key={index} className="tech-badge">
                {tech}
              </div>
            ))}
          </div>
        </Section>

        {/* Results & Impact Section */}
        <Section 
          title="Results & Impact" 
          subtitle="Measuring success"
          className="case-study-section"
        >
          <div className="results-card">
            <TrendingUp size={48} className="results-icon" />
            <h3>Project Outcomes</h3>
            <div className="results-list">
              {project.id === 'linkup-live-video-conferencing' && (
                <>
                  <div className="result-item">
                    <span className="result-metric">30%</span>
                    <span className="result-label">Bandwidth Reduction</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Secure</span>
                    <span className="result-label">Multi-Factor Authentication</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Real-time</span>
                    <span className="result-label">Video & Messaging</span>
                  </div>
                </>
              )}
              {project.id === 'quick-ai-content-generation' && (
                <>
                  <div className="result-item">
                    <span className="result-metric">AI-Powered</span>
                    <span className="result-label">Content Generation</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Subscription</span>
                    <span className="result-label">Based Access Model</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Dynamic</span>
                    <span className="result-label">Image & Text Creation</span>
                  </div>
                </>
              )}
              {project.id === 'travel-management-system' && (
                <>
                  <div className="result-item">
                    <span className="result-metric">Next.js 16</span>
                    <span className="result-label">Latest Framework</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Turbopack</span>
                    <span className="result-label">Optimized Builds</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Type-Safe</span>
                    <span className="result-label">TypeScript 5</span>
                  </div>
                </>
              )}
              {project.id === 'visual-lens-pro' && (
                <>
                  <div className="result-item">
                    <span className="result-metric">AI-Assisted</span>
                    <span className="result-label">UI Generation</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Rapid</span>
                    <span className="result-label">Prototyping Workflow</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Modern</span>
                    <span className="result-label">Design System</span>
                  </div>
                </>
              )}
              {project.id === 'workflow-roi-calculator' && (
                <>
                  <div className="result-item">
                    <span className="result-metric">Automated</span>
                    <span className="result-label">Email Reports</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Interactive</span>
                    <span className="result-label">ROI Calculation</span>
                  </div>
                  <div className="result-item">
                    <span className="result-metric">Mobile-Friendly</span>
                    <span className="result-label">Responsive Design</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <section className="case-study-cta">
          <div className="cta-content">
            <h2>Interested in Similar Projects?</h2>
            <p>Let's discuss how I can help bring your ideas to life</p>
            <div className="cta-actions">
              <button 
                onClick={() => navigate('/contact')}
                className="action-button action-button--primary"
              >
                Get in Touch
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="action-button action-button--secondary"
              >
                View More Projects
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudy;
