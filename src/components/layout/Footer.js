import React from 'react';
import { Github, Linkedin, Mail, Phone, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'Home', href: '/' },
    { title: 'Projects', href: '/projects' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { title: 'Email', href: 'mailto:aryalakshmisece@gmail.com', text: 'aryalakshmisece@gmail.com' },
    { title: 'Phone', href: 'tel:+919080407702', text: '+91 9080407702' },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="social-icon" />,
      link: 'https://www.linkedin.com/in/aryalakshmi/',
      label: 'LinkedIn',
    },
    {
      icon: <Github className="social-icon" />,
      link: 'https://github.com/22CB006',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="minimal-footer">
      <div className="footer-gradient-bg">
        <div className="footer-border-top" />
        
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <Code2 className="logo-icon" />
            </a>
            <p className="footer-tagline">
              Building intelligent, scalable web applications that solve real-world problems.
            </p>
            <div className="footer-social-links">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <span className="footer-section-title">Quick Links</span>
            <div className="footer-links-list">
              {quickLinks.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="footer-link"
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <span className="footer-section-title">Contact</span>
            <div className="footer-links-list">
              {contactInfo.map(({ href, title, text }, i) => (
                <a
                  key={i}
                  className="footer-link footer-contact-link"
                  href={href}
                >
                  {title === 'Email' && <Mail className="footer-contact-icon" size={16} />}
                  {title === 'Phone' && <Phone className="footer-contact-icon" size={16} />}
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-border-bottom" />
        
        <div className="footer-copyright">
          <p>
            © {currentYear} <span className="copyright-name">ARYA LAKSHMI M</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
