import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Megaphone, Target, DollarSign } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const PPCAdvertising = ({ setCurrentSection }) => {
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
    title: 'PPC Advertising',
    subtitle: 'Drive Instant Traffic and Conversions',
    description: 'Effective pay-per-click campaigns to deliver immediate results, targeting high-intent audiences with optimized ads across platforms.',
    hero: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Megaphone />, title: 'Ad Creation', description: 'Compelling ads tailored for maximum click-through rates' },
      { icon: <Target />, title: 'Audience Targeting', description: 'Precise targeting to reach high-intent users' },
      { icon: <DollarSign />, title: 'Budget Management', description: 'Optimize ad spend for cost-effective results' },
      { icon: <TrendingUp />, title: 'Performance Tracking', description: 'Detailed analytics to measure and improve ROI' }
    ],
    portfolio: [
      { title: 'Retail PPC Campaign', category: 'E-Commerce', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
      { title: 'Local Service Ads', category: 'Local Business', image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg' },
      { title: 'SaaS Lead Generation', category: 'Technology', image: 'https://images.pexels.com/photos/3182830/pexels-photo-3182830.jpeg' }
    ],
    process: [
      'Campaign Strategy & Planning',
      'Keyword & Audience Research',
      'Ad Creation & Optimization',
      'Bid Management & Budgeting',
      'Performance Monitoring & Reporting'
    ],
    stats: { campaigns: '250+', clicks: '1.5M+', conversions: '40K+', roi: '120%+' }
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
            alt={serviceData.title || 'PPC Advertising'}
            className="hero-image"
            style={{ opacity: 0.4 }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => navigate('/digital-marketing')}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to Digital Marketing</span>
          </button>

          <div className="hero-text">
            <h1 className="hero-title">{serviceData.title}</h1>
            <p className="hero-subtitle">{serviceData.subtitle}</p>
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
                    <h2>PPC Advertising Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our PPC advertising services deliver instant results by targeting high-intent audiences with optimized ads, ensuring maximum ROI and measurable success across multiple platforms.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Immediate traffic boost</li>
                      <li><CheckCircle className="check-icon" /> Higher conversion rates</li>
                      <li><CheckCircle className="check-icon" /> Cost-effective ad spend</li>
                      <li><CheckCircle className="check-icon" /> Precise audience targeting</li>
                      <li><CheckCircle className="check-icon" /> Transparent performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>PPC Advertising Features</h2>
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
                <h2>Our PPC Advertising Projects</h2>
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
                <h2>Our PPC Advertising Process</h2>
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
                <h2>Get Your PPC Advertising Quote</h2>
                <ContactForm serviceType="PPC Advertising" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCAdvertising;