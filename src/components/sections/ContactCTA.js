import React from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { siteConfig } from '../../data/config';
import Button from '../common/Button';
import './ContactCTA.css';

const ContactCTA = () => {
  const navigate = useNavigate();
  const { contact, name, title } = siteConfig;
  
  // Format WhatsApp link with pre-filled message
  const whatsappMessage = encodeURIComponent("Hi! I'd like to discuss a project with you.");
  const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`;
  
  // Format mailto link
  const mailtoLink = `mailto:${contact.email}`;

  return (
    <div className="contact-cta-container">
      {/* Section Header */}
      <div className="contact-header">
        <div className="contact-badge">
          <span>Get In Touch</span>
        </div>
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-subtitle">
          Ready to bring your ideas to life
        </p>
      </div>

      {/* Description Text */}
      <div className="contact-description">
        <p>
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </div>

      {/* Neomorphic Contact Card */}
      <div className="contact-card-wrapper">
        <div className="contact-card">
          {/* Status Indicator */}
          <div className="contact-status">
            <div className="status-dot"></div>
            <div className="status-pulse"></div>
          </div>

          {/* Profile Section */}
          <div className="contact-profile">
            <div className="profile-avatar">
              <img 
                src="/Passport size photo.jpeg" 
                alt={name}
                className="avatar-image"
              />
              <div className="avatar-ring"></div>
            </div>
          </div>

          {/* Info Section */}
          <div className="contact-info">
            <h3 className="contact-name">{name}</h3>
            <p className="contact-role">{title}</p>
            <p className="contact-availability">Available for projects</p>
          </div>

          {/* Action Buttons */}
          <div className="contact-actions">
            <a 
              href={mailtoLink}
              className="contact-action-btn magnetize-btn"
            >
              <Mail className="action-icon" />
              <span className="action-text">Email Me</span>
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn magnetize-btn"
            >
              <MessageCircle className="action-icon" />
              <span className="action-text">WhatsApp Me</span>
            </a>
          </div>

          {/* Animated Border */}
          <div className="contact-card-border"></div>
        </div>
      </div>

      {/* Contact Form Button */}
      <div className="contact-form-cta">
        <p className="form-cta-text">Prefer a detailed message?</p>
        <Button
          variant="gradient"
          size="small"
          onClick={() => navigate('/contact')}
        >
          <Send className="btn-icon" size={14} />
          <span style={{ marginLeft: '0.25rem' }}>Fill Contact Form</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactCTA;
