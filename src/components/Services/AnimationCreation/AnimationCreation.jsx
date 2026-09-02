import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Download, Star, Film, Video, Palette, Music, CheckCircle, Zap, Users, Award, TrendingUp } from 'lucide-react';
import ContactForm from '../../Contact/ContactForm';
import '../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const AnimationCreation = ({ setCurrentSection }) => {
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
    title: 'Animation & Animated Movie Creation',
    subtitle: 'Bringing Stories to Life Through Motion',
    description: 'We craft stunning 2D and 3D animations, motion graphics, and animated films that captivate audiences, elevate brands, and transform ideas into visually compelling stories.',
    hero: 'videos/video6.mp4',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Film />, title: '2D & 3D Animation', description: 'High-quality 2D and 3D animations crafted for films, ads, and digital content' },
      { icon: <Video />, title: 'Motion Graphics', description: 'Dynamic motion graphics and visual effects for broadcast and online media' },
      { icon: <Palette />, title: 'Character Design', description: 'Unique and expressive character designs brought to life with fluid animation' },
      { icon: <Music />, title: 'Sound & Music Integration', description: 'Professional sound design and music synchronization for immersive animation experiences' }
    ],
    portfolio: [
      { title: 'Fantasy Quest Animated Film', category: 'Feature Film', image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg' },
      { title: 'Space Odyssey', category: 'Short Film', image: 'https://images.pexels.com/photos/8134722/pexels-photo-8134722.jpeg' },
      { title: 'Jungle Adventure Series', category: 'Animated Series', image: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg' }
    ],
    process: [
      'Storyboarding & Scriptwriting',
      'Character & Environment Design',
      'Animation & Rigging',
      'Voice Acting & Sound Effects',
      'Rendering & Final Editing'
    ],
    stats: { projects: '120+', clients: '90+', satisfaction: '98%', awards: '15+' }
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
            <source src="/videos/video6.mp4" type="video/mp4" />
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
            <h1 className="hero-title force-solid">{serviceData.title}</h1>
            <p className="hero-subtitle force-solid">{serviceData.subtitle}</p>
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
                <span>Explore Projects</span>
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
                    <h2>Animation Creation Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      From concept to final render, our animation team delivers frame-perfect
                      storytelling across all formats. Whether it's a brand explainer, an animated
                      series, or a full-length feature film, we bring your vision to life with
                      creativity, precision, and passion.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> 120+ animation projects delivered</li>
                      <li><CheckCircle className="check-icon" /> 90+ satisfied clients worldwide</li>
                      <li><CheckCircle className="check-icon" /> 98% client satisfaction rate</li>
                      <li><CheckCircle className="check-icon" /> 15+ industry awards won</li>
                      <li><CheckCircle className="check-icon" /> End-to-end animation production</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Animation Creation Features</h2>
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
                <h2>Our Animation Portfolio</h2>
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
                <h2>Our Animation Production Process</h2>
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
                <h2>Get Your Animation Creation Quote</h2>
                <ContactForm serviceType="Animation Creation" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationCreation;