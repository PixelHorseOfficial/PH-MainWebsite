import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Monitor, TrendingUp, Brain, Smartphone, Palette, Shield, ArrowRight, Play, Eye, Zap } from 'lucide-react';
import './Services.css';

const Services = ({ setCurrentSection }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [inView, setInView] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: '3d-advertising',
      title: '3D Anamorphic Advertising',
      shortTitle: '3D Advertising',
      description: 'Revolutionary 3D anamorphic advertising solutions that create mind-bending illusions and immersive brand experiences that captivate audiences worldwide.',
      icon: <Sparkles />,
      color: '#00FFFF',
      secondaryColor: '#0066FF',
      features: ['Anamorphic Video Making', 'Digital Store Branding', 'Outdoor OOH Branding', 'Interactive Displays', 'Holographic Content'],
      gradient: 'linear-gradient(135deg, #00FFFF, #0066FF, #004d99)',
      stats: { projects: '150+', satisfaction: '99%', views: '10M+' },
      subServices: 3
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Excellence',
      shortTitle: 'Digital Marketing',
      description: 'Full-spectrum marketing services designed to grow online presence, visibility, and conversion through strategic campaigns and data-driven insights.',
      icon: <TrendingUp />,
      color: '#FF00FF',
      secondaryColor: '#8A2BE2',
      features: ['SEO Optimization', 'Social Media Marketing', 'Google AdWords', 'Content Creation', 'Celebrity Advertising'],
      gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2, #4b0082)',
      stats: { campaigns: '300+', growth: '250%', reach: '50M+' },
      subServices: 8
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions & Enterprise',
      shortTitle: 'IT Solutions',
      description: 'High-impact enterprise technology services including ERP, CRM, LMS, HRM systems, cybersecurity, and comprehensive IT infrastructure solutions.',
      icon: <Monitor />,
      color: '#FF6600',
      secondaryColor: '#FF0000',
      features: ['Enterprise Software', 'Cyber Security', 'Cloud Infrastructure', 'DevOps Services', 'Client Support'],
      gradient: 'linear-gradient(135deg, #FF6600, #FF0000, #cc0000)',
      stats: { projects: '200+', satisfaction: '98%', uptime: '99.9%' },
      subServices: 3
    },
    {
      id: 'iot-solutions',
      title: 'IoT Solutions & Innovation',
      shortTitle: 'IoT Solutions',
      description: 'Integration of physical and digital experiences through AR/VR development, IoT device integration, robotics, and wireless communication systems.',
      icon: <Smartphone />,
      color: '#008080',
      secondaryColor: '#00FFFF',
      features: ['AR/VR Development', 'IoT Integration', 'Robotics Solutions', 'Wireless Communication', 'Smart Automation'],
      gradient: 'linear-gradient(135deg, #008080, #00FFFF, #0099cc)',
      stats: { devices: '1000+', accuracy: '96%', efficiency: '300%' },
      subServices: 4
    },
    {
      id: 'digital-experience',
      title: 'Digital Experience & SaaS',
      shortTitle: 'Digital Experience',
      description: 'Next-generation digital tools and platforms powered by Pixel Horse AI and scalable SaaS solutions for various industries.',
      icon: <Brain />,
      color: '#9932CC',
      secondaryColor: '#8A2BE2',
      features: ['Pixel Horse AI', 'SaaS Development', 'Custom Platforms', 'AI Integration', 'Business Intelligence'],
      gradient: 'linear-gradient(135deg, #9932CC, #8A2BE2, #4b0082)',
      stats: { platforms: '50+', users: '100K+', satisfaction: '97%' },
      subServices: 2
    },
    {
      id: 'uiux-design',
      title: 'UI/UX Design Services',
      shortTitle: 'UI/UX Design',
      description: 'Human-centric, research-driven interfaces and user journeys for websites, apps, and digital products with comprehensive testing.',
      icon: <Palette />,
      color: '#FF1493',
      secondaryColor: '#FF69B4',
      features: ['Website Design', 'Mobile App UI', 'User Testing', 'Wireframing', 'Prototyping'],
      gradient: 'linear-gradient(135deg, #FF1493, #FF69B4, #FFB6C1)',
      stats: { designs: '200+', satisfaction: '99%', conversions: '180%' },
      subServices: 5
    },
    {
      id: 'blockchain',
      title: 'Blockchain Development',
      shortTitle: 'Blockchain',
      description: 'Cutting-edge decentralized solutions including Pixel Horse Coin, smart contracts, and blockchain applications for transparency and security.',
      icon: <Shield />,
      color: '#4169E1',
      secondaryColor: '#0000FF',
      features: ['Pixel Horse Coin', 'Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Blockchain Apps'],
      gradient: 'linear-gradient(135deg, #4169E1, #0000FF, #000080)',
      stats: { contracts: '100+', transactions: '1M+', security: '100%' },
      subServices: 2
    }
  ];

  return (
    <section className={`services ${inView ? 'in-view' : ''}`} ref={servicesRef}>
      <div className="services-background">
        <div className="bg-particle particle-1"></div>
        <div className="bg-particle particle-2"></div>
        <div className="bg-particle particle-3"></div>
      </div>

      <div className="services-container">
        <div className="services-header">
          <div className="header-badge">
            <Eye className="badge-icon" />
            <span>Our Comprehensive Services</span>
          </div>
          <h2 className="services-title">Revolutionary Solutions</h2>
          <p className="services-subtitle">
            Complete ecosystem of cutting-edge services that transform ideas into extraordinary digital experiences
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <Zap className="decoration-icon" />
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${hoveredCard === service.id ? 'hovered' : ''} ${inView ? 'animate-in' : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                '--service-color': service.color,
                '--service-secondary': service.secondaryColor,
                '--service-gradient': service.gradient,
                '--animation-delay': `${index * 0.2}s`
              }}
            >
              <div className="card-background"></div>
              <div className="card-glow"></div>
              
              <div className="card-content">
                <div className="card-header">
                  <div className="card-icon-container">
                    <div className="icon-wrapper">
                      {service.icon}
                    </div>
                    <div className="icon-pulse"></div>
                  </div>
                  
                  <div className="card-meta">
                    <h3 className="card-title">{service.title}</h3>
                    <div className="card-stats">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="stat">
                          <span className="stat-value">{value}</span>
                          <span className="stat-label">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="card-description">{service.description}</p>
                
                <div className="card-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      <span className="feature-dot"></span>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="sub-services-count">
                  <span className="count-badge">
                    {service.subServices} Sub-Services Available
                  </span>
                </div>
                
                <div className="card-actions">
                  <button 
                    className="card-button primary"
                    onClick={() => setCurrentSection(service.id)}
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="button-icon" />
                  </button>
                  <button className="card-button secondary">
                    <Play className="button-icon" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
              
              <div className="card-overlay"></div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-description">
              Let's discuss how our comprehensive solutions can elevate your brand to new heights
            </p>
            <button className="cta-button">
              <span>Start Your Journey</span>
              <ArrowRight className="cta-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;