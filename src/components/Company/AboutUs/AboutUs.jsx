import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Target, Award, Globe, CheckCircle, Star, TrendingUp, Heart } from 'lucide-react';
import './AboutUs.css';

const AboutUs = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const companyInfo = {
    name: 'Pixel Horse',
    address: '3-5-1094/14/1, 4th Floor, Kammalamma Nilayam, Sri Venkateshwara Colony, Street no. 1, Narayanaguda, Hyderabad, 500029',
    email: 'admin@pixelhorse.in',
    phone: '+91 99495 62299',
    website: 'www.pixelhorse.co'
  };

  const values = [
    {
      icon: <Target />,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create revolutionary solutions that transform industries.',
      color: '#00FFFF'
    },
    {
      icon: <Users />,
      title: 'Client Partnership',
      description: 'Building long-term relationships through transparency, communication, and exceptional service.',
      color: '#FF00FF'
    },
    {
      icon: <Award />,
      title: 'Excellence Standard',
      description: 'Maintaining the highest quality standards in every aspect of our work and service delivery.',
      color: '#FF6600'
    },
    {
      icon: <Globe />,
      title: 'Global Impact',
      description: 'Creating solutions that make a positive difference in businesses and communities worldwide.',
      color: '#008080'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Pixel Horse established with a vision to revolutionize 3D advertising' },
    { year: '2020', event: 'First Major Project', description: 'Delivered groundbreaking anamorphic video campaign' },
    { year: '2021', event: 'Team Expansion', description: 'Grew to 25+ talented professionals across multiple disciplines' },
    { year: '2022', event: 'AI Integration', description: 'Launched Pixel Horse AI for enhanced business solutions' },
    { year: '2023', event: 'Global Recognition', description: 'Won multiple international awards for innovation' },
    { year: '2024', event: 'Blockchain Launch', description: 'Introduced Pixel Horse Coin and blockchain solutions' }
  ];

  return (
    <div className={`about-us-page ${isVisible ? 'visible' : ''}`}>
      <div className="about-hero">
        <div className="hero-background">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" alt="About Pixel Horse" className="hero-image" />
          <div className="hero-overlay"></div>
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
            <h1 className="hero-title">About Pixel Horse</h1>
            <p className="hero-subtitle">Pioneering 3D Innovation Since 2019</p>
            <p className="hero-description">
              We are a cutting-edge technology company specializing in 3D anamorphic advertising, 
              AI systems, and comprehensive digital solutions that transform businesses worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="content-container">
          <section className="company-story">
            <div className="story-grid">
              <div className="story-text">
                <h2>Our Story</h2>
                <p>
                  Founded in 2019 with a vision to revolutionize digital experiences, Pixel Horse 
                  has grown from a small creative studio to a leading force in 3D anamorphic 
                  advertising and cutting-edge technology solutions.
                </p>
                <p>
                  Our journey began with a simple belief: that technology should inspire, not just 
                  function. Today, we combine artistic vision with technical expertise to create 
                  solutions that push the boundaries of what's possible.
                </p>
                <div className="company-details">
                  <div className="detail-item">
                    <strong>Address:</strong> {companyInfo.address}
                  </div>
                  <div className="detail-item">
                    <strong>Email:</strong> {companyInfo.email}
                  </div>
                  <div className="detail-item">
                    <strong>Phone:</strong> {companyInfo.phone}
                  </div>
                  <div className="detail-item">
                    <strong>Website:</strong> {companyInfo.website}
                  </div>
                </div>
              </div>
              <div className="story-visual">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" alt="Our workspace" />
              </div>
            </div>
          </section>

          <section className="company-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card" style={{ '--value-color': value.color }}>
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="company-timeline">
            <h2>Our Journey</h2>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-content">
                    <h3>{milestone.event}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="company-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Awards Won</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;