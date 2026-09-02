import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Eye, Share2, MessageSquare, Globe } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const SocialMediaMarketing = ({ setCurrentSection }) => {
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
    title: 'Social Media Marketing',
    subtitle: 'Engage and Grow Your Audience',
    description: 'Strategic social media campaigns to boost brand awareness, engage communities, and drive conversions across platforms.',
    hero: 'https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Share2 />, title: 'Multi-Platform Strategy', description: 'Tailored campaigns for platforms like Instagram, Twitter, and LinkedIn' },
      { icon: <MessageSquare />, title: 'Content Creation', description: 'Engaging posts, stories, and videos to captivate your audience' },
      { icon: <Globe />, title: 'Community Management', description: 'Build and nurture online communities for brand loyalty' },
      { icon: <TrendingUp />, title: 'Performance Analytics', description: 'Track engagement and optimize campaigns with data insights' }
    ],
    portfolio: [
      { title: 'Viral Instagram Campaign', category: 'Social Media', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' },
      { title: 'Twitter Brand Launch', category: 'Brand Awareness', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg' },
      { title: 'LinkedIn B2B Strategy', category: 'Professional Networking', image: 'https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg' }
    ],
    process: [
      'Audience Research & Strategy',
      'Content Planning & Creation',
      'Platform-Specific Campaign Setup',
      'Community Engagement & Management',
      'Analytics & Performance Optimization'
    ],
    stats: { campaigns: '50+', followersGained: '1M+', engagementRate: '15%+', platforms: '10+' }
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
                    <h2>Social Media Marketing Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our social media marketing services leverage creative content, targeted campaigns, and data-driven strategies to grow your brand's presence, engage audiences, and drive measurable results across major platforms.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Increased brand visibility</li>
                      <li><CheckCircle className="check-icon" /> Stronger audience engagement</li>
                      <li><CheckCircle className="check-icon" /> Higher conversion rates</li>
                      <li><CheckCircle className="check-icon" /> Targeted audience growth</li>
                      <li><CheckCircle className="check-icon" /> Enhanced brand loyalty</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Social Media Features</h2>
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
                <h2>Our Social Media Projects</h2>
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
                <h2>Our Social Media Process</h2>
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
                <h2>Get Your Social Media Quote</h2>
                <ContactForm serviceType="Social Media Marketing" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketing;