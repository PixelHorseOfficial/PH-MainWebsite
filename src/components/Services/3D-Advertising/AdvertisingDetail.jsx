import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp, Sparkles, Monitor, Eye } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const AdvertisingDetail = ({ setCurrentSection }) => {
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
    title: '3D Anamorphic Advertising',
    subtitle: 'Revolutionary Visual Experiences',
    description: 'Transform your brand presence with cutting-edge 3D anamorphic advertising that creates jaw-dropping illusions and immersive experiences that captivate audiences worldwide.',
    hero: 'videos/video2.mp4',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Sparkles />, title: 'Anamorphic Video Making', description: 'Cutting-edge 3D visuals that create depth illusions when viewed from specific angles' },
      { icon: <Monitor />, title: 'Digital Store Branding', description: 'Immersive and dynamic storefront displays using 3D visuals and LED walls' },
      { icon: <Eye />, title: 'Outdoor OOH Branding', description: 'Deployment of 3D animated visuals on hoardings, unipoles, and building wraps' },
      { icon: <TrendingUp />, title: 'Performance Analytics', description: 'Track engagement and impact metrics of your 3D campaigns' }
    ],
    portfolio: [
      { title: 'Nike Air Max Campaign', category: '3D Billboard', image: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg' },
      { title: 'Coca-Cola Hologram', category: 'Interactive Display', image: 'https://images.pexels.com/photos/8134722/pexels-photo-8134722.jpeg' },
      { title: 'Samsung Galaxy Launch', category: 'Anamorphic Video', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg' }
    ],
    process: [
      'Concept Development & Storyboarding',
      '3D Modeling & Animation',
      'Anamorphic Perspective Calculation',
      'Installation & Testing',
      'Launch & Performance Monitoring'
    ],
    stats: { projects: '150+', reach: '10M+', satisfaction: '99%', awards: '25+' }
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            style={{ opacity: 0.7 }}
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="hero-content">
          <button 
            className="back-button"
            onClick={() => setCurrentSection('home')}
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
                    <h2>3D Anamorphic Advertising Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our 3D Anamorphic Advertising service combines cutting-edge technology 
                      with creative excellence to deliver visual experiences that captivate and engage. 
                      We specialize in creating mind-bending illusions that transform ordinary spaces 
                      into extraordinary brand experiences.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 150+ projects completed</li>
                      <li><CheckCircle className="check-icon" /> 10M+ audience reach</li>
                      <li><CheckCircle className="check-icon" /> 99% satisfaction rate</li>
                      <li><CheckCircle className="check-icon" /> 25+ awards won</li>
                      <li><CheckCircle className="check-icon" /> Global installation support</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>3D Anamorphic Advertising Features</h2>
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
                <h2>Our 3D Advertising Portfolio</h2>
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
                <h2>Get Your 3D Advertising Quote</h2>
                <ContactForm serviceType="3D Anamorphic Advertising" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingDetail;