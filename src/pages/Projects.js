import React, { useState } from 'react';
import SEO from '../components/SEO';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import './Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Filter configuration
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  // Filter projects based on selected filter
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedFilter);

  return (
    <>
      <SEO 
        title="Projects"
        description="Browse my portfolio of web development, AI/ML, and full-stack projects. Explore case studies showcasing problem-solving and technical expertise."
        type="website"
      />
      <main className="projects-page">
        <Section 
          title="Projects" 
          subtitle="Explore my work across web development, AI/ML, and full-stack applications"
        >
          {/* Filter buttons */}
          <div className="projects-page__filters">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'primary' : 'outline'}
                size="md"
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-page__grid">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  showCaseStudyLink={true}
                />
              ))}
            </div>
          ) : (
            <div className="projects-page__empty">
              <p>No projects found matching the selected filter.</p>
              <Button 
                variant="primary" 
                size="md"
                onClick={() => setSelectedFilter('all')}
              >
                View All Projects
              </Button>
            </div>
          )}
        </Section>
      </main>
    </>
  );
};

export default Projects;
