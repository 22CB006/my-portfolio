import React from 'react';
import { Timeline } from '../ui/Timeline';
import { experiences } from '../../data/experience';
import { education } from '../../data/education';
import { useNavigate } from 'react-router-dom';
import './ExperiencePreview.css';

const ExperiencePreview = () => {
  const navigate = useNavigate();

  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // Combine experiences and education for timeline
  const combinedTimeline = [
    ...sortedExperiences.map((exp) => ({
      title: exp.duration,
      content: (
        <div className="experience-timeline-content">
          <div className="experience-header">
            <h4 className="experience-role">{exp.role}</h4>
            <p className="experience-company">{exp.company}</p>
          </div>
          
          <p className="experience-description">{exp.description}</p>
          
          <div className="experience-responsibilities">
            <h5 className="responsibilities-title">Key Responsibilities:</h5>
            <ul className="responsibilities-list">
              {exp.responsibilities.slice(0, 3).map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
          
          <div className="experience-technologies">
            {exp.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      ),
    })),
    ...education.map((edu) => ({
      title: edu.duration,
      content: (
        <div className="experience-timeline-content education-content">
          <div className="experience-header">
            <h4 className="experience-role">{edu.degree}</h4>
            <p className="experience-company">{edu.institution}</p>
          </div>
          
          <p className="experience-description">{edu.description}</p>
          
          <div className="education-highlights">
            <h5 className="responsibilities-title">Highlights:</h5>
            <ul className="responsibilities-list">
              {edu.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className="education-cgpa">
            <span className="cgpa-badge">CGPA: {edu.cgpa}/10</span>
          </div>
        </div>
      ),
    })),
  ];

  return (
    <div className="experience-preview-wrapper">
      <Timeline data={combinedTimeline} title="Experience & Education" subtitle="My professional journey and academic background" />
    </div>
  );
};

export default ExperiencePreview;
