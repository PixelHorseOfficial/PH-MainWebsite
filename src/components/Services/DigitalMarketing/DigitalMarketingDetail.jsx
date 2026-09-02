import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Search, Share2, BarChart3, PenTool } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const DigitalMarketingDetail = ({ setCurrentSection }) => {
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
    title: 'Digital Marketing Excellence',
    subtitle: 'Growth-Driven Marketing Solutions',
    description: 'Full-spectrum marketing services designed to grow online presence, visibility, and conversion through strategic campaigns and data-driven insights.',
    hero: 'videos/video1.mp4',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Search />, title: 'SEO Optimization', description: 'Improve website visibility organically via technical, on-page, and off-page strategies' },
      { icon: <Share2 />, title: 'Social Media Marketing', description: 'Strategy, content creation, and performance ads across all major platforms' },
      { icon: <BarChart3 />, title: 'Performance Analytics', description: 'Track user behavior and marketing performance with real-time insights' },
      { icon: <PenTool />, title: 'Content Creation', description: 'Blogs, videos, carousels, reels, and branded content aligned with digital goals' }
    ],
    portfolio: [
      { title: 'Brand Awareness Campaign', category: 'Social Media', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg' },
      { title: 'SEO Success Story', category: 'Search Optimization', image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg' },
      { title: 'Content Series', category: 'Content Marketing', image: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg' }
    ],
    process: [
      'Market Research & Strategy Development',
      'Creative Campaign Development',
      'Multi-Channel Campaign Execution',
      'Performance Monitoring & Optimization',
      'ROI Analysis & Reporting'
    ],
    stats: { campaigns: '300+', growth: '250%', reach: '50M+', roi: '400%' }
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            style={{ opacity: 0.4 }}
          >
            <source src="/videos/video4.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => navigate('/homepage')}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to Home</span>
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
                    <h2>Digital Marketing Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our comprehensive digital marketing approach combines traditional marketing
                      wisdom with cutting-edge digital strategies. We focus on measurable results
                      and sustainable growth through data-driven campaigns that resonate with your
                      target audience.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 300+ successful campaigns</li>
                      <li><CheckCircle className="check-icon" /> 250% average growth rate</li>
                      <li><CheckCircle className="check-icon" /> 50M+ audience reach</li>
                      <li><CheckCircle className="check-icon" /> 400% average ROI</li>
                      <li><CheckCircle className="check-icon" /> Multi-platform expertise</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Digital Marketing Features</h2>
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
                <h2>Our Digital Marketing Portfolio</h2>
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
                <h2>Our Development Process</h2>
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
                <h2>Get Your Digital Marketing Quote</h2>
                <ContactForm serviceType="Digital Marketing" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingDetail;