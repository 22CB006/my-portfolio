import React, { useEffect } from 'react';
import { Win98Button } from '../ui/Win98Button';
import { Cover } from '../ui/cover';
import { TypewriterCycle } from '../ui/typewriter-cycle';
import { VerticalCutReveal } from '../ui/VerticalCutReveal';
import { renderCanvas } from '../ui/canvas';
import './HeroSection.css';

const HeroSection = ({ name, title, tagline, contactEmail, contactPhone }) => {
  useEffect(() => {
    renderCanvas();
  }, []);

  const phrases = [
    "Full Stack Developer",
    "Helping Businesses Go Online",
    "Custom Websites Built for Your Needs"
  ];

  return (
    <section className="hero-section relative">
      {/* Canvas Animation Background */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
        style={{ opacity: 0.2 }}
      ></canvas>

      <div className="hero-section__content hero-section__centered relative z-10">
        {/* Centered Content */}
        <div className="hero-section__text">
          <p className="hero-section__greeting">Hi, I'm</p>
          <h1 className="hero-section__name">
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="first"
              loop={true}
              loopDelay={3000}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              Arya Lakshmi
            </VerticalCutReveal>
          </h1>

          <div className="mt-12 flex flex-wrap gap-3 text-sm font-semibold justify-center items-center">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-full text-cyan-400">
              Full Stack Developer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-full text-purple-400">
              AI Engineer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-full text-blue-400">
              Freelance Web Developer
            </span>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 relative z-20 text-gray-200">
            Building stunning websites at <Cover>warp speed</Cover>
          </h2>

          <p className="hero-section__tagline text-base md:text-lg mt-8">
            Professional web solutions tailored to your business goals. 
            From stunning landing pages to full-featured web applications, 
            I'll help you establish a powerful online presence.
          </p>

          <div className="hero-section__cta flex flex-col sm:flex-row gap-4 mt-12">
            <Win98Button href="/contact">
              Get In Touch
            </Win98Button>
            <Win98Button href="/projects">
              View Projects
            </Win98Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-400 justify-center">
            <span className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
              Fast & Responsive
            </span>
            <span className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
              Modern Design
            </span>
            <span className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
              SEO Optimized
            </span>
            <span className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
              AI Powered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
