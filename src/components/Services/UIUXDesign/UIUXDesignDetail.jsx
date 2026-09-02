import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Palette, Smartphone, Layout, TestTube } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const UIUXDesignDetail = ({ setCurrentSection }) => {
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
    title: 'UI/UX Design Services',
    subtitle: 'Human-Centric Design Excellence',
    description: 'Human-centric, research-driven interfaces and user journeys for websites, apps, and digital products with comprehensive testing and optimization.',
    hero: 'videos/video7.mp4',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Palette />, title: 'Website Design', description: 'Creative and responsive designs with intuitive navigation' },
      { icon: <Smartphone />, title: 'Mobile App UI', description: 'Mobile-first, elegant UI for Android and iOS platforms' },
      { icon: <Layout />, title: 'Information Architecture', description: 'Structured content layout for clarity and engagement' },
      { icon: <TestTube />, title: 'User Testing', description: 'Real-time testing, A/B experimentation, and feedback integration' }
    ],
    portfolio: [
      { title: 'E-commerce Platform', category: 'Website Design', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg' },
      { title: 'Mobile Banking App', category: 'App Design', image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg' },
      { title: 'Healthcare Dashboard', category: 'UX Design', image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg' }
    ],
    process: [
      'User Research & Analysis',
      'Information Architecture Design',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'User Testing & Optimization'
    ],
    stats: { designs: '200+', satisfaction: '99%', conversions: '180%', tests: '1000+' }
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

       {/* Background Video with Scroll Effect */}
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
            style={{ opacity: 0.7 }}
          >
            <source src="/videos/video7.mp4" type="video/mp4" />
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
                    <h2>UI/UX Design Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Create exceptional user experiences through research-driven design, intuitive
                      interfaces, and comprehensive testing. Our design process ensures every interaction
                      is meaningful and every journey is optimized for success.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 200+ designs delivered</li>
                      <li><CheckCircle className="check-icon" /> 99% client satisfaction</li>
                      <li><CheckCircle className="check-icon" /> 180% conversion improvement</li>
                      <li><CheckCircle className="check-icon" /> 1000+ user tests conducted</li>
                      <li><CheckCircle className="check-icon" /> Award-winning designs</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>UI/UX Design Features</h2>
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
                <h2>Our Design Portfolio</h2>
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
                <h2>Our Design Process</h2>
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
                <h2>Get Your UI/UX Design Quote</h2>
                <ContactForm serviceType="UI/UX Design Services" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesignDetail;