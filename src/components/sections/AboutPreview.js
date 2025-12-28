import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { MovingBorderButton } from '../ui/moving-border';
import { ArrowRight } from 'lucide-react';
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
        
        <div className="flex justify-center mt-8">
          <MovingBorderButton
            onClick={handleKnowMore}
            borderRadius="1.75rem"
            className="bg-slate-900/90 text-white border-cyan-500/30 font-semibold flex items-center gap-2"
            containerClassName="h-14 w-56"
            duration={3000}
          >
            Know More About Me
            <ArrowRight size={16} />
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
