import React from 'react';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection = ({ name, title, tagline, contactEmail, contactPhone }) => {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__name">{name}</h1>
        <p className="hero-section__title">{title}</p>
        <p className="hero-section__tagline">{tagline}</p>
        
        <div className="hero-section__cta">
          <Button 
            variant="primary" 
            size="lg" 
            href="/contact"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href="/projects"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
