import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { siteConfig } from '../../data/config';
import './ContactCTA.css';

const ContactCTA = () => {
  const { contact } = siteConfig;
  
  // Format WhatsApp link with pre-filled message
  const whatsappMessage = encodeURIComponent("Hi! I'd like to discuss a project with you.");
  const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`;
  
  // Format mailto link
  const mailtoLink = `mailto:${contact.email}`;

  return (
    <Section 
      title="Let's Work Together" 
      subtitle="Ready to start your next project?"
      className="contact-cta"
    >
      <div className="contact-cta__content">
        <p className="contact-cta__text">
          I'm always interested in hearing about new projects and opportunities. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="contact-cta__info">
          <div className="contact-cta__info-item">
            <span className="contact-cta__label">Email:</span>
            <a href={mailtoLink} className="contact-cta__link">{contact.email}</a>
          </div>
          <div className="contact-cta__info-item">
            <span className="contact-cta__label">Phone:</span>
            <span className="contact-cta__value">{contact.phone}</span>
          </div>
        </div>

        <div className="contact-cta__actions">
          <Button 
            variant="primary" 
            size="lg" 
            href={whatsappLink}
          >
            WhatsApp
          </Button>
          <Button 
            variant="primary" 
            size="lg" 
            href={mailtoLink}
          >
            Send Email
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            href="/contact"
          >
            Contact Form
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactCTA;
