import React from 'react';
import RadialOrbitalTimeline from '../ui/RadialOrbitalTimeline';
import { fullStackSkills, aiEngineerSkills } from '../../data/skillsOrbital';
import './SkillsOrbital.css';

const SkillsOrbital = () => {
  return (
    <div className="skills-orbital-wrapper">
      <div className="skills-orbital-header">
        <div className="skills-orbital-badge">
          <span className="skills-orbital-badge-text">Technical Expertise</span>
        </div>
        <h2 className="skills-orbital-title">My Tech Stack</h2>
        <p className="skills-orbital-subtitle">
          Interactive visualization of my technical expertise. Click on any skill to explore details and connections.
        </p>
      </div>
      
      <div className="skills-orbital-dual-container">
        <div className="skills-orbital-section">
          <h3 className="skills-orbital-section-title">Full Stack Development</h3>
          <RadialOrbitalTimeline timelineData={fullStackSkills} />
        </div>
        
        <div className="skills-orbital-section">
          <h3 className="skills-orbital-section-title">AI Engineer</h3>
          <RadialOrbitalTimeline timelineData={aiEngineerSkills} />
        </div>
      </div>
    </div>
  );
};

export default SkillsOrbital;
