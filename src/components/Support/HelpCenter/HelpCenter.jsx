import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search, HelpCircle, Book, MessageCircle, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';
import './HelpCenter.css';
import { useNavigate } from 'react-router-dom';

const HelpCenter = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'Help Center - Pixel Horse';
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

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: <Book />,
      faqs: [
        {
          question: 'How do I get started with Pixel Horse services?',
          answer: 'Getting started is easy! Simply contact us through our website or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution proposal.'
        },
        {
          question: 'What information do I need to provide for a project quote?',
          answer: 'We typically need project scope, timeline, budget range, target audience, and any specific requirements. The more details you provide, the more accurate our quote will be.'
        },
        {
          question: 'How long does it take to complete a project?',
          answer: 'Project timelines vary based on complexity and scope. Simple projects may take 2-4 weeks, while complex 3D advertising campaigns can take 6-12 weeks. We\'ll provide a detailed timeline during consultation.'
        }
      ]
    },
    {
      title: '3D Advertising',
      icon: <HelpCircle />,
      faqs: [
        {
          question: 'What is anamorphic 3D advertising?',
          answer: 'Anamorphic 3D advertising creates optical illusions that appear three-dimensional when viewed from specific angles. This technique makes flat surfaces appear to have depth and movement, creating stunning visual effects.'
        },
        {
          question: 'What display formats do you support?',
          answer: 'We support various formats including digital billboards, LED walls, building wraps, transit media, and indoor displays. Our content is optimized for each specific format and viewing angle.'
        },
        {
          question: 'Can you create content for existing displays?',
          answer: 'Yes! We can create anamorphic content for your existing digital displays. We just need the technical specifications and viewing angle information to optimize the content properly.'
        }
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <MessageCircle />,
      faqs: [
        {
          question: 'What digital marketing services do you offer?',
          answer: 'We offer comprehensive digital marketing including SEO, social media marketing, Google AdWords, content creation, website management, and performance analytics.'
        },
        {
          question: 'How do you measure campaign success?',
          answer: 'We use various metrics including website traffic, conversion rates, engagement rates, click-through rates, and ROI. We provide detailed monthly reports with actionable insights.'
        },
        {
          question: 'Do you work with small businesses?',
          answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. We tailor our services and pricing to match your business needs and budget.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: <Phone />,
      faqs: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We provide ongoing technical support, maintenance, updates, and performance monitoring. Support packages vary based on the service type and can be customized to your needs.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'We aim to respond to all support requests within 4 hours during business hours. Critical issues are addressed immediately, while general inquiries are handled within 24 hours.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we provide comprehensive training for your team on using and managing the solutions we implement. Training can be conducted on-site or remotely based on your preference.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Contact Support', description: 'Get help from our support team', link: 'contact-support' },
    { title: 'System Status', description: 'Check our service status', link: 'system-status' },
    { title: 'Service Documentation', description: 'Detailed service guides', link: '#' },
    { title: 'Video Tutorials', description: 'Step-by-step video guides', link: '#' }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className={`help-center-page ${isVisible ? 'visible' : ''}`}>
      <div className="help-hero">
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Help Center" className="hero-image" />
          <div className="hero-overlay"></div>
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
            <h1 className="hero-title">Help Center</h1>
            <p className="hero-subtitle">Find answers and get support</p>
            <p className="hero-description">
              Get help with our services, find answers to common questions, 
              and access support resources.
            </p>
            
            <div className="search-container">
              <div className="search-box">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-content">
        <div className="content-container">
          <div className="quick-links-section">
            <h2>Quick Links</h2>
            <div className="quick-links-grid">
              {quickLinks.map((link, index) => (
                <div 
                  key={index} 
                  className="quick-link-card"
                  onClick={() => link.link.startsWith('#') ? null : setCurrentSection(link.link)}
                >
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                  <ChevronRight className="link-arrow" />
                </div>
              ))}
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <div className="category-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                
                <div className="faq-list">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqId = `${categoryIndex}-${faqIndex}`;
                    const isExpanded = expandedFAQ === faqId;
                    
                    return (
                      <div key={faqIndex} className="faq-item">
                        <button
                          className="faq-question"
                          onClick={() => setExpandedFAQ(isExpanded ? null : faqId)}
                        >
                          <span>{faq.question}</span>
                          {isExpanded ? <ChevronDown /> : <ChevronRight />}
                        </button>
                        
                        {isExpanded && (
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {searchQuery && filteredFAQs.length === 0 && (
              <div className="no-results">
                <HelpCircle className="no-results-icon" />
                <h3>No results found</h3>
                <p>Try searching with different keywords or browse our categories above.</p>
              </div>
            )}
          </div>

          <div className="contact-support-section">
            <h2>Still Need Help?</h2>
            <div className="support-options">
              <div className="support-card">
                <Mail className="support-icon" />
                <h3>Email Support</h3>
                <p>Get detailed help via email</p>
                <a href="mailto:support@pixelhorse.in" className="support-link">support@pixelhorse.in</a>
              </div>
              
              <div className="support-card">
                <Phone className="support-icon" />
                <h3>Phone Support</h3>
                <p>Speak directly with our team</p>
                <a href="tel:+919949562299" className="support-link">+91 99495 62299</a>
              </div>
              
              <div className="support-card">
                <MessageCircle className="support-icon" />
                <h3>Live Chat</h3>
                <p>Chat with our support team</p>
                <button 
                  className="support-link"
                  onClick={() => setCurrentSection('contact-support')}
                >
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;