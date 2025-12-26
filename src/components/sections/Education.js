import React from 'react';
import Section from '../ui/Section';
import { education } from '../../data/education';
import './Education.css';

const Education = () => {
  return (
    <Section 
      title="Education" 
      subtitle="Academic background"
      className="education"
    >
      <div className="education__content">
        <div className="education__card">
          <h3 className="education__degree">{education.degree}</h3>
          <p className="education__major">{education.major}</p>
          <p className="education__college">{education.college}</p>
          <div className="education__details">
            <span className="education__duration">{education.duration}</span>
            <span className="education__location">{education.location}</span>
          </div>
          <div className="education__cgpa">
            <span className="education__cgpa-label">CGPA:</span>
            <span className="education__cgpa-value">{education.cgpa}/10.0</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
