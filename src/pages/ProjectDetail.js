import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { projects } from '../data/projects';
import Button from '../components/ui/Button';
import SkillTag from '../components/ui/SkillTag';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Load project data by id from data store
  const project = projects.find(p => p.id === id);

  // Handle non-existent project ids with 404 error state
  if (!project) {
    return (
      <>
        <SEO 
          title="Project Not Found"
          description="The project you're looking for doesn't exist or has been removed."
        />
        <main className="project-detail project-detail--not-found">
          <div className="project-detail__404">
            <h1>404</h1>
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/projects">
              <Button variant="primary" size="md">
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  const {
    title,
    year,
    fullDescription,
    problem,
    solution,
    features,
    techStack,
    github,
    liveDemo,
    images
  } = project;

  // Create structured data for the project
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": fullDescription,
    "dateCreated": year.toString(),
    "author": {
      "@type": "Person",
      "name": "ARYA LAKSHMI M"
    },
    "keywords": techStack.join(', ')
  };

  return (
    <>
      <SEO 
        title={title}
        description={fullDescription}
        type="article"
        article={true}
        structuredData={projectStructuredData}
      />
      <main className="project-detail">
        {/* Header section */}
        <header className="project-detail__header">
          <Link to="/projects" className="project-detail__back-link">
            ← Back to Projects
          </Link>
          <h1 className="project-detail__title">{title}</h1>
          <p className="project-detail__year">{year}</p>
        </header>

        {/* Summary section */}
        <section className="project-detail__section">
          <h2>Overview</h2>
          <p className="project-detail__text">{fullDescription}</p>
        </section>

        {/* Conditional image rendering */}
        {images && images.length > 0 ? (
          <section className="project-detail__images">
            {images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${title} screenshot ${index + 1}`}
                className="project-detail__image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Available';
                }}
              />
            ))}
          </section>
        ) : (
          <section className="project-detail__placeholder">
            <div className="project-detail__placeholder-content">
              <svg 
                className="project-detail__placeholder-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <p>Project screenshots coming soon</p>
            </div>
          </section>
        )}

        {/* Problem statement */}
        <section className="project-detail__section">
          <h2>The Problem</h2>
          <p className="project-detail__text">{problem}</p>
        </section>

        {/* Solution description */}
        <section className="project-detail__section">
          <h2>The Solution</h2>
          <p className="project-detail__text">{solution}</p>
        </section>

        {/* Features list */}
        <section className="project-detail__section">
          <h2>Key Features</h2>
          <ul className="project-detail__features">
            {features.map((feature, index) => (
              <li key={index} className="project-detail__feature-item">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech stack */}
        <section className="project-detail__section">
          <h2>Technologies Used</h2>
          <div className="project-detail__tech-stack">
            {techStack.map((tech, index) => (
              <SkillTag key={index} skill={tech} />
            ))}
          </div>
        </section>

        {/* Action buttons */}
        <footer className="project-detail__actions">
          {github && (
            <Button 
              variant="primary" 
              size="lg" 
              href={github}
            >
              View on GitHub
            </Button>
          )}
          {liveDemo && (
            <Button 
              variant="secondary" 
              size="lg" 
              href={liveDemo}
            >
              Live Demo
            </Button>
          )}
        </footer>
      </main>
    </>
  );
};

export default ProjectDetail;
