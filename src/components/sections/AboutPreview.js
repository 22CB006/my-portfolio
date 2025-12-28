import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import './AboutPreview.css';

const AboutPreview = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate('/about');
  };

  return (
    <div className="about-preview-wrapper">
      <div className="about-preview-container">
        <h2 className="about-preview-title">About Me</h2>
        
        <h3 className="about-preview-subtitle">
          Full Stack Developer & AI Engineer
        </h3>
        
        <p className="about-preview-description">
          I'm a dedicated Full Stack Developer and AI Engineer with expertise in building 
          scalable web applications and intelligent systems. With a strong foundation in both 
          frontend and backend technologies, I create solutions that combine elegant user 
          experiences with powerful functionality. My work spans from developing responsive 
          React applications to implementing machine learning models that solve real-world 
          problems.
        </p>
        
        <Button 
          variant="primary" 
          size="medium" 
          onClick={handleKnowMore}
        >
          Know More About Me
          <svg 
            className="about-preview-button-icon" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ marginLeft: '0.5rem', width: '16px', height: '16px' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default AboutPreview;
