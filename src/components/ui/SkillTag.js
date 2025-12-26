import React from 'react';
import './SkillTag.css';

const SkillTag = ({ skill, category }) => {
  // Optional: Add category-based color coding
  const getCategoryClass = (cat) => {
    if (!cat) return '';
    const categoryMap = {
      frontend: 'skill-tag--frontend',
      backend: 'skill-tag--backend',
      ai: 'skill-tag--ai',
      database: 'skill-tag--database',
      tools: 'skill-tag--tools',
    };
    return categoryMap[cat.toLowerCase()] || '';
  };

  const categoryClass = getCategoryClass(category);

  return (
    <span className={`skill-tag ${categoryClass}`.trim()}>
      {skill}
    </span>
  );
};

export default SkillTag;
