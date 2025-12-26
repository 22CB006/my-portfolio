import React from 'react';
import Section from '../ui/Section';
import { certifications } from '../../data/certifications';
import './Certifications.css';

const Certifications = () => {
  return (
    <Section 
      title="Certifications" 
      subtitle="Professional credentials"
      className="certifications"
    >
      <div className="certifications__grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certifications__item">
            <h3 className="certifications__name">{cert.name}</h3>
            <p className="certifications__issuer">{cert.issuer}</p>
            <p className="certifications__date">{cert.date}</p>
            {cert.credentialUrl && (
              <a 
                href={cert.credentialUrl} 
                className="certifications__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Credential →
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
