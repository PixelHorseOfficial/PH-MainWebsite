import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Server, Shield, Headphones } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';

const ITSolutionsDetail = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceData = {
    title: 'IT Solutions & Enterprise',
    subtitle: 'Technology Excellence Delivered',
    description: 'High-impact enterprise technology services to streamline operations, ensure security, and foster innovation through comprehensive IT solutions.',
    hero: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    color: '#FF6600',
    gradient: 'linear-gradient(135deg, #FF6600, #FF0000)',
    features: [
      { icon: <Server />, title: 'Enterprise Software', description: 'LMS, ERP, CRM, HRM, and HIT solutions for business optimization' },
      { icon: <Shield />, title: 'Cyber Security', description: 'Advanced threat protection and compliance solutions' },
      { icon: <Headphones />, title: 'Client Support', description: 'Ongoing maintenance and technical support services' },
      { icon: <TrendingUp />, title: 'Cloud Infrastructure', description: 'Scalable cloud solutions and DevOps services' }
    ],
    portfolio: [
      { title: 'Enterprise ERP System', category: 'Business Software', image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg' },
      { title: 'Healthcare Management', category: 'HIT Solution', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' },
      { title: 'Cloud Infrastructure', category: 'DevOps Project', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg' }
    ],
    process: [
      'Requirements Analysis & Planning',
      'Architecture Design & Development',
      'Quality Assurance & Testing',
      'Deployment & Go-Live',
      'Ongoing Support & Maintenance'
    ],
    stats: { projects: '50+', uptime: '99.9%', clients: '10+', years: '1+' }
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
                    <h2>IT Solutions Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our comprehensive IT solutions empower businesses with cutting-edge technology, 
                      robust security, and reliable support. From enterprise software to cloud infrastructure, 
                      we deliver solutions that drive digital transformation and operational excellence.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 50+ successful projects</li>
                      <li><CheckCircle className="check-icon" /> 99.9% system uptime</li>
                      <li><CheckCircle className="check-icon" /> 10+ satisfied clients</li>
                      <li><CheckCircle className="check-icon" /> 1+ years experience</li>
                      <li><CheckCircle className="check-icon" /> 24/7 technical support</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>IT Solutions Features</h2>
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
                <h2>Our IT Solutions Portfolio</h2>
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
                <h2>Get Your IT Solutions Quote</h2>
                <ContactForm serviceType="IT Solutions & Enterprise" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionsDetail;