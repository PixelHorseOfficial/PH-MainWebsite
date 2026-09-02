import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Box, Globe, Layers, Cpu } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const WebDesigningDetail = ({ setCurrentSection }) => {
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
    title: '3D Web Design Services',
    subtitle: 'Immersive Digital Experiences in Three Dimensions',
    description: 'Cutting-edge 3D web design solutions that transform your digital presence with stunning visuals, interactive environments, and immersive user experiences powered by the latest web technologies.',
    hero: 'videos/video5.mp4',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Box />, title: '3D Modeling & Rendering', description: 'High-quality 3D models and real-time rendering for stunning web visuals' },
      { icon: <Globe />, title: 'Interactive 3D Environments', description: 'Fully interactive 3D spaces built with Three.js and WebGL technologies' },
      { icon: <Layers />, title: 'Immersive Animations', description: 'Fluid 3D animations and transitions that captivate and engage users' },
      { icon: <Cpu />, title: 'WebGL & Three.js Development', description: 'Performance-optimized 3D web experiences across all modern browsers' }
    ],
    portfolio: [
      { title: '3D Product Showcase', category: '3D E-commerce', image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg' },
      { title: 'Virtual Showroom', category: '3D Environment', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg' },
      { title: 'Interactive Brand Experience', category: '3D Branding', image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg' }
    ],
    process: [
      'Concept & Creative Direction',
      '3D Asset Design & Modeling',
      'WebGL & Three.js Development',
      'Animation & Interactivity Integration',
      'Performance Testing & Optimization'
    ],
    stats: { projects: '150+', satisfaction: '98%', performance: '200%', clients: '80+' }
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
            style={{ opacity: 0.7 }}
          >
            <source src="/videos/video5.mp4" type="video/mp4" />
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
                    <h2>3D Web Design Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Elevate your brand with immersive 3D web experiences that leave a lasting impression.
                      From interactive product showcases to fully animated 3D environments, we craft
                      visually stunning websites that push the boundaries of what's possible on the web.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 150+ 3D projects delivered</li>
                      <li><CheckCircle className="check-icon" /> 98% client satisfaction</li>
                      <li><CheckCircle className="check-icon" /> 200% performance improvement</li>
                      <li><CheckCircle className="check-icon" /> 80+ global clients served</li>
                      <li><CheckCircle className="check-icon" /> Award-winning 3D experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>3D Web Design Features</h2>
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
                <h2>Our 3D Web Design Portfolio</h2>
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
                <h2>Our 3D Web Design Process</h2>
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
                <h2>Get Your 3D Web Design Quote</h2>
                <ContactForm serviceType="3D Web Design Services" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesigningDetail;