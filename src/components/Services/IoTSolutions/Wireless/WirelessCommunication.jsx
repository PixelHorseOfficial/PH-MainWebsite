import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Star, CheckCircle, Zap, Users, Award, TrendingUp, Wifi, Antenna, Signal } from 'lucide-react';
import ContactForm from '../../../Contact/ContactForm';
import '../../ServiceDetail.css';

const WirelessCommunication = ({ setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsVisible(true);
    } catch (err) {
      console.error('Error in useEffect:', err);
      setError('Failed to initialize component');
    }
  }, []);

  // Validate setCurrentSection prop
  if (typeof setCurrentSection !== 'function') {
    console.warn('setCurrentSection is not a function. Ensure the prop is passed correctly.');
  }

  const serviceData = {
    title: 'Wireless Communication',
    subtitle: 'Reliable Connectivity Solutions',
    description: 'Advanced wireless communication solutions for IoT, including 5G, Wi-Fi, and LoRa, ensuring reliable and secure connectivity for connected devices.',
    hero: 'https://c8.alamy.com/comp/HMPX5B/smart-city-and-wireless-communication-network-business-district-with-HMPX5B.jpg', // Unique image: wireless antennas
    color: '#4682B4',
    gradient: 'linear-gradient(135deg, #4682B4, #191970)',
    features: [
      { icon: <Wifi />, title: '5G Connectivity', description: 'High-speed, low-latency 5G networks for IoT' },
      { icon: <Antenna />, title: 'Wi-Fi Solutions', description: 'Robust Wi-Fi networks for seamless connectivity' },
      { icon: <Signal />, title: 'LoRa Networks', description: 'Long-range, low-power solutions for IoT' },
      { icon: <TrendingUp />, title: 'Secure Protocols', description: 'Encrypted communication for data security' }
    ],
    portfolio: [
      { title: '5G IoT Network', category: 'Telecommunications', image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg' }, // Unique image: 5G tower
      { title: 'Smart Factory Wi-Fi', category: 'Industrial Connectivity', image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg' }, // Unique image: factory connectivity
      { title: 'LoRa Sensor Network', category: 'IoT Sensors', image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg' } // Unique image: sensor network
    ],
    process: [
      'Network Analysis & Planning',
      'Infrastructure Design',
      'Implementation & Testing',
      'Security Integration',
      'Monitoring & Maintenance'
    ],
    stats: { networks: '100+', devices: '50K+', uptime: '99.9%', satisfaction: '98%' }
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
        <div className="hero-background">
          <img src={serviceData.hero} alt={serviceData.title || 'Wireless Communication'} className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <button
            className="back-button"
            onClick={() => {
              if (typeof setCurrentSection === 'function') {
                setCurrentSection('iot-solutions');
              } else {
                console.error('setCurrentSection is not a function');
              }
            }}
          >
            <ArrowLeft className="back-icon" />
            <span>Back to IoT Solutions</span>
          </button>

          <div className="hero-text">
            <h1 className="hero-title">{serviceData.title}</h1>
            <p className="hero-subtitle">{serviceData.subtitle}</p>
            <p className="hero-description">{serviceData.description}</p>

            <div className="hero-stats">
              {Object.entries(serviceData.stats || {}).map(([key, value]) => (
                <div key={key} className="hero-stat">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

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
                    <h2>Wireless Communication Overview</h2>
                    <p>{serviceData.description}</p>
                    <p>
                      Our wireless communication solutions provide reliable, secure, and high-speed connectivity for IoT devices, enabling smart ecosystems across industries.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Benefits</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> High-speed connectivity</li>
                      <li><CheckCircle className="check-icon" /> Secure data transmission</li>
                      <li><CheckCircle className="check-icon" /> Scalable network solutions</li>
                      <li><CheckCircle className="check-icon" /> Low-latency performance</li>
                      <li><CheckCircle className="check-icon" /> Reliable uptime</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Wireless Communication Features</h2>
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
                <h2>Our Wireless Communication Projects</h2>
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
                <h2>Our Network Process</h2>
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
                <h2>Get Your Wireless Communication Quote</h2>
                <ContactForm serviceType="Wireless Communication" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WirelessCommunication;