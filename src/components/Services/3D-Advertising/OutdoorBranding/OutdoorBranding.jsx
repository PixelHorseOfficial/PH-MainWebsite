import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, MapPin, Truck, Building, Sun } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const OutdoorBranding = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setIsVisible(true);
    } catch (err) {
      console.error('Error in useEffect:', err);
      setError('Failed to initialize component');
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation values
  const scale = 1 + scrollY * 0.0005;
  const rotateX = scrollY * 0.05;
  const opacity = Math.max(1 - scrollY * 0.001, 0.4);

  if (typeof setCurrentSection !== 'function') {
    console.warn('setCurrentSection is not a function. Ensure the prop is passed correctly.');
  }

  const serviceData = {
    title: 'Outdoor OOH Branding',
    subtitle: 'Large-Scale Visual Impact',
    description: 'Deployment of 3D animated visuals on hoardings, unipoles, transit media, and building wraps that command attention and create lasting brand impressions.',
    hero: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Building />, title: 'Building Wraps', description: 'Massive building-scale 3D visual installations' },
      { icon: <Truck />, title: 'Transit Media', description: 'Dynamic advertising on buses, trains, and transport hubs' },
      { icon: <MapPin />, title: 'Unipole Displays', description: 'High-impact roadside advertising with 3D effects' },
      { icon: <Sun />, title: 'Weather Resistant', description: 'Durable installations designed for all weather conditions' }
    ],
    portfolio: [
      { title: 'City Center Billboard', category: 'Unipole Display', image: 'https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg' },
      { title: 'Metro Station Branding', category: 'Transit Media', image: 'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg' },
      { title: 'Corporate Building Wrap', category: 'Building Installation', image: 'https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg' }
    ],
    process: [
      'Location Analysis & Permits',
      'Creative Design & 3D Modeling',
      'Material Selection & Production',
      'Professional Installation',
      'Maintenance & Performance Tracking'
    ],
    stats: { installations: '50+', cities: '25+', satisfaction: '97%', visibility: '5M+' }
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

        {/* Background Image with Scroll Effect */}
        <div
          ref={heroRef}
          className="hero-background"
          style={{
            transform: `scale(${scale}) rotateX(${rotateX}deg)`,
            opacity: opacity,
            transition: "transform 0.1s linear"
          }}
        >
          <img
            src={serviceData.hero}
            alt={serviceData.title || 'Outdoor OOH Branding'}
            className="hero-image"
            style={{ opacity: 0.4 }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => navigate('/3d-advertising')}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to 3D Advertising</span>
          </button>

          <div className="hero-text">
            <h1 className="hero-title force-solid">{serviceData.title}</h1>
            <p className="hero-subtitle force-solid">{serviceData.subtitle}</p>
            <p className="hero-description">{serviceData.description}</p>

            {/* <div className="hero-stats">
              {Object.entries(serviceData.stats || {}).map(([key, value]) => (
                <div key={key} className="hero-stat">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div> */}

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
                    <h2>Outdoor OOH Branding Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Dominate the outdoor advertising landscape with our large-scale 3D installations.
                      From towering building wraps to dynamic transit media, we create outdoor advertising
                      that stops traffic and starts conversations.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Maximum brand visibility</li>
                      <li><CheckCircle className="check-icon" /> High-impact visual presence</li>
                      <li><CheckCircle className="check-icon" /> Weather-resistant materials</li>
                      <li><CheckCircle className="check-icon" /> Strategic location placement</li>
                      <li><CheckCircle className="check-icon" /> Long-term brand exposure</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Outdoor Branding Features</h2>
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
                <h2>Our Outdoor Branding Projects</h2>
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
                <h2>Our Installation Process</h2>
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
                <h2>Get Your Outdoor Branding Quote</h2>
                <ContactForm serviceType="Outdoor OOH Branding" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutdoorBranding;