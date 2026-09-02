import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Download, Star, CheckCircle, Zap, Users, Award, TrendingUp } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = ({ serviceType, setCurrentSection }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceData = {
    'advertising': {
      title: '3D Anamorphic Advertising',
      subtitle: 'Revolutionary Visual Experiences',
      description: 'Transform your brand presence with cutting-edge 3D anamorphic advertising that creates jaw-dropping illusions and immersive experiences that captivate audiences worldwide.',
      hero: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg',
      color: '#00FFFF',
      gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)',
      features: [
        { icon: <Zap />, title: '3D Billboard Design', description: 'Custom 3D billboards that create stunning visual illusions' },
        { icon: <Users />, title: 'Interactive Experiences', description: 'Engage audiences with interactive 3D displays' },
        { icon: <Award />, title: 'Brand Storytelling', description: 'Tell your brand story through immersive 3D narratives' },
        { icon: <TrendingUp />, title: 'Performance Analytics', description: 'Track engagement and impact metrics' }
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
    },
    'it-services': {
      title: 'IT Services & Solutions',
      subtitle: 'Technology Excellence Delivered',
      description: 'Comprehensive IT solutions that drive digital transformation, enhance operational efficiency, and position your business for future growth in an increasingly digital world.',
      hero: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      color: '#FF6600',
      gradient: 'linear-gradient(135deg, #FF6600, #FF0000)',
      features: [
        { icon: <Zap />, title: 'Web Development', description: 'Modern, responsive websites and web applications' },
        { icon: <Users />, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services' },
        { icon: <Award />, title: 'System Integration', description: 'Seamless integration of business systems' },
        { icon: <TrendingUp />, title: 'Technical Consulting', description: 'Strategic technology guidance and planning' }
      ],
      portfolio: [
        { title: 'E-commerce Platform', category: 'Web Development', image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg' },
        { title: 'Cloud Migration', category: 'Cloud Services', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' },
        { title: 'CRM Integration', category: 'System Integration', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg' }
      ],
      process: [
        'Requirements Analysis & Planning',
        'Architecture Design & Development',
        'Quality Assurance & Testing',
        'Deployment & Go-Live',
        'Ongoing Support & Maintenance'
      ],
      stats: { projects: '50+', uptime: '99.9%', clients: '10+', years: '1+' }
    },
    'digital-marketing': {
      title: 'Digital Marketing Excellence',
      subtitle: 'Growth-Driven Marketing Solutions',
      description: 'Strategic digital marketing campaigns powered by data analytics and creative excellence that drive measurable growth and maximize your return on investment.',
      hero: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      color: '#FF00FF',
      gradient: 'linear-gradient(135deg, #FF00FF, #8A2BE2)',
      features: [
        { icon: <Zap />, title: 'Social Media Strategy', description: 'Comprehensive social media campaigns and management' },
        { icon: <Users />, title: 'SEO Optimization', description: 'Advanced SEO strategies for maximum visibility' },
        { icon: <Award />, title: 'Content Marketing', description: 'Engaging content that drives conversions' },
        { icon: <TrendingUp />, title: 'Performance Analytics', description: 'Data-driven insights and optimization' }
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
    },
    'ai-systems': {
      title: 'AI Systems & Prompt Engine',
      subtitle: 'Intelligent Automation Solutions',
      description: 'Advanced artificial intelligence solutions that automate complex processes, enhance decision-making, and unlock new possibilities for your business through cutting-edge AI technology.',
      hero: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      color: '#008080',
      gradient: 'linear-gradient(135deg, #008080, #00FFFF)',
      features: [
        { icon: <Zap />, title: 'AI Model Development', description: 'Custom AI models tailored to your specific needs' },
        { icon: <Users />, title: 'Prompt Engineering', description: 'Optimized prompts for maximum AI performance' },
        { icon: <Award />, title: 'Machine Learning', description: 'Advanced ML algorithms and implementations' },
        { icon: <TrendingUp />, title: 'Process Automation', description: 'Intelligent automation of business processes' }
      ],
      portfolio: [
        { title: 'Customer Service AI', category: 'Chatbot Development', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg' },
        { title: 'Predictive Analytics', category: 'Machine Learning', image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg' },
        { title: 'Document Processing', category: 'AI Automation', image: 'https://images.pexels.com/photos/8439086/pexels-photo-8439086.jpeg' }
      ],
      process: [
        'Data Analysis & Model Design',
        'Algorithm Development & Training',
        'Testing & Validation',
        'Integration & Deployment',
        'Monitoring & Continuous Improvement'
      ],
      stats: { models: '50+', accuracy: '96%', efficiency: '300%', savings: '$2M+' }
    }
  };

  const service = serviceData[serviceType];
  if (!service) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Star /> },
    { id: 'features', label: 'Features', icon: <CheckCircle /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Award /> },
    { id: 'process', label: 'Process', icon: <TrendingUp /> }
  ];

  return (
    <div className={`service-detail ${isVisible ? 'visible' : ''}`}>
      <div className="service-hero" style={{ '--service-color': service.color, '--service-gradient': service.gradient }}>
        <div className="hero-background">
          <img src={service.hero} alt={service.title} className="hero-image" />
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
            <h1 className="hero-title">{service.title}</h1>
            <p className="hero-subtitle">{service.subtitle}</p>
            <p className="hero-description">{service.description}</p>
            
            <div className="hero-stats">
              {Object.entries(service.stats).map(([key, value]) => (
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
                    <h2>Service Overview</h2>
                    <p>{service.description}</p>
                    <p>
                      Our {service.title.toLowerCase()} service combines cutting-edge technology 
                      with creative excellence to deliver results that exceed expectations. We work 
                      closely with our clients to understand their unique needs and develop 
                      customized solutions that drive real business value.
                    </p>
                  </div>
                  <div className="overview-highlights">
                    <h3>Key Highlights</h3>
                    <ul>
                      <li><CheckCircle className="check-icon" /> Industry-leading expertise</li>
                      <li><CheckCircle className="check-icon" /> Proven track record</li>
                      <li><CheckCircle className="check-icon" /> 24/7 support available</li>
                      <li><CheckCircle className="check-icon" /> Scalable solutions</li>
                      <li><CheckCircle className="check-icon" /> Competitive pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="features-content">
                <h2>Service Features</h2>
                <div className="features-grid">
                  {service.features.map((feature, index) => (
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
                <h2>Our Work</h2>
                <div className="portfolio-grid">
                  {service.portfolio.map((item, index) => (
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
                <h2>Our Process</h2>
                <div className="process-timeline">
                  {service.process.map((step, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;