import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, User, Mail, Building, MessageCircle, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = ({ serviceType = 'General Inquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: serviceType,
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: serviceType,
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const budgetOptions = [
    'Under ₹2,00,000',
    '₹2,00,000 - ₹6,00,000',
    '₹6,00,000 - ₹20,00,000',
    '₹20,00,000 - ₹40,00,000',
    'Over ₹40,00,000'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months'
  ];

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h3 className="form-title">Get Your Custom Quote</h3>
        <p className="form-description">
          Tell us about your project and we'll provide a detailed proposal within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <User className="label-icon" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <Mail className="label-icon" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              <Phone className="label-icon" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="+91 99495-62299"
            />
          </div>
          <div className="form-group">
            <label htmlFor="company" className="form-label">
              <Building className="label-icon" />
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="budget" className="form-label">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select budget range</option>
              {budgetOptions.map((budget, index) => (
                <option key={index} value={budget}>{budget}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="timeline" className="form-label">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((timeline, index) => (
                <option key={index} value={timeline}>{timeline}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="service" className="form-label">
            Service Type
          </label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="form-input"
            readOnly
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="message" className="form-label">
            <MessageCircle className="label-icon" />
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="6"
            className="form-textarea"
            placeholder="Tell us about your project requirements, goals, and any specific needs..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={`form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`}
          disabled={isSubmitting}
        >
          <div className="submit-content">
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                <span>Sending Request...</span>
              </>
            ) : submitStatus === 'success' ? (
              <>
                <CheckCircle className="submit-icon" />
                <span>Request Sent Successfully!</span>
              </>
            ) : submitStatus === 'error' ? (
              <>
                <span>Error Sending Request!</span>
              </>
            ) : (
              <>
                <Send className="submit-icon" />
                <span>Get Custom Quote</span>
                <ArrowRight className="submit-arrow" />
              </>
            )}
          </div>
        </button>
      </form>

      <div className="contact-info-cards">
        <div className="info-card">
          <Mail className="info-icon" />
          <div className="info-content">
            <h4>Email Us</h4>
            <p>admin@pixelhorse.in</p>
            <p>Send us an email anytime</p>
          </div>
        </div>
        <div className="info-card">
          <Phone className="info-icon" />
          <div className="info-content">
            <h4>Call Us</h4>
            <p>+91 99495 62299</p>
            <p>Mon-Fri from 10am to 6pm IST</p>
          </div>
        </div>
        <div className="info-card">
          <MapPin className="info-icon" />
          <div className="info-content">
            <h4>Visit Us</h4>
            <p>3-5-1094/14/1, 4th Floor, Kammalamma Nilayam,</p>
            <p>Sri Venkateshwara Colony, Street no. 1, Narayanaguda,</p>
            <p>Hyderabad, 500029</p>
            <p>Come visit our office</p>
          </div>
        </div>
      </div>

      <div className="working-hours">
        <h4>Working Hours</h4>
        <p>Mon-Fri: 10AM - 6PM IST</p>
        <p>Weekend consultations available</p>
      </div>
    </div>
  );
};

export default ContactForm;