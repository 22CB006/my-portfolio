import React from 'react';
import SEO from '../components/SEO';
import ExperienceItem from '../components/ui/ExperienceItem';
import { experiences } from '../data/experience';
import './Experience.css';

const Experience = () => {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  return (
    <>
      <SEO 
        title="Experience"
        description="Explore my professional work history and career progression as a Full Stack Developer & AI Engineer. View detailed timeline of positions, responsibilities, and achievements."
        type="website"
      />
      <main className="experience-page">
        <div className="experience-page__container">
          <header className="experience-page__header">
            <h1 className="experience-page__title">Work Experience</h1>
            <p className="experience-page__subtitle">
              My professional journey and career progression
            </p>
          </header>

          <section className="experience-page__timeline">
            {sortedExperiences.map((experience) => (
              <ExperienceItem 
                key={experience.id} 
                experience={experience} 
                isPreview={false}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Experience;
