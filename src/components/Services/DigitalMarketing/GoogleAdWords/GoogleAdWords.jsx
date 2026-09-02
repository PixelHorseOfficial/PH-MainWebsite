import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Eye, Megaphone, Target, BarChart } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const GoogleAdWords = ({ setCurrentSection }) => {
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
    title: 'Google AdWords',
    subtitle: 'Targeted Ads for Maximum ROI',
    description: 'Precision-targeted Google AdWords campaigns to drive high-quality traffic, increase conversions, and maximize your advertising budget.',
    hero: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Target />, title: 'Audience Targeting', description: 'Reach the right audience with precise demographic and interest targeting' },
      { icon: <Megaphone />, title: 'Ad Creation', description: 'Compelling ad copy and visuals optimized for clicks' },
      { icon: <BarChart />, title: 'Performance Tracking', description: 'Real-time analytics to monitor and optimize campaigns' },
      { icon: <TrendingUp />, title: 'Budget Optimization', description: 'Maximize ROI with strategic bid management' }
    ],
    portfolio: [
      { title: 'E-Commerce Ad Campaign', category: 'Retail', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
      { title: 'Local Service Ads', category: 'Local Business', image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg' },
      { title: 'B2B Lead Generation', category: 'Enterprise', image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg' }
    ],
    process: [
      'Campaign Strategy & Planning',
      'Keyword Research & Selection',
      'Ad Creation & Optimization',
      'Audience Targeting Setup',
      'Performance Monitoring & Reporting'
    ],
    stats: { campaigns: '300+', clicks: '2M+', conversions: '50K+', ROI: '150%+' }
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
                    <h2>Google AdWords Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our Google AdWords services deliver targeted, high-performing campaigns that drive traffic, increase conversions, and provide measurable results through strategic ad placement and optimization.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Increased website traffic</li>
                      <li><CheckCircle className="check-icon" /> Higher conversion rates</li>
                      <li><CheckCircle className="check-icon" /> Cost-effective advertising</li>
                      <li><CheckCircle className="check-icon" /> Precise audience targeting</li>
                      <li><CheckCircle className="check-icon" /> Transparent performance metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Google AdWords Features</h2>
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
                <h2>Our Google AdWords Projects</h2>
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
                <h2>Our Google AdWords Process</h2>
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
                <h2>Get Your Google AdWords Quote</h2>
                <ContactForm serviceType="Google AdWords" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdWords;