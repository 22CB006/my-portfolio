import React from 'react';
import SkillTag from './SkillTag';
import './ExperienceItem.css';

const ExperienceItem = ({ experience, isPreview = false }) => {
  const { company, role, duration, description, responsibilities, technologies } = experience;

  return (
    <div className="experience-item">
      <div className="experience-item__timeline-marker"></div>
      
      <div className="experience-item__content">
        <div className="experience-item__header">
          <h3 className="experience-item__role">{role}</h3>
          <p className="experience-item__company">{company}</p>
          <p className="experience-item__duration">{duration}</p>
        </div>

        <p className="experience-item__description">{description}</p>

        {!isPreview && responsibilities && responsibilities.length > 0 && (
          <ul className="experience-item__responsibilities">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="experience-item__technologies">
            {technologies.map((tech, index) => (
              <SkillTag key={index} skill={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
