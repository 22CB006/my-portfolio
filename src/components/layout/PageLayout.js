import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ShootingStars from '../ui/shooting-stars';
import './PageLayout.css';

const PageLayout = ({ children, title, description }) => {
  // Set document title if provided
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | ${require('../../data/config').siteConfig.name}`;
    }
  }, [title]);

  // Set meta description if provided
  React.useEffect(() => {
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [description]);

  return (
    <div className="page-layout">
      {/* Background Layer */}
      <div className="shooting-stars-background">
        <div className="stars-static" />
        <div className="stars-gradient" />
        <ShootingStars 
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={10}
          maxSpeed={30}
        />
        <ShootingStars 
          starColor="#FF1493"
          trailColor="#FFD700"
          minSpeed={5}
          maxSpeed={15}
        />
        <ShootingStars 
          starColor="#00FF7F"
          trailColor="#1E90FF"
          minSpeed={15}
          maxSpeed={40}
        />
      </div>
      
      {/* Content Layer */}
      <Navbar />
      <main className="page-layout-content">
        <div className="page-layout-main">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
