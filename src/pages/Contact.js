import React, { useState } from 'react';
import SEO from '../components/SEO';
import { siteConfig } from '../data/config';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        return '';
      case 'email':
        if (!value.trim()) {
          return 'Email is required';
        }
        if (!validateEmail(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        }
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters long';
        }
        if (value.trim().length > 1000) {
          return 'Message must not exceed 1000 characters';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true
    });

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');

    if (!hasErrors) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTouched({
        name: false,
        email: false,
        message: false
      });
    }
  };

  const whatsappMessage = encodeURIComponent("Hi, I'd like to discuss a project with you.");
  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`;
  const mailtoLink = `mailto:${siteConfig.contact.email}`;

  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch to discuss projects, collaborations, or opportunities. Contact me via email, phone, WhatsApp, or the contact form."
        type="website"
      />
      <main className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href={mailtoLink}>{siteConfig.contact.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </div>
            </div>

            <div className="contact-actions">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-button whatsapp-button"
              >
                <span className="button-icon">💬</span>
                WhatsApp
              </a>
              
              <a 
                href={mailtoLink}
                className="contact-button email-button"
              >
                <span className="button-icon">✉️</span>
                Email Me
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'error' : ''}
                  placeholder="Your name"
                />
                {errors.name && touched.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && touched.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message && touched.message ? 'error' : ''}
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                />
                {errors.message && touched.message && (
                  <span className="error-message">{errors.message}</span>
                )}
                <span className="character-count">
                  {formData.message.length} / 1000 characters
                </span>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Contact;
