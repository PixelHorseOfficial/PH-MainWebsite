import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Headphones, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const ClientSupport = ({ setCurrentSection }) => {
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
    title: 'Client Support',
    subtitle: '24/7 Technical Assistance',
    description: 'Dedicated client support services offering round-the-clock technical assistance, troubleshooting, and customer success management to ensure seamless operations.',
    hero: 'https://images.pexels.com/photos/1595388/pexels-photo-1595388.jpeg', // Unique image: support team workspace
    color: '#32CD32',
    gradient: 'linear-gradient(135deg, #32CD32, #228B22)',
    features: [
      { icon: <Headphones />, title: '24/7 Support', description: 'Round-the-clock assistance for all technical issues' },
      { icon: <Clock />, title: 'Quick Response', description: 'Rapid resolution to minimize downtime' },
      { icon: <MessageSquare />, title: 'Multi-Channel Support', description: 'Support via phone, email, chat, and ticketing' },
      { icon: <TrendingUp />, title: 'Customer Success', description: 'Proactive guidance to maximize system value' }
    ],
    portfolio: [
      { title: 'Enterprise IT Support', category: 'Technical Support', image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg' }, // Unique image: IT support desk
      { title: 'Cloud Service Support', category: 'Cloud Assistance', image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg' }, // Unique image: cloud support
      { title: 'Software Troubleshooting', category: 'Application Support', image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg' } // Unique image: software troubleshooting
    ],
    process: [
      'Issue Identification & Ticketing',
      'Problem Analysis & Diagnosis',
      'Solution Implementation',
      'Follow-Up & Resolution Confirmation',
      'Continuous Support & Training'
    ],
    stats: { ticketsResolved: '10K+', clients: '500+', responseTime: '5min', satisfaction: '98%+' }
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
          <img src={serviceData.hero} alt={serviceData.title || 'Client Support'} className="hero-image" />
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
                    <h2>Client Support Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our client support services ensure your business runs smoothly with 24/7 technical assistance, rapid issue resolution, and dedicated customer success management.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Minimized downtime</li>
                      <li><CheckCircle className="check-icon" /> Multi-channel accessibility</li>
                      <li><CheckCircle className="check-icon" /> Proactive support</li>
                      <li><CheckCircle className="check-icon" /> High customer satisfaction</li>
                      <li><CheckCircle className="check-icon" /> Continuous training</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Client Support Features</h2>
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
                <h2>Our Client Support Projects</h2>
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
                <h2>Our Support Process</h2>
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
                <h2>Get Your Client Support Quote</h2>
                <ContactForm serviceType="Client Support" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSupport;