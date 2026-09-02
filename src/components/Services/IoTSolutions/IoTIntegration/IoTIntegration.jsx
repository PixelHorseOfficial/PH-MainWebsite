import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Server, Globe, Link } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const IoTIntegration = ({ setCurrentSection }) => {
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
    title: 'IoT Integration',
    subtitle: 'Connected Ecosystems',
    description: 'Seamless integration of IoT devices and systems to create intelligent, connected ecosystems for smart homes, industries, and cities.',
    hero: 'https://techeela.com/wp-content/uploads/2023/08/IoT-Integration-market-projections.jpg', // IoT devices in a connected network
    color: '#20B2AA',
    gradient: 'linear-gradient(135deg, #20B2AA, #008B8B)',
    features: [
      { icon: <Link />, title: 'Device Connectivity', description: 'Seamless integration of IoT devices with existing systems' },
      { icon: <Server />, title: 'Data Management', description: 'Efficient handling and analysis of IoT data' },
      { icon: <Globe />, title: 'Scalable Solutions', description: 'Flexible systems for small to large-scale deployments' },
      { icon: <TrendingUp />, title: 'Real-Time Insights', description: 'Actionable insights from IoT data streams' }
    ],
    portfolio: [
      { title: 'Smart Home Integration', category: 'Home Automation', image: 'https://images.pexels.com/photos/5083493/pexels-photo-5083493.jpeg' }, // Smart home IoT setup
      { title: 'Industrial IoT System', category: 'Industry 4.0', image: 'https://images.pexels.com/photos/5083492/pexels-photo-5083492.jpeg' }, // Industrial IoT machinery
      { title: 'Smart City Network', category: 'Urban Solutions', image: 'https://images.pexels.com/photos/5083494/pexels-photo-5083494.jpeg' } // Smart city IoT infrastructure
    ],
    process: [
      'System Analysis & Planning',
      'Device Selection & Configuration',
      'Integration & Testing',
      'Data Pipeline Setup',
      'Maintenance & Optimization'
    ],
    stats: { devices: '10K+', deployments: '50+', uptime: '99.8%', satisfaction: '97%' }
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
          <img src={serviceData.hero} alt={serviceData.title || 'IoT Integration'} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => {
              if (typeof setCurrentSection === 'function') {
                setCurrentSection('iot-solutions');
              } else {
                console.error('setCurrentSection is not a function');
              }
            }}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to IoT Solutions</span>
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
                <span System: ap className="button-icon" />
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
                    <h2>IoT Integration Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our IoT integration services connect devices, systems, and data to create intelligent ecosystems that drive efficiency and innovation across industries.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Enhanced operational efficiency</li>
                      <li><CheckCircle className="check-icon" /> Real-time data insights</li>
                      <li><CheckCircle className="check-icon" /> Scalable IoT deployments</li>
                      <li><CheckCircle className="check-icon" /> Seamless system integration</li>
                      <li><CheckCircle className="check-icon" /> Secure data management</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>IoT Integration Features</h2>
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
                <h2>Our IoT Integration Projects</h2>
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
                <h2>Our Integration Process</h2>
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
                <h2>Get Your IoT Integration Quote</h2>
                <ContactForm serviceType="IoT Integration" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTIntegration;