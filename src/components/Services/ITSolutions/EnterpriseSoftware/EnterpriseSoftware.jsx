import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Code, Server, Database } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const EnterpriseSoftware = ({ setCurrentSection }) => {
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
    title: 'Enterprise Software',
    subtitle: 'Scalable Solutions for Business Growth',
    description: 'Custom enterprise software development to streamline operations, enhance productivity, and drive digital transformation for large-scale businesses.',
    hero: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg', // Unique image: coding workspace
    color: '#1E90FF',
    gradient: 'linear-gradient(135deg, #1E90FF, #4682B4)',
    features: [
      { icon: <Code />, title: 'Custom Development', description: 'Tailored software solutions to meet unique business needs' },
      { icon: <Server />, title: 'Scalable Architecture', description: 'Robust systems designed for growth and high performance' },
      { icon: <Database />, title: 'Data Integration', description: 'Seamless integration with existing databases and systems' },
      { icon: <TrendingUp />, title: 'Performance Optimization', description: 'Optimized workflows for maximum efficiency' }
    ],
    portfolio: [
      { title: 'ERP System Implementation', category: 'Business Management', image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg' }, // Unique image: business dashboard
      { title: 'Supply Chain Software', category: 'Logistics', image: 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg' }, // Unique image: logistics tech
      { title: 'CRM Customization', category: 'Customer Management', image: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg' } // Unique image: CRM interface
    ],
    process: [
      'Requirement Analysis & Planning',
      'System Design & Prototyping',
      'Development & Testing',
      'Integration & Deployment',
      'Maintenance & Support'
    ],
    stats: { projects: '150+', clients: '100+', uptime: '99.9%', satisfaction: '95%+' }
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
          <img src={serviceData.hero} alt={serviceData.title || 'Enterprise Software'} className="hero-image" />
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
                    <h2>Enterprise Software Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our enterprise software solutions empower businesses with custom-built applications that streamline operations, enhance scalability, and drive digital transformation.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Improved operational efficiency</li>
                      <li><CheckCircle className="check-icon" /> Scalable and secure systems</li>
                      <li><CheckCircle className="check-icon" /> Seamless system integration</li>
                      <li><CheckCircle className="check-icon" /> Enhanced data insights</li>
                      <li><CheckCircle className="check-icon" /> Long-term support</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Enterprise Software Features</h2>
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
                <h2>Our Enterprise Software Projects</h2>
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
                <h2>Get Your Enterprise Software Quote</h2>
                <ContactForm serviceType="Enterprise Software" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSoftware;