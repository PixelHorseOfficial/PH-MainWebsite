import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Brain, Code, Database } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const AISystems = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsVisible(true);
    } catch (err) {
      console.error('Error in useEffect:', err);
      setError('Failed to initialize component');
    }
  }, []);

  // Validate setCurrentSection prop
  if (typeof setCurrentSection !== 'function') {
    console.warn('setCurrentSection is not a function. Ensure the prop is passed correctly.');
  }

  const serviceData = {
    title: 'AI Systems',
    subtitle: 'Intelligent Solutions for the Future',
    description: 'Advanced AI systems designed to automate processes, provide predictive analytics, and enhance decision-making for businesses across industries.',
    hero: 'https://julienflorkin.com/wp-content/uploads/2023/12/Expert-System-in-AI-1.webp', // Unique image: AI technology
    color: '#FF00FF',
    gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2)',
    features: [
      { icon: <Brain />, title: 'Machine Learning', description: 'AI models for predictive and adaptive learning' },
      { icon: <Code />, title: 'Custom AI Development', description: 'Tailored AI solutions for specific use cases' },
      { icon: <Database />, title: 'Data Processing', description: 'Efficient handling and analysis of large datasets' }, // Replaced Data with Database
      { icon: <TrendingUp />, title: 'Automation', description: 'Streamlined workflows with intelligent automation' }
    ],
    portfolio: [
      { title: 'AI Chatbot Deployment', category: 'Customer Support', image: 'https://images.pexels.com/photos/3183192/pexels-photo-3183192.jpeg' }, // Unique image: chatbot interface
      { title: 'Predictive Analytics Tool', category: 'Business Intelligence', image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg' }, // Unique image: analytics dashboard
      { title: 'AI-Driven Recommendation', category: 'E-Commerce', image: 'https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg' } // Unique image: e-commerce AI
    ],
    process: [
      'Requirement Analysis & Planning',
      'AI Model Design & Training',
      'Development & Testing',
      'Integration & Deployment',
      'Monitoring & Optimization'
    ],
    stats: { projects: '120+', clients: '80+', accuracy: '98%', satisfaction: '96%+' }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Star /> },
    { id: 'features', label: 'Features', icon: <CheckCircle /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Award /> },
    { id: 'process', label: 'Process', icon: <TrendingUp /> },
    { id: 'contact', label: 'Get Quote', icon: <Users /> }
  ];

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className={`service-detail ${isVisible ? 'visible' : ''}`}>
      <div className="service-hero" style={{ '--service-color': serviceData.color, '--service-gradient': serviceData.gradient }}>
        <div className="hero-background">
          <img src={serviceData.hero} alt={serviceData.title || 'AI Systems'} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => {
              if (typeof setCurrentSection === 'function') {
                setCurrentSection('it-solutions');
              } else {
                console.error('setCurrentSection is not a function');
              }
            }}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to IT Solutions</span>
          </button>

          <div className="hero-text">
            <h1 className="hero-title">{serviceData.title}</h1>
            <p className="hero-subtitle">{serviceData.subtitle}</p>
            <p className="hero-description">{serviceData.description}</p>

            <div className="hero-stats">
              {Object.entries(serviceData.stats || {}).map(([key, value]) => (
                <div key={key} className="hero-stat">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button className="action-button primary">
                <span>Get Started</span>
                <Zap className="button-icon" />
              </button>
              <button className="action-button secondary">
                <Play className="button-icon" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="service-content">
        <div className="content-container">
          <nav className="service-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ '--service-color': serviceData.color, '--service-gradient': serviceData.gradient }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <div className="overview-grid">
                  <div className="overview-text">
                    <h2>AI Systems Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our AI systems leverage cutting-edge technology to provide intelligent automation, predictive analytics, and data-driven insights, transforming how businesses operate.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Enhanced decision-making</li>
                      <li><CheckCircle className="check-icon" /> Automated workflows</li>
                      <li><CheckCircle className="check-icon" /> Real-time data analysis</li>
                      <li><CheckCircle className="check-icon" /> Scalable AI solutions</li>
                      <li><CheckCircle className="check-icon" /> Ongoing optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>AI Systems Features</h2>
                <div className="features-grid">
                  {(serviceData.features || []).map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="portfolio-content">
                <h2>Our AI Systems Projects</h2>
                <div className="portfolio-grid">
                  {(serviceData.portfolio || []).map((item, index) => (
                    <div key={index} className="portfolio-item">
                      <div className="portfolio-image">
                        <img src={item.image} alt={item.title || 'Portfolio Item'} />
                        <div className="portfolio-overlay">
                          <Play className="play-icon" />
                        </div>
                      </div>
                      <div className="portfolio-info">
                        <h3>{item.title}</h3>
                        <span className="portfolio-category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="process-content">
                <h2>Our Development Process</h2>
                <div className="process-timeline">
                  {(serviceData.process || []).map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h3>{step}</h3>
                        <div className="step-line"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="contact-content">
                <h2>Get Your AI Systems Quote</h2>
                <ContactForm serviceType="AI Systems" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISystems;