import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Cpu, Wrench } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const Robotics = ({ setCurrentSection }) => {
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
    title: 'Robotics',
    subtitle: 'Intelligent Automation Solutions',
    description: 'Advanced robotics solutions for automation, manufacturing, and logistics, leveraging AI and IoT for intelligent and efficient operations.',
    hero: 'https://i0.wp.com/technode.com/wp-content/uploads/2023/11/robots-scaled.jpg?fit=2000%2C1122&ssl=1', // Robotic arm in action
    color: '#FF69B4',
    gradient: 'linear-gradient(135deg, #FF69B4, #C71585)',
    features: [
      { icon: <Cpu />, title: 'AI-Driven Automation', description: 'Intelligent robotics powered by artificial intelligence' },
      { icon: <Wrench />, title: 'Custom Robotics', description: 'Tailored robotic solutions for specific industries' },
      { icon: <TrendingUp />, title: 'IoT Integration', description: 'Seamless connectivity with IoT ecosystems' },
      { icon: <Zap />, title: 'High Efficiency', description: 'Optimized performance for maximum productivity' }
    ],
    portfolio: [
      { title: 'Manufacturing Robot', category: 'Industrial Automation', image: 'https://images.pexels.com/photos/5083496/pexels-photo-5083496.jpeg' }, // Manufacturing robotic system
      { title: 'Logistics Automation', category: 'Warehouse Solutions', image: 'https://images.pexels.com/photos/5083497/pexels-photo-5083497.jpeg' }, // Logistics robot in warehouse
      { title: 'Service Robot Deployment', category: 'Service Industry', image: 'https://images.pexels.com/photos/5083498/pexels-photo-5083498.jpeg' } // Service robot in action
    ],
    process: [
      'Requirement Analysis & Design',
      'Robotic System Development',
      'AI & IoT Integration',
      'Testing & Calibration',
      'Deployment & Maintenance'
    ],
    stats: { robotsDeployed: '10+', industries: '5+', efficiency: '90%+', satisfaction: '95%' }
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
          <img src={serviceData.hero} alt={serviceData.title || 'Robotics'} className="hero-image" />
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
                    <h2>Robotics Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our robotics solutions leverage AI and IoT to deliver intelligent automation for manufacturing, logistics, and service industries, boosting efficiency and innovation.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Increased productivity</li>
                      <li><CheckCircle className="check-icon" /> Precision automation</li>
                      <li><CheckCircle className="check-icon" /> Seamless IoT integration</li>
                      <li><CheckCircle className="check-icon" /> Customizable solutions</li>
                      <li><CheckCircle className="check-icon" /> Reliable performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Robotics Features</h2>
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
                <h2>Our Robotics Projects</h2>
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
                <h2>Our Robotics Process</h2>
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
                <h2>Get Your Robotics Quote</h2>
                <ContactForm serviceType="Robotics" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robotics;