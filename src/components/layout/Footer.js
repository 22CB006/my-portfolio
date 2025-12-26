import React from 'react';
import { siteConfig } from '../../data/config';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">{siteConfig.name}</h3>
            <p className="footer-title">{siteConfig.title}</p>
          </div>

          <div className="footer-links">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="footer-link"
              aria-label="Email"
            >
              <span>📧</span>
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="footer-link"
              aria-label="Phone"
            >
              <span>📞</span>
              <span>{siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="footer-social">
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
