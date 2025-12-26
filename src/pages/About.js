import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import SkillTag from '../components/ui/SkillTag';
import { skillGroups } from '../data/skills';
import { siteConfig } from '../data/config';
import './About.css';

const About = () => {
  return (
    <>
      <SEO 
        title="About"
        description="Learn about my background, strengths, and technical skills as a Full Stack Developer & AI Engineer. Discover why I'm passionate about building intelligent, scalable applications."
        type="website"
      />
      <main className="about-page">
      {/* Professional Profile Section */}
      <Section 
        title="About Me" 
        subtitle="Full Stack Developer & AI Engineer"
        className="about-profile"
      >
        <div className="about-profile__content">
          <p className="about-profile__text">
            I'm a passionate Full Stack Developer and AI Engineer with expertise in building 
            scalable web applications and intelligent systems. With a strong foundation in both 
            frontend and backend technologies, I create solutions that combine elegant user 
            experiences with powerful functionality.
          </p>
          <p className="about-profile__text">
            My work spans from developing responsive React applications to implementing machine 
            learning models that solve real-world problems. I'm driven by the challenge of 
            turning complex requirements into clean, efficient code.
          </p>
          <p className="about-profile__text">
            I believe in writing maintainable, well-documented code and staying current with 
            emerging technologies. Whether it's architecting a new feature, optimizing performance, 
            or debugging a complex issue, I approach every challenge with curiosity and determination.
          </p>
        </div>
      </Section>

      {/* Strengths Section */}
      <Section 
        title="My Strengths" 
        subtitle="What I bring to the table"
        className="about-strengths"
      >
        <div className="about-strengths__grid">
          <div className="strength-card">
            <div className="strength-card__icon">🚀</div>
            <h3 className="strength-card__title">Full Stack Expertise</h3>
            <p className="strength-card__description">
              Proficient in both frontend and backend development, I can build complete 
              applications from database design to user interface implementation.
            </p>
          </div>
          
          <div className="strength-card">
            <div className="strength-card__icon">🤖</div>
            <h3 className="strength-card__title">AI & Machine Learning</h3>
            <p className="strength-card__description">
              Experience with TensorFlow, PyTorch, and scikit-learn to build intelligent 
              systems that learn from data and make predictions.
            </p>
          </div>
          
          <div className="strength-card">
            <div className="strength-card__icon">⚡</div>
            <h3 className="strength-card__title">Performance Optimization</h3>
            <p className="strength-card__description">
              Skilled at identifying bottlenecks and optimizing applications for speed, 
              scalability, and efficient resource usage.
            </p>
          </div>
          
          <div className="strength-card">
            <div className="strength-card__icon">🎨</div>
            <h3 className="strength-card__title">User-Centric Design</h3>
            <p className="strength-card__description">
              Focus on creating intuitive, accessible interfaces that provide excellent 
              user experiences across all devices.
            </p>
          </div>
          
          <div className="strength-card">
            <div className="strength-card__icon">🔧</div>
            <h3 className="strength-card__title">Problem Solving</h3>
            <p className="strength-card__description">
              Strong analytical skills to break down complex problems into manageable 
              solutions and implement them effectively.
            </p>
          </div>
          
          <div className="strength-card">
            <div className="strength-card__icon">👥</div>
            <h3 className="strength-card__title">Team Collaboration</h3>
            <p className="strength-card__description">
              Experienced in working with cross-functional teams, conducting code reviews, 
              and mentoring junior developers.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Work With Me Section */}
      <Section 
        title="Why Work With Me" 
        subtitle="The value I bring to your projects"
        className="about-value"
      >
        <div className="about-value__content">
          <div className="value-point">
            <h3 className="value-point__title">Quality-Driven Development</h3>
            <p className="value-point__description">
              I write clean, maintainable code with comprehensive testing and documentation. 
              Every project I work on is built to last and easy for others to understand.
            </p>
          </div>
          
          <div className="value-point">
            <h3 className="value-point__title">Clear Communication</h3>
            <p className="value-point__description">
              I believe in transparent communication throughout the development process. 
              You'll always know the project status, challenges, and next steps.
            </p>
          </div>
          
          <div className="value-point">
            <h3 className="value-point__title">Continuous Learning</h3>
            <p className="value-point__description">
              Technology evolves rapidly, and I stay current with the latest tools, frameworks, 
              and best practices to deliver modern, efficient solutions.
            </p>
          </div>
          
          <div className="value-point">
            <h3 className="value-point__title">Results-Oriented Approach</h3>
            <p className="value-point__description">
              I focus on delivering tangible results that meet your business objectives. 
              Every technical decision is made with your goals in mind.
            </p>
          </div>
        </div>
      </Section>

      {/* Complete Skills Breakdown */}
      <Section 
        title="Technical Skills" 
        subtitle="Complete breakdown of my expertise"
        className="about-skills"
      >
        <div className="about-skills__groups">
          {skillGroups.map((group, index) => (
            <div key={index} className="about-skills__group">
              <h3 className="about-skills__category">{group.category}</h3>
              <div className="about-skills__tags">
                {group.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
    </>
  );
};

export default About;
