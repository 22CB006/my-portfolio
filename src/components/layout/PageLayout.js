import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
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
