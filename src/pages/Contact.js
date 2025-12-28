import React from 'react';
import SEO from '../components/SEO';
import CloudWatchForm from '../components/ui/cloud-watch-form';
import './Contact.css';

function Contact() {
  const handleFormSubmit = (formData) => {
    // Form submission is handled by CloudWatchForm component
  };

  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch to discuss projects, collaborations, or opportunities. Contact me via email, phone, WhatsApp, or the contact form."
        type="website"
      />
      <main className="contact-page">
        <div className="contact-container-single">
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
          </div>

          <CloudWatchForm onSubmit={handleFormSubmit} />
        </div>
      </main>
    </>
  );
}

export default Contact;
