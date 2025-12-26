import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import SkillsPreview from '../components/sections/SkillsPreview';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ExperiencePreview from '../components/sections/ExperiencePreview';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import ContactCTA from '../components/sections/ContactCTA';
import { siteConfig } from '../data/config';
import './Home.css';

const Home = () => {
  const { name, title, tagline, contact } = siteConfig;

  return (
    <>
      <SEO 
        title="Home"
        description={`${name} - ${title}. ${tagline}`}
        type="website"
      />
      <main className="home">
        <HeroSection 
          name={name}
          title={title}
          tagline={tagline}
          contactEmail={contact.email}
          contactPhone={contact.phone}
        />
        <AboutPreview />
        <SkillsPreview />
        <FeaturedProjects />
        <ExperiencePreview />
        <Education />
        <Certifications />
        <ContactCTA />
      </main>
    </>
  );
};

export default Home;
