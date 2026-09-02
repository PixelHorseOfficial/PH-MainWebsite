import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Eye, Globe, Headphones } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';
import { useNavigate } from 'react-router-dom';

const ARVRDevelopment = ({ setCurrentSection }) => {

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

  // animation values
  const scale = 1 + scrollY * 0.0005;
  const rotateX = scrollY * 0.05;
  const opacity = Math.max(1 - scrollY * 0.001, 0.4);

  if (typeof setCurrentSection !== 'function') {
    console.warn('setCurrentSection is not a function. Ensure the prop is passed correctly.');
  }

  const serviceData = {
    title: 'AR/VR Development',
    subtitle: 'Immersive Reality Solutions',
    description: 'Cutting-edge augmented and virtual reality applications to create immersive experiences for training, entertainment, and customer engagement.',
    hero: '/videos/video.mp4',
    color: '#00FFFF',
    gradient: 'linear-gradient(135deg, #0fdddd)',

    features: [
      { icon: <Headphones />, title: 'Immersive Environments', description: 'Realistic 3D environments for VR experiences' },
      { icon: <Eye />, title: 'AR Overlays', description: 'Interactive augmented reality overlays for real-world integration' },
      { icon: <Globe />, title: 'Cross-Platform Support', description: 'Compatible with major AR/VR platforms' },
      { icon: <TrendingUp />, title: 'Custom Applications', description: 'Tailored solutions for specific industry needs' }
    ],

    portfolio: [
      { title: 'VR Training Simulator', category: 'Training', image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg' },
      { title: 'AR Retail Experience', category: 'Retail', image: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg' },
      { title: 'VR Gaming Platform', category: 'Entertainment', image: 'https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg' }
    ],

    process: [
      'Concept Design & Prototyping',
      '3D Modeling & Development',
      'Platform Integration',
      'User Testing & Optimization',
      'Deployment & Support'
    ],

    stats: { projects: '80+', users: '1M+', platforms: '5+', satisfaction: '96%' }
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

      <div
        className="service-hero"
        style={{
          '--service-color': serviceData.color,
          '--service-gradient': serviceData.gradient
        }}
      >

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
            <source src="/videos/video3.mp4" type="video/mp4" />
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
              {Object.entries(serviceData.stats || {}).map(([key, value]) => (
                <div key={key} className="hero-stat">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
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
                style={{
                  '--service-color': serviceData.color,
                  '--service-gradient': serviceData.gradient
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div className="tab-content">

            {/* ALL YOUR EXISTING CONTENT REMAINS EXACTLY THE SAME */}

            {activeTab === 'overview' && (
              <div className="overview-content">
                <div className="overview-grid">
                  <div className="overview-text">
                    <h2>AR/VR Development Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our AR/VR development services create immersive experiences
                      that transform training, entertainment, and customer
                      engagement through cutting-edge technology.
                    </p>
                  </div>

                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Enhanced user engagement</li>
                      <li><CheckCircle className="check-icon" /> Innovative training solutions</li>
                      <li><CheckCircle className="check-icon" /> Immersive customer experiences</li>
                      <li><CheckCircle className="check-icon" /> Cross-platform compatibility</li>
                      <li><CheckCircle className="check-icon" /> Scalable AR/VR applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* FEATURES */}
            {activeTab === 'features' && (
              <div className="features-content">
                <h2>AR/VR Development Features</h2>
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

            {/* PORTFOLIO */}
            {activeTab === 'portfolio' && (
              <div className="portfolio-content">
                <h2>Our AR/VR Projects</h2>
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

            {/* PROCESS */}
            {activeTab === 'process' && (
              <div className="process-content">
                <h2>Our Development Process</h2>
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

            {/* CONTACT */}
            {activeTab === 'contact' && (
              <div className="contact-content">
                <h2>Get Your AR/VR Development Quote</h2>
                <ContactForm serviceType="AR/VR Development" />
              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  );
};

export default ARVRDevelopment;