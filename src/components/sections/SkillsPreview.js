import React from 'react';
import Section from '../ui/Section';
import SkillTag from '../ui/SkillTag';
import Button from '../ui/Button';
import { skillGroups } from '../../data/skills';
import './SkillsPreview.css';

const SkillsPreview = () => {
  // Show first 3-4 skill groups for preview
  const previewGroups = skillGroups.slice(0, 4);

  return (
    <Section 
      title="Skills & Technologies" 
      subtitle="My technical expertise"
      className="skills-preview"
    >
      <div className="skills-preview__groups">
        {previewGroups.map((group, index) => (
          <div key={index} className="skills-preview__group">
            <h3 className="skills-preview__category">{group.category}</h3>
            <div className="skills-preview__tags">
              {group.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-preview__cta">
        <Button variant="outline" size="md" href="/about">
          View All Skills
        </Button>
      </div>
    </Section>
  );
};

export default SkillsPreview;
