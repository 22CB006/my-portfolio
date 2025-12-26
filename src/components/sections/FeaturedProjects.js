import React from 'react';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import { projects } from '../../data/projects';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  // Display first 3-6 projects from data store
  const featuredProjects = projects.slice(0, 6);

  return (
    <Section 
      title="Featured Projects" 
      subtitle="Showcasing my recent work"
      className="featured-projects"
    >
      <div className="featured-projects__grid">
        {featuredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            showCaseStudyLink={true}
          />
        ))}
      </div>
      <div className="featured-projects__cta">
        <Button variant="primary" size="md" href="/projects">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
