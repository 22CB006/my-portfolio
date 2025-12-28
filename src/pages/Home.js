import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import SkillsOrbital from '../components/sections/SkillsOrbital';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ExperiencePreview from '../components/sections/ExperiencePreview';
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
        <SkillsOrbital />
        <FeaturedProjects />
        <ExperiencePreview />
        <ContactCTA />
      </main>
    </>
  );
};

export default Home;
