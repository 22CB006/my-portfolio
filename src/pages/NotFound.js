import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />
      <main className="not-found">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="not-found-button">
            Go Back Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
