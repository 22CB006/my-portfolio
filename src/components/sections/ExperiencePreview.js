import React from 'react';
import Section from '../ui/Section';
import ExperienceItem from '../ui/ExperienceItem';
import Button from '../ui/Button';
import { experiences } from '../../data/experience';
import './ExperiencePreview.css';

const ExperiencePreview = () => {
  // Sort experiences by start date (most recent first) and show latest 2
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  
  const latestExperiences = sortedExperiences.slice(0, 2);

  return (
    <Section 
      title="Work Experience" 
      subtitle="My professional journey"
      className="experience-preview"
    >
      <div className="experience-preview__timeline">
        {latestExperiences.map((experience) => (
          <ExperienceItem 
            key={experience.id} 
            experience={experience} 
            isPreview={true}
          />
        ))}
      </div>
      <div className="experience-preview__cta">
        <Button variant="primary" size="md" href="/experience">
          View Full Experience
        </Button>
      </div>
    </Section>
  );
};

export default ExperiencePreview;
