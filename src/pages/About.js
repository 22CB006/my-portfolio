import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import SkillTag from '../components/ui/SkillTag';
import { StrengthsHoverEffect } from '../components/ui/StrengthsHoverEffect';
import ValueCardsCarousel from '../components/ui/ValueCardsCarousel';
import StackingCards from '../components/ui/stacking-card';
import { AnimatedText } from '../components/ui/AnimatedText';
import { MagicText } from '../components/ui/MagicText';
import { FeatureCard } from '../components/ui/grid-feature-cards';
import { TestimonialsColumn } from '../components/ui/testimonials-columns';
import { skillGroups } from '../data/skills';
import { skillsGridData } from '../data/skillsGrid';
import { siteConfig } from '../data/config';
import { 
  Zap, 
  Brain, 
  Rocket, 
  Palette, 
  Wrench, 
  Users,
  Code2,
  Target,
  Layers,
  Lightbulb,
  Sparkles,
  Gauge,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import './About.css';

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const AnimatedContainer = ({ className, delay = 0.1, children }) => {
    if (shouldReduceMotion) {
      return children;
    }
    return (
      <motion.div
        initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const strengths = [
    {
      icon: <Zap size={48} />,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend development, I can build complete applications from database design to user interface implementation."
    },
    {
      icon: <Brain size={48} />,
      title: "AI & Machine Learning",
      description: "Experience with TensorFlow, PyTorch, and scikit-learn to build intelligent systems that learn from data and make predictions."
    },
    {
      icon: <Rocket size={48} />,
      title: "Performance Optimization",
      description: "Skilled at identifying bottlenecks and optimizing applications for speed, scalability, and efficient resource usage."
    },
    {
      icon: <Palette size={48} />,
      title: "User-Centric Design",
      description: "Focus on creating intuitive, accessible interfaces that provide excellent user experiences across all devices."
    },
    {
      icon: <Wrench size={48} />,
      title: "Problem Solving",
      description: "Strong analytical skills to break down complex problems into manageable solutions and implement them effectively."
    },
    {
      icon: <Users size={48} />,
      title: "Team Collaboration",
      description: "Experienced in working with cross-functional teams, conducting code reviews, and mentoring junior developers."
    }
  ];

  const valueCards = [
    {
      name: "Quality-Driven Development",
      text: "I write clean, maintainable, and scalable code that's built to last, not just to ship fast.",
      icon: Code2,
      role: "Foundation"
    },
    {
      name: "Results-Oriented Approach",
      text: "I focus on solving real business problems and delivering features that create measurable impact.",
      icon: Target,
      role: "Impact"
    },
    {
      name: "End-to-End Ownership",
      text: "From planning and development to deployment and optimization, I handle the complete lifecycle.",
      icon: Layers,
      role: "Responsibility"
    },
    {
      name: "Strong Problem-Solving Skills",
      text: "I break down complex requirements into practical, efficient solutions.",
      icon: Lightbulb,
      role: "Approach"
    },
    {
      name: "AI-First & Future-Ready",
      text: "I integrate modern AI, automation, and GenAI where it adds real value—not just hype.",
      icon: Sparkles,
      role: "Innovation"
    },
    {
      name: "Performance & Reliability Focus",
      text: "I build systems optimized for speed, stability, and real-world usage.",
      icon: Gauge,
      role: "Quality"
    },
    {
      name: "Clear Communication",
      text: "I communicate progress clearly and translate technical decisions into business-friendly terms.",
      icon: MessageSquare,
      role: "Collaboration"
    },
    {
      name: "Fast Learner, Adaptable Engineer",
      text: "I quickly adapt to new tools, domains, and requirements without slowing down delivery.",
      icon: TrendingUp,
      role: "Growth"
    }
  ];

  const firstColumn = valueCards.slice(0, 3);
  const secondColumn = valueCards.slice(3, 6);
  const thirdColumn = valueCards.slice(6, 8);

  return (
    <>
      <SEO 
        title="About"
        description="Learn about my background, strengths, and technical skills as a Full Stack Developer & AI Engineer. Discover why I'm passionate about building intelligent, scalable applications."
        type="website"
      />
      <main className="about-page">
      {/* Professional Profile Section */}
      <section className="section about-profile">
        <div className="section__header">
          <AnimatedText 
            text="About Me"
            duration={0.05}
            delay={0.08}
            textClassName="section__title animated-title"
            underlineGradient="from-cyan-500 via-purple-500 to-cyan-500"
            underlineHeight="h-1"
            underlineOffset="-bottom-3"
            underlineClassName="rounded-full"
          />
          <p className="section__subtitle">Full Stack Developer & AI Engineer</p>
        </div>
        <div className="section__content">
          <div className="about-profile__content">
            <MagicText 
              text="I'm a passionate Full Stack Developer and AI Engineer with expertise in building scalable web applications and intelligent systems. With a strong foundation in both frontend and backend technologies, I create solutions that combine elegant user experiences with powerful functionality. My work spans from developing responsive React applications to implementing machine learning models that solve real-world problems. I'm driven by the challenge of turning complex requirements into clean, efficient code. I believe in writing maintainable, well-documented code and staying current with emerging technologies. Whether it's architecting a new feature, optimizing performance, or debugging a complex issue, I approach every challenge with curiosity and determination."
              className="about-profile__magic-text"
            />
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <Section 
        title="My Strengths" 
        subtitle="What I bring to the table"
        className="about-strengths"
      >
        <StrengthsHoverEffect items={strengths} />
      </Section>

      {/* Why Work With Me Section */}
      <Section 
        title="Why Work With Me" 
        subtitle="The value I bring to your projects"
        className="about-value"
      >
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </Section>

      {/* Complete Skills Breakdown */}
      <Section 
        title="Technical Skills" 
        subtitle="Complete breakdown of my expertise"
        className="about-skills"
      >
        <AnimatedContainer className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide md:text-base">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed rounded-lg sm:grid-cols-2 md:grid-cols-3"
        >
          {skillsGridData.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </Section>
    </main>
    </>
  );
};

export default About;
