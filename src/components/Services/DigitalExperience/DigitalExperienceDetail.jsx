import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Brain, Cloud, Cpu, BarChart } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';

const DigitalExperienceDetail = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceData = {
    title: 'Digital Experience & SaaS',
    subtitle: 'AI-Powered Digital Platforms',
    description: 'Next-generation digital tools and platforms powered by Pixel Horse AI and scalable SaaS solutions for various industries.',
    hero: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)',
    features: [
      { icon: <Brain />, title: 'Pixel Horse AI', description: 'Proprietary AI-driven tools for business optimization and personalization' },
      { icon: <Cloud />, title: 'SaaS Development', description: 'Scalable web-based applications for various industries' },
      { icon: <Cpu />, title: 'Custom Platforms', description: 'Tailored digital platforms for specific business needs' },
      { icon: <BarChart />, title: 'Business Intelligence', description: 'Data-driven insights and analytics dashboards' }
    ],
    portfolio: [
      { title: 'AI-Powered CRM', category: 'SaaS Platform', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg' },
      { title: 'Healthcare Management', category: 'Custom Platform', image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg' },
      { title: 'Education Portal', category: 'Digital Experience', image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg' }
    ],
    process: [
      'Business Requirements Analysis',
      'AI Model Development & Training',
      'Platform Architecture Design',
      'Development & Integration',
      'Deployment & Continuous Learning'
    ],
    stats: { platforms: '50+', users: '100K+', satisfaction: '97%', industries: '15+' }
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
                    <h2>Digital Experience Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Harness the power of artificial intelligence and cloud computing to create 
                      exceptional digital experiences. Our Pixel Horse AI platform and custom 
                      SaaS solutions drive innovation across industries.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 50+ platforms developed</li>
                      <li><CheckCircle className="check-icon" /> 100K+ active users</li>
                      <li><CheckCircle className="check-icon" /> 97% satisfaction rate</li>
                      <li><CheckCircle className="check-icon" /> 15+ industries served</li>
                      <li><CheckCircle className="check-icon" /> AI-powered solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Digital Experience Features</h2>
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
                <h2>Our Digital Platforms</h2>
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
                <h2>Get Your Digital Experience Quote</h2>
                <ContactForm serviceType="Digital Experience & SaaS" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalExperienceDetail;