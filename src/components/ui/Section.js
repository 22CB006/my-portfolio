import React from 'react';
import './Section.css';

const Section = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`section ${className}`.trim()}>
      {(title || subtitle) && (
        <div className="section__header">
          {title && <h2 className="section__title">{title}</h2>}
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="section__content">
        {children}
      </div>
    </section>
  );
};

export default Section;
