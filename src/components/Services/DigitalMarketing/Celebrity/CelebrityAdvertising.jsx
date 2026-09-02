import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Sparkles, Camera, Heart } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const CelebrityAdvertising = ({ setCurrentSection }) => {
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
    title: 'Celebrity Advertising',
    subtitle: 'Amplify Your Brand with Star Power',
    description: 'Leverage celebrity endorsements and influencer partnerships to boost brand visibility and connect with target audiences effectively.',
    hero: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg', // Unique image: celebrity event
    color: '#800080',
    gradient: 'linear-gradient(135deg, #800080, #4B0082)',
    features: [
      { icon: <Sparkles />, title: 'Celebrity Partnerships', description: 'Collaborate with celebrities to enhance brand credibility' },
      { icon: <Camera />, title: 'Campaign Production', description: 'High-quality video and photo shoots featuring celebrities' },
      { icon: <Heart />, title: 'Audience Engagement', description: 'Drive fan engagement through authentic endorsements' },
      { icon: <TrendingUp />, title: 'Performance Tracking', description: 'Measure campaign impact with detailed analytics' }
    ],
    portfolio: [
      { title: 'Celebrity Product Launch', category: 'Brand Campaign', image: 'https://images.pexels.com/photos/274824/pexels-photo-274824.jpeg' }, // Unique image: product launch
      { title: 'Influencer Social Media Campaign', category: 'Social Media', image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg' }, // Unique image: social media influencer
      { title: 'Event Sponsorship with Celebrity', category: 'Event Marketing', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg' } // Unique image: event
    ],
    process: [
      'Celebrity Selection & Negotiation',
      'Campaign Strategy & Planning',
      'Content Creation & Production',
      'Multi-Platform Distribution',
      'Performance Monitoring & Reporting'
    ],
    stats: { campaigns: '50+', reach: '10M+', endorsements: '30+', engagement: '25%+' }
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
          <img src={serviceData.hero} alt={serviceData.title || 'Celebrity Advertising'} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => {
              if (typeof setCurrentSection === 'function') {
                setCurrentSection('digital-marketing');
              } else {
                console.error('setCurrentSection is not a function');
              }
            }}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to Digital Marketing</span>
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
                    <h2>Celebrity Advertising Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our celebrity advertising services harness the power of influential personalities to elevate your brand, create authentic connections, and drive massive engagement with your target audience.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Enhanced brand credibility</li>
                      <li><CheckCircle className="check-icon" /> Massive audience reach</li>
                      <li><CheckCircle className="check-icon" /> Stronger emotional connection</li>
                      <li><CheckCircle className="check-icon" /> Increased social engagement</li>
                      <li><CheckCircle className="check-icon" /> High-impact campaigns</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Celebrity Advertising Features</h2>
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
                <h2>Our Celebrity Advertising Projects</h2>
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
                <h2>Our Celebrity Advertising Process</h2>
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
                <h2>Get Your Celebrity Advertising Quote</h2>
                <ContactForm serviceType="Celebrity Advertising" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrityAdvertising;