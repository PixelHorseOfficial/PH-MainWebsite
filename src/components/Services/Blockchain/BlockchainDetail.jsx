import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Shield, Coins, Lock, Globe } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';

const BlockchainDetail = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceData = {
    title: 'Blockchain Development',
    subtitle: 'Decentralized Innovation Solutions',
    description: 'Cutting-edge decentralized solutions including Pixel Horse Coin, smart contracts, and blockchain applications for transparency, traceability, and security.',
    hero: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    color: '#4169E1',
    gradient: 'linear-gradient(135deg, #4169E1, #0000FF)',
    features: [
      { icon: <Coins />, title: 'Pixel Horse Coin', description: 'Native digital asset for decentralized applications and transactions' },
      { icon: <Lock />, title: 'Smart Contracts', description: 'Automated, secure, and transparent contract execution' },
      { icon: <Shield />, title: 'Security Solutions', description: 'Advanced cryptographic security and data protection' },
      { icon: <Globe />, title: 'Blockchain Apps', description: 'Decentralized applications for various industries' }
    ],
    portfolio: [
      { title: 'Pixel Horse Coin', category: 'Cryptocurrency', image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg' },
      { title: 'Supply Chain DApp', category: 'Blockchain App', image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg' },
      { title: 'NFT Marketplace', category: 'Smart Contract', image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg' }
    ],
    process: [
      'Blockchain Architecture Design',
      'Smart Contract Development',
      'Security Audit & Testing',
      'Network Deployment',
      'Ongoing Maintenance & Updates'
    ],
    stats: { contracts: '100+', transactions: '1M+', security: '100%', networks: '5+' }
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
                    <h2>Blockchain Development Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Embrace the future of decentralized technology with our comprehensive blockchain 
                      solutions. From our native Pixel Horse Coin to custom smart contracts and 
                      decentralized applications, we build secure, transparent, and scalable blockchain solutions.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 100+ smart contracts deployed</li>
                      <li><CheckCircle className="check-icon" /> 1M+ secure transactions</li>
                      <li><CheckCircle className="check-icon" /> 100% security record</li>
                      <li><CheckCircle className="check-icon" /> 5+ blockchain networks</li>
                      <li><CheckCircle className="check-icon" /> Native cryptocurrency</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Blockchain Development Features</h2>
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
                <h2>Our Blockchain Projects</h2>
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
                <h2>Get Your Blockchain Development Quote</h2>
                <ContactForm serviceType="Blockchain Development" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDetail;