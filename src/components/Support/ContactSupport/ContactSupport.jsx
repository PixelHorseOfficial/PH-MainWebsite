import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, MessageCircle, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactSupport.css';
import { useNavigate } from 'react-router-dom';

const ContactSupport = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    priority: 'medium',
    category: '',
    message: ''
  });
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Contact Support - Pixel Horse';
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scale = 1 + scrollY * 0.0005;
const rotateX = scrollY * 0.05;
const opacity = Math.max(1 - scrollY * 0.001, 0.4);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        priority: 'medium',
        category: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const supportCategories = [
    'Technical Issue',
    'Billing Question',
    'Service Request',
    'Feature Request',
    'General Inquiry',
    'Bug Report',
    'Account Access',
    'Other'
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low', description: 'General questions, non-urgent' },
    { value: 'medium', label: 'Medium', description: 'Standard support request' },
    { value: 'high', label: 'High', description: 'Urgent issue affecting work' },
    { value: 'critical', label: 'Critical', description: 'System down, blocking work' }
  ];

  const supportChannels = [
    {
      icon: <Mail />,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'admin@pixelhorse.in',
      responseTime: '4-6 hours',
      availability: '24/7'
    },
    {
      icon: <Phone />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+91 9949562299',
      responseTime: 'Immediate',
      availability: 'Mon-Fri 9AM-6PM IST'
    },
    {
      icon: <MessageCircle />,
      title: 'WhatsApp Support',
      description: 'Chat with our team on WhatsApp',
      contact: '+91 8019900527',
      responseTime: '< 5 minutes',
      availability: 'Mon-Fri 9AM-6PM IST'
    }
  ];

  return (
    <div className={`contact-support-page ${isVisible ? 'visible' : ''}`}>
      
      <div className="support-hero">
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Contact Support"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
           className="back-button"
            onClick={() => navigate('/homepage')}
           >
           <ArrowLeft className="back-icon" />
           <span>Back to Home</span>
          </button>

          <div className="hero-text">
            <h1 className="hero-title">Contact Support</h1>
            <p className="hero-subtitle">We're here to help you succeed</p>
            <p className="hero-description">
              Get expert support from our team. We're committed to resolving
              your issues quickly and efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="support-content">
        <div className="content-container">

          <div className="support-channels-section">
            <h2>Choose Your Support Channel</h2>

            <div className="channels-grid">
              {supportChannels.map((channel, index) => (
                <div key={index} className="channel-card">
                  <div className="channel-icon">{channel.icon}</div>
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>

                  <div className="channel-details">
                    <div className="detail-item">
                      <strong>Contact:</strong> {channel.contact}
                    </div>

                    <div className="detail-item">
                      <strong>Response:</strong> {channel.responseTime}
                    </div>

                    <div className="detail-item">
                      <strong>Available:</strong> {channel.availability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="support-form-section">

            <div className="form-container">

              <div className="form-header">
                <h2>Submit a Support Request</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="support-form">

                <div className="form-row">

                  <div className="form-group">
                    <label className="form-label">Full Name *</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>

                    <input
                      type="email"
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
                    <label className="form-label">Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+91 9949562299"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Category *</label>

                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select category</option>

                      {supportCategories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>

                  </div>

                </div>


                <div className="form-group">
                  <label className="form-label">Subject *</label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Brief description of your issue"
                  />
                </div>


                <div className="form-group">

                  <label className="form-label">Priority Level</label>

                  <div className="priority-options">

                    {priorityLevels.map((priority) => (

                      <label key={priority.value} className="priority-option">

                        <input
                          type="radio"
                          name="priority"
                          value={priority.value}
                          checked={formData.priority === priority.value}
                          onChange={handleInputChange}
                          className="priority-radio"
                        />

                        <div className={`priority-card ${priority.value}`}>

                          <div className="priority-header">
                            <span className="priority-label">
                              {priority.label}
                            </span>

                            {priority.value === 'critical' && (
                              <AlertCircle className="priority-icon" />
                            )}
                          </div>

                          <p className="priority-description">
                            {priority.description}
                          </p>

                        </div>

                      </label>

                    ))}

                  </div>

                </div>


                <div className="form-group">

                  <label className="form-label">Message *</label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="form-textarea"
                    placeholder="Please describe your issue in detail."
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className={`form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
                  disabled={isSubmitting}
                >

                  <div className="submit-content">

                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Submitting Request...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="submit-icon" />
                        <span>Request Submitted Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="submit-icon" />
                        <span>Submit Support Request</span>
                      </>
                    )}

                  </div>

                </button>

              </form>

            </div>

          </div>


          <div className="support-info-section">

            <div className="info-grid">

              <div className="info-card">

                <Clock className="info-icon" />

                <h3>Response Times</h3>

                <ul>
                  <li><strong>Critical:</strong> Within 1 hour</li>
                  <li><strong>High:</strong> Within 4 hours</li>
                  <li><strong>Medium:</strong> Within 24 hours</li>
                  <li><strong>Low:</strong> Within 48 hours</li>
                </ul>

              </div>

              <div className="info-card">

                <MessageCircle className="info-icon" />

                <h3>Support Hours</h3>

                <ul>
                  <li><strong>Email:</strong> 24/7</li>
                  <li><strong>Phone:</strong> Mon-Fri 9AM-6PM IST</li>
                  <li><strong>WhatsApp:</strong> Mon-Fri 9AM-6PM IST</li>
                  <li><strong>Emergency:</strong> 24/7 for critical issues</li>
                </ul>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactSupport;