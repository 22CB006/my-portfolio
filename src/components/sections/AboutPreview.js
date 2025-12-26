import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <Section 
      title="About Me" 
      subtitle="Get to know me better"
      className="about-preview"
    >
      <div className="about-preview__content">
        <p className="about-preview__intro">
          I'm a passionate Full Stack Developer and AI Engineer with expertise in building 
          scalable web applications and intelligent systems. With a strong foundation in both 
          frontend and backend technologies, I create solutions that combine elegant user 
          experiences with powerful functionality.
        </p>
        <p className="about-preview__intro">
          My work spans from developing responsive React applications to implementing machine 
          learning models that solve real-world problems. I'm driven by the challenge of 
          turning complex requirements into clean, efficient code.
        </p>
        <div className="about-preview__cta">
          <Button variant="primary" size="md" href="/about">
            Learn More About Me
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;
