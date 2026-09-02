import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Monitor, Layers, Palette, Eye } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const DigitalStoreBranding = ({ setCurrentSection }) => {
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
    title: 'Digital Store Branding',
    subtitle: 'Immersive Storefront Experiences',
    description: 'Creation of immersive and dynamic storefront displays using 3D visuals, LED walls, and motion graphics that transform retail spaces into captivating brand experiences.',
    hero: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Monitor />, title: 'LED Wall Integration', description: 'Seamless integration with LED walls and digital displays' },
      { icon: <Layers />, title: 'Motion Graphics', description: 'Dynamic animations that bring your brand story to life' },
      { icon: <Eye />, title: 'Interactive Displays', description: 'Touch-enabled and gesture-controlled brand interactions' },
      { icon: <Palette />, title: 'Brand Storytelling', description: 'Compelling visual narratives that connect with customers' }
    ],
    portfolio: [
      { title: 'Luxury Fashion Store', category: 'Retail Branding', image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg' },
      { title: 'Tech Showroom Display', category: 'Interactive Experience', image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg' },
      { title: 'Mall Entrance Branding', category: 'Large Format Display', image: 'https://images.pexels.com/photos/271168/pexels-photo-271168.jpeg' }
    ],
    process: [
      'Store Analysis & Brand Strategy',
      'Creative Concept Development',
      '3D Design & Motion Graphics Creation',
      'Technical Integration & Installation',
      'Performance Monitoring & Updates'
    ],
    stats: { installations: '200+', engagement: '85%', satisfaction: '98%', locations: '50+' }
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
      <div
        className="service-hero"
        style={{ '--service-color': serviceData.color, '--service-gradient': serviceData.gradient }}
      >

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
            alt={serviceData.title || 'Digital Store Branding'}
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
                    <h2>Digital Store Branding Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Transform your retail space into an immersive brand experience that captivates
                      customers and drives engagement. Our digital store branding solutions combine
                      cutting-edge technology with creative storytelling to create memorable shopping experiences.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Increased foot traffic</li>
                      <li><CheckCircle className="check-icon" /> Enhanced brand recognition</li>
                      <li><CheckCircle className="check-icon" /> Interactive customer engagement</li>
                      <li><CheckCircle className="check-icon" /> Real-time content updates</li>
                      <li><CheckCircle className="check-icon" /> Measurable ROI tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Digital Store Branding Features</h2>
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
                <h2>Our Store Branding Projects</h2>
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
                <h2>Our Branding Process</h2>
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
                <h2>Get Your Digital Store Branding Quote</h2>
                <ContactForm serviceType="Digital Store Branding" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalStoreBranding;