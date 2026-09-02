import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Shield, Lock, AlertTriangle } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const CyberSecurity = ({ setCurrentSection }) => {
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
    title: 'Cyber Security',
    subtitle: 'Protecting Your Digital Assets',
    description: 'Comprehensive cyber security solutions to safeguard your business from threats, ensuring data integrity, compliance, and peace of mind.',
    hero: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg', // Unique image: cyber security concept
    color: '#FF4500',
    gradient: 'linear-gradient(135deg, #FF4500, #B22222)',
    features: [
      { icon: <Shield />, title: 'Threat Detection', description: 'Real-time monitoring to identify and mitigate threats' },
      { icon: <Lock />, title: 'Data Encryption', description: 'Advanced encryption to protect sensitive information' },
      { icon: <AlertTriangle />, title: 'Incident Response', description: 'Rapid response to security breaches and incidents' },
      { icon: <TrendingUp />, title: 'Compliance Management', description: 'Ensure compliance with industry standards' }
    ],
    portfolio: [
      { title: 'Network Security Audit', category: 'Security Assessment', image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg' }, // Unique image: network security
      { title: 'Cloud Security Solution', category: 'Cloud Protection', image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg' }, // Unique image: cloud tech
      { title: 'Endpoint Protection', category: 'Device Security', image: 'https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg' } // Unique image: endpoint security
    ],
    process: [
      'Security Assessment & Planning',
      'Implementation of Security Measures',
      'Monitoring & Threat Detection',
      'Incident Response & Recovery',
      'Ongoing Support & Updates'
    ],
    stats: { clients: '200+', threatsBlocked: '1M+', uptime: '99.9%', compliance: '100%' }
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
          <img src={serviceData.hero} alt={serviceData.title || 'Cyber Security'} className="hero-image" />
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
                    <h2>Cyber Security Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our cyber security services provide robust protection against digital threats, ensuring your business remains secure, compliant, and operational.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Enhanced data protection</li>
                      <li><CheckCircle className="check-icon" /> Reduced risk of breaches</li>
                      <li><CheckCircle className="check-icon" /> Regulatory compliance</li>
                      <li><CheckCircle className="check-icon" /> Real-time threat monitoring</li>
                      <li><CheckCircle className="check-icon" /> Rapid incident response</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Cyber Security Features</h2>
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
                <h2>Our Cyber Security Projects</h2>
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
                <h2>Our Security Process</h2>
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
                <h2>Get Your Cyber Security Quote</h2>
                <ContactForm serviceType="Cyber Security" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;