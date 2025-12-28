import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import SkillTag from './SkillTag';
import './ProjectCard.css';

const ProjectCard = ({ project, showCaseStudyLink = true }) => {
  const { id, title, year, type, shortDescription, techStack, github, liveDemo } = project;

  const getTypeLabel = (type) => {
    switch(type) {
      case 'ai': return 'AI/ML';
      case 'fullstack': return 'Full Stack';
      case 'web': return 'Web App';
      default: return type;
    }
  };

  return (
    <div className="project-card">
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className={`project-card__type project-card__type--${type}`}>
            {getTypeLabel(type)}
          </span>
          <span className="project-card__year">{year}</span>
        </div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{shortDescription}</p>
        
        <div className="project-card__tech-stack">
          {techStack && techStack.slice(0, 5).map((tech, index) => (
            <SkillTag key={index} skill={tech} />
          ))}
          {techStack && techStack.length > 5 && (
            <span className="project-card__tech-more">+{techStack.length - 5} more</span>
          )}
        </div>
      </div>

      <div className="project-card__actions">
        {github && (
          <Button 
            variant="outline" 
            size="sm" 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
        {liveDemo && (
          <Button 
            variant="outline" 
            size="sm" 
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
        {showCaseStudyLink && (
          <Link to={`/projects/${id}`}>
            <Button variant="primary" size="sm">
              Case Study
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
