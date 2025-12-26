import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import SkillTag from './SkillTag';
import './ProjectCard.css';

const ProjectCard = ({ project, showCaseStudyLink = true }) => {
  const { id, title, shortDescription, techStack, github, liveDemo } = project;

  return (
    <div className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{shortDescription}</p>
        
        <div className="project-card__tech-stack">
          {techStack && techStack.map((tech, index) => (
            <SkillTag key={index} skill={tech} />
          ))}
        </div>
      </div>

      <div className="project-card__actions">
        {github && (
          <Button 
            variant="outline" 
            size="sm" 
            href={github}
          >
            GitHub
          </Button>
        )}
        {liveDemo && (
          <Button 
            variant="outline" 
            size="sm" 
            href={liveDemo}
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
