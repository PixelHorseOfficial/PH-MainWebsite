import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Smartphone, Cpu, Bot, Wifi } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';

const IoTSolutionsDetail = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceData = {
    title: 'IoT Solutions & Innovation',
    subtitle: 'Connected Technology Ecosystem',
    description: 'Integration of physical and digital experiences through smart device connectivity, AR/VR development, robotics, and wireless communication systems.',
    hero: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    color: '#008080',
    gradient: 'linear-gradient(135deg, #008080, #00FFFF)',
    features: [
      { icon: <Smartphone />, title: 'AR/VR Development', description: 'Immersive augmented and virtual reality applications' },
      { icon: <Cpu />, title: 'IoT Integration', description: 'Smart device connectivity and intelligent ecosystems' },
      { icon: <Bot />, title: 'Robotics Solutions', description: 'Automation solutions for various industries' },
      { icon: <Wifi />, title: 'Wireless Communication', description: 'Secure and reliable IoT communication networks' }
    ],
    portfolio: [
      { title: 'Smart Factory Solution', category: 'IoT Integration', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' },
      { title: 'VR Training Platform', category: 'AR/VR Development', image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg' },
      { title: 'Robotic Automation', category: 'Robotics', image: 'https://images.pexels.com/photos/8439086/pexels-photo-8439086.jpeg' }
    ],
    process: [
      'Requirements Analysis & System Design',
      'Hardware Selection & Integration',
      'Software Development & Testing',
      'Deployment & Network Setup',
      'Monitoring & Continuous Optimization'
    ],
    stats: { devices: '1000+', accuracy: '96%', efficiency: '300%', networks: '50+' }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Star /> },
    { id: 'features', label: 'Features', icon: <CheckCircle /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Award /> },
    { id: 'process', label: 'Process', icon: <TrendingUp /> },
    { id: 'contact', label: 'Get Quote', icon: <Users /> }
  ];

  return (
    <div className={`service-detail ${isVisible ? 'visible' : ''}`}>
      <div className="service-hero" style={{ '--service-color': serviceData.color, '--service-gradient': serviceData.gradient }}>
        <div className="hero-background">
          <img src={serviceData.hero} alt={serviceData.title} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <button 
            className="back-button"
            onClick={() => setCurrentSection('home')}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to Home</span>
          </button>
          
          <div className="hero-text">
            <h1 className="hero-title">{serviceData.title}</h1>
            <p className="hero-subtitle">{serviceData.subtitle}</p>
            <p className="hero-description">{serviceData.description}</p>
            
            <div className="hero-stats">
              {Object.entries(serviceData.stats).map(([key, value]) => (
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
                    <h2>IoT Solutions Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Transform your business with intelligent IoT solutions that connect the physical 
                      and digital worlds. Our comprehensive approach includes AR/VR development, smart 
                      device integration, robotics, and secure wireless communication networks.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 1000+ connected devices</li>
                      <li><CheckCircle className="check-icon" /> 96% system accuracy</li>
                      <li><CheckCircle className="check-icon" /> 300% efficiency improvement</li>
                      <li><CheckCircle className="check-icon" /> 50+ network deployments</li>
                      <li><CheckCircle className="check-icon" /> End-to-end IoT solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>IoT Solutions Features</h2>
                <div className="features-grid">
                  {serviceData.features.map((feature, index) => (
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
                <h2>Our IoT Solutions Portfolio</h2>
                <div className="portfolio-grid">
                  {serviceData.portfolio.map((item, index) => (
                    <div key={index} className="portfolio-item">
                      <div className="portfolio-image">
                        <img src={item.image} alt={item.title} />
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
                  {serviceData.process.map((step, index) => (
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
                <h2>Get Your IoT Solutions Quote</h2>
                <ContactForm serviceType="IoT Solutions & Innovation" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTSolutionsDetail;