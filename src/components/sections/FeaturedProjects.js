import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import { MovingBorderButton } from '../ui/moving-border';
import { PixelCanvas } from '../ui/pixel-canvas';
import './FeaturedProjects.css';

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const featuredProjects = useMemo(() => projects.slice(0, 6), []);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const testimonialsLength = useMemo(() => featuredProjects.length, [featuredProjects]);
  const activeProject = useMemo(() => featuredProjects[activeIndex], [activeIndex, featuredProjects]);

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 5000);
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Compute transforms for each card
  function getCardStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateX(0px) translateY(0px) scale(1) rotateY(0deg)',
        transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
      transition: 'all 0.8s cubic-bezier(.4,2,.3,1)',
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="featured-projects-section">
      <div className="featured-container">
        {/* Header */}
        <div className="featured-header">
          <div className="header-badge">
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my recent work in full-stack development and AI engineering
          </p>
        </div>

        {/* Circular Carousel */}
        <div className="carousel-grid">
          {/* Project Cards Carousel */}
          <div className="cards-container" ref={imageContainerRef}>
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card-carousel"
                style={getCardStyle(index)}
              >
                <PixelCanvas
                  gap={8}
                  speed={30}
                  colors={["#06b6d4", "#22d3ee", "#67e8f9"]}
                  variant="default"
                />
                <div className="project-visual-large">
                  <div className="visual-icon-large">
                    {project.type === 'ai' && (
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {project.type === 'fullstack' && (
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {project.type === 'web' && (
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Info */}
          <div className="project-info-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={quoteVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="project-meta">
                  <span className={`type-badge ${activeProject.type}`}>
                    {activeProject.type === 'ai' && 'AI/ML'}
                    {activeProject.type === 'fullstack' && 'Full Stack'}
                    {activeProject.type === 'web' && 'Web App'}
                  </span>
                  <span className="year-badge">{activeProject.year}</span>
                </div>

                <h3 className="project-title-carousel">{activeProject.title}</h3>

                <motion.p className="project-description-carousel">
                  {activeProject.shortDescription.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut', delay: 0.025 * i }}
                      style={{ display: 'inline-block' }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {activeProject.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                  {activeProject.techStack.length > 4 && (
                    <span className="tech-badge more">
                      +{activeProject.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="project-links">
                  {activeProject.github && (
                    <Button
                      variant="outline"
                      size="small"
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span style={{ marginLeft: '0.5rem' }}>Code</span>
                    </Button>
                  )}
                  {activeProject.liveDemo && (
                    <Button
                      variant="gradient"
                      size="small"
                      href={activeProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span style={{ marginLeft: '0.5rem' }}>Live Demo</span>
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="arrow-buttons">
              <button
                className="arrow-button"
                onClick={handlePrev}
                style={{ backgroundColor: hoverPrev ? '#8b5cf6' : '#1a1a1f' }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Previous project"
              >
                <FaArrowLeft size={24} color="#f1f1f7" />
              </button>
              <button
                className="arrow-button"
                onClick={handleNext}
                style={{ backgroundColor: hoverNext ? '#06b6d4' : '#1a1a1f' }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Next project"
              >
                <FaArrowRight size={24} color="#f1f1f7" />
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="cta-section flex justify-center">
          <MovingBorderButton
            onClick={() => navigate('/projects')}
            borderRadius="1.75rem"
            className="bg-slate-900/90 text-white border-cyan-500/30 font-semibold flex items-center gap-2"
            containerClassName="h-14 w-56"
            duration={3000}
          >
            View All Projects
            <ArrowRight size={16} />
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
