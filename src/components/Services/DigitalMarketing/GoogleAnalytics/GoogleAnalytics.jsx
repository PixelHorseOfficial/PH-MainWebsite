import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Eye, BarChart, Activity, PieChart } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const GoogleAnalytics = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
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

  const serviceData = {
    title: 'Google Analytics',
    subtitle: 'Data-Driven Insights for Growth',
    description: 'Unlock the power of your data with Google Analytics to track performance, understand user behavior, and optimize marketing strategies.',
    hero: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <BarChart />, title: 'Traffic Analysis', description: 'Understand where your visitors come from and how they interact' },
      { icon: <Activity />, title: 'Conversion Tracking', description: 'Measure goals and conversions to gauge campaign success' },
      { icon: <PieChart />, title: 'Audience Insights', description: 'Gain deep insights into user demographics and behavior' },
      { icon: <TrendingUp />, title: 'Custom Reports', description: 'Tailored reports to align with your business objectives' }
    ],
    portfolio: [
      { title: 'E-Commerce Analytics Setup', category: 'Retail', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
      { title: 'SaaS User Behavior Analysis', category: 'Technology', image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg' },
      { title: 'Blog Traffic Optimization', category: 'Content', image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg' }
    ],
    process: [
      'Analytics Account Setup',
      'Goal & Event Tracking Configuration',
      'Data Collection & Analysis',
      'Custom Dashboard Creation',
      'Ongoing Reporting & Optimization'
    ],
    stats: { websitesTracked: '200+', reportsGenerated: '1K+', insights: '10K+', clients: '75+' }
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
            alt={serviceData.title}
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
              {Object.entries(serviceData.stats).map(([key, value]) => (
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
                    <h2>Google Analytics Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our Google Analytics services provide actionable insights to understand user behavior, track performance, and optimize your digital strategies for maximum impact and growth.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Data-driven decision making</li>
                      <li><CheckCircle className="check-icon" /> Improved campaign performance</li>
                      <li><CheckCircle className="check-icon" /> Better user understanding</li>
                      <li><CheckCircle className="check-icon" /> Enhanced ROI tracking</li>
                      <li><CheckCircle className="check-icon" /> Customizable reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Google Analytics Features</h2>
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
                <h2>Our Google Analytics Projects</h2>
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
                <h2>Our Google Analytics Process</h2>
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
                <h2>Get Your Google Analytics Quote</h2>
                <ContactForm serviceType="Google Analytics" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAnalytics;