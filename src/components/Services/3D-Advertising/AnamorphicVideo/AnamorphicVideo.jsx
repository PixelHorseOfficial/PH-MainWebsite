import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Eye, Monitor, Layers } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const AnamorphicVideo = ({ setCurrentSection }) => {
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
    title: 'Anamorphic Video Making',
    subtitle: 'Mind-Bending 3D Visual Illusions',
    description: 'Cutting-edge 3D visuals that create depth illusions when viewed from specific angles, perfect for digital billboards and large format screens.',
     hero: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg', 
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',
    features: [
      { icon: <Eye />, title: '3D Depth Illusions', description: 'Create stunning visual depth that appears to jump out of screens' },
      { icon: <Monitor />, title: 'Large Format Optimization', description: 'Optimized for digital billboards and massive displays' },
      { icon: <Layers />, title: 'Angle-Specific Design', description: 'Precisely calculated viewing angles for maximum impact' },
      { icon: <TrendingUp />, title: 'Digital Billboard Ready', description: 'Ready-to-deploy content for any digital billboard system' }
    ],
    portfolio: [
      { title: 'Times Square Billboard', category: 'Anamorphic Display', image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg' },
      { title: 'Shopping Mall Installation', category: '3D Illusion', image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg' },
      { title: 'Stadium LED Display', category: 'Sports Marketing', image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg' }
    ],
    process: [
      'Concept Development & Storyboarding',
      '3D Modeling & Scene Creation',
      'Anamorphic Perspective Calculation',
      'Animation & Visual Effects',
      'Format Optimization & Delivery'
    ],
    stats: { projects: '75+', views: '5M+', satisfaction: '100%', formats: '20+' }
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

        {/* Background Video with Scroll Effect */}
        <div className="hero-background">
          <img src={serviceData.hero} alt={serviceData.title || 'Anamorphic Video Making'} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => navigate('/3d-advertising')}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to 3D Advertising</span>
          </button>
          <div className="hero-text">
            <h1 className="hero-title force-solid">{serviceData.title}</h1>
            <p className="hero-subtitle force-solid">{serviceData.subtitle}</p>
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
                    <h2>Anamorphic Video Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our anamorphic video creation process combines advanced 3D modeling,
                      precise mathematical calculations, and creative storytelling to produce
                      videos that create impossible illusions when viewed from the correct angle.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Viral marketing potential</li>
                      <li><CheckCircle className="check-icon" /> Massive audience engagement</li>
                      <li><CheckCircle className="check-icon" /> Brand differentiation</li>
                      <li><CheckCircle className="check-icon" /> Social media amplification</li>
                      <li><CheckCircle className="check-icon" /> Memorable brand experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Anamorphic Video Features</h2>
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
                <h2>Our Anamorphic Projects</h2>
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
                <h2>Our Creation Process</h2>
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
                <h2>Get Your Anamorphic Video Quote</h2>
                <ContactForm serviceType="Anamorphic Video Making" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnamorphicVideo;