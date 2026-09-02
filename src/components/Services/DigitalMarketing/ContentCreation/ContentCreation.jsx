import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Eye, PenTool, Camera, FileText } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const ContentCreation = ({ setCurrentSection }) => {
const [activeTab, setActiveTab] = useState('overview');
const [isVisible, setIsVisible] = useState(false);
const [error, setError] = useState(null);
const [scrollY, setScrollY] = useState(0);

const heroRef = useRef(null);
const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scale = 1 + scrollY * 0.0005;
const rotateX = scrollY * 0.05;
const opacity = Math.max(1 - scrollY * 0.001, 0.4);

  const serviceData = {
    title: 'Content Creation',
    subtitle: 'Engaging Stories That Connect',
    description: 'High-quality content creation services to craft compelling stories, visuals, and campaigns that resonate with your audience.',
    hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <PenTool />, title: 'Copywriting', description: 'Engaging blog posts, articles, and website copy' },
      { icon: <Camera />, title: 'Visual Content', description: 'Stunning images, videos, and infographics' },
      { icon: <FileText />, title: 'Content Strategy', description: 'Tailored plans to align with your brand goals' },
      { icon: <TrendingUp />, title: 'SEO-Optimized Content', description: 'Content designed to rank higher on search engines' }
    ],
    portfolio: [
      { title: 'Blog Series for Tech Startup', category: 'Blogging', image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg' },
      { title: 'Video Campaign for Retail', category: 'Video Content', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
      { title: 'Infographic for Non-Profit', category: 'Visual Content', image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg' }
    ],
    process: [
      'Content Strategy Development',
      'Audience Research & Planning',
      'Content Creation & Editing',
      'Visual Design & Production',
      'Distribution & Optimization'
    ],
    stats: { piecesCreated: '100+', views: '1M+', engagement: '20%+', clients: '50+' }
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
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img src={serviceData.hero} alt={serviceData.title} className="hero-image" />
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
                    <h2>Content Creation Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our content creation services deliver engaging, high-quality content that connects with your audience, strengthens your brand, and drives measurable results across digital platforms.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Increased audience engagement</li>
                      <li><CheckCircle className="check-icon" /> Stronger brand identity</li>
                      <li><CheckCircle className="check-icon" /> Higher search visibility</li>
                      <li><CheckCircle className="check-icon" /> Improved conversions</li>
                      <li><CheckCircle className="check-icon" /> Consistent content delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Content Creation Features</h2>
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
                <h2>Our Content Creation Projects</h2>
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
                <h2>Our Content Creation Process</h2>
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
                <h2>Get Your Content Creation Quote</h2>
                <ContactForm serviceType="Content Creation" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;