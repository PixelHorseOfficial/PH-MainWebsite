import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Globe, Database, Shield } from 'lucide-react';
import './SystemStatus.css';
import { useNavigate } from 'react-router-dom';

const SystemStatus = ({ setCurrentSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.title = 'System Status - Pixel Horse';
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

  const systemServices = [
    {
      name: 'Website & Portal',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '245ms',
      icon: <Globe />,
      description: 'Main website and client portal access'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '180ms',
      icon: <Server />,
      description: 'Core API endpoints and integrations'
    },
    {
      name: 'Database Systems',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      icon: <Database />,
      description: 'Primary and backup database systems'
    },
    {
      name: '3D Rendering Engine',
      status: 'maintenance',
      uptime: '99.92%',
      responseTime: '1.2s',
      icon: <Activity />,
      description: 'Anamorphic content processing and rendering'
    },
    {
      name: 'Security Systems',
      status: 'operational',
      uptime: '100%',
      responseTime: '95ms',
      icon: <Shield />,
      description: 'Authentication and security monitoring'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '320ms',
      icon: <Server />,
      description: 'Email delivery and notifications'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - 3D Rendering Engine',
      status: 'maintenance',
      date: '2024-01-15',
      time: '02:00 UTC',
      duration: '2 hours',
      description: 'Routine maintenance to improve rendering performance and add new features.',
      updates: [
        { time: '02:00 UTC', message: 'Maintenance started - 3D rendering temporarily unavailable' },
        { time: '03:30 UTC', message: 'Performance optimizations completed, testing in progress' },
        { time: '04:00 UTC', message: 'Maintenance completed - All services restored' }
      ]
    },
    {
      id: 2,
      title: 'Brief API Slowdown',
      status: 'resolved',
      date: '2024-01-12',
      time: '14:30 UTC',
      duration: '15 minutes',
      description: 'Temporary increase in API response times due to high traffic.',
      updates: [
        { time: '14:30 UTC', message: 'Investigating increased API response times' },
        { time: '14:35 UTC', message: 'Issue identified - scaling additional servers' },
        { time: '14:45 UTC', message: 'Issue resolved - Response times back to normal' }
      ]
    },
    {
      id: 3,
      title: 'Email Delivery Delay',
      status: 'resolved',
      date: '2024-01-10',
      time: '09:15 UTC',
      duration: '45 minutes',
      description: 'Some emails experienced delivery delays due to provider issues.',
      updates: [
        { time: '09:15 UTC', message: 'Reports of email delivery delays' },
        { time: '09:30 UTC', message: 'Working with email provider to resolve issues' },
        { time: '10:00 UTC', message: 'All delayed emails delivered - Service restored' }
      ]
    }
  ];

  const uptimeData = {
    '24h': { uptime: '99.98%', incidents: 0 },
    '7d': { uptime: '99.95%', incidents: 1 },
    '30d': { uptime: '99.92%', incidents: 3 },
    '90d': { uptime: '99.89%', incidents: 8 }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="status-icon operational" />;
      case 'maintenance':
        return <AlertTriangle className="status-icon maintenance" />;
      case 'degraded':
        return <AlertTriangle className="status-icon degraded" />;
      case 'outage':
        return <XCircle className="status-icon outage" />;
      default:
        return <CheckCircle className="status-icon operational" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'maintenance':
        return 'Maintenance';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Outage';
      default:
        return 'Unknown';
    }
  };

  const getIncidentIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="incident-icon resolved" />;
      case 'maintenance':
        return <Clock className="incident-icon maintenance" />;
      case 'investigating':
        return <AlertTriangle className="incident-icon investigating" />;
      default:
        return <AlertTriangle className="incident-icon" />;
    }
  };

  return (
    <div className={`system-status-page ${isVisible ? 'visible' : ''}`}>
      <div className="status-hero">
      <div
        ref={heroRef}
        className="hero-background"
        style={{
          transform: `scale(${scale}) rotateX(${rotateX}deg)`,
          opacity: opacity,
          transition: "transform 0.1s linear"
        }}
      >
          <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" alt="System Status" className="hero-image" />
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
            <h1 className="hero-title">System Status</h1>
            <p className="hero-subtitle">Real-time service monitoring</p>
            <p className="hero-description">
              Monitor the status of all Pixel Horse services and get updates 
              on any ongoing incidents or maintenance.
            </p>
          </div>
        </div>
      </div>

      <div className="status-content">
        <div className="content-container">
          <div className="overall-status">
            <div className="status-indicator">
              <CheckCircle className="overall-icon operational" />
              <div className="status-text">
                <h2>All Systems Operational</h2>
                <p>All services are running normally</p>
              </div>
            </div>
            
            <div className="uptime-summary">
              <div className="uptime-selector">
                {Object.keys(uptimeData).map(timeframe => (
                  <button
                    key={timeframe}
                    className={`uptime-btn ${selectedTimeframe === timeframe ? 'active' : ''}`}
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
              <div className="uptime-stats">
                <div className="uptime-stat">
                  <span className="stat-value">{uptimeData[selectedTimeframe].uptime}</span>
                  <span className="stat-label">Uptime</span>
                </div>
                <div className="uptime-stat">
                  <span className="stat-value">{uptimeData[selectedTimeframe].incidents}</span>
                  <span className="stat-label">Incidents</span>
                </div>
              </div>
            </div>
          </div>

          <div className="services-status">
            <h2>Service Status</h2>
            <div className="services-grid">
              {systemServices.map((service, index) => (
                <div key={index} className={`service-card ${service.status}`}>
                  <div className="service-header">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-info">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="service-status">
                      {getStatusIcon(service.status)}
                      <span className="status-text">{getStatusText(service.status)}</span>
                    </div>
                  </div>
                  
                  <div className="service-metrics">
                    <div className="metric">
                      <span className="metric-label">Uptime</span>
                      <span className="metric-value">{service.uptime}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Response Time</span>
                      <span className="metric-value">{service.responseTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="incidents-section">
            <h2>Recent Incidents</h2>
            <div className="incidents-list">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className={`incident-card ${incident.status}`}>
                  <div className="incident-header">
                    <div className="incident-status">
                      {getIncidentIcon(incident.status)}
                      <span className="incident-title">{incident.title}</span>
                    </div>
                    <div className="incident-meta">
                      <span className="incident-date">{incident.date}</span>
                      <span className="incident-time">{incident.time}</span>
                      <span className="incident-duration">{incident.duration}</span>
                    </div>
                  </div>
                  
                  <p className="incident-description">{incident.description}</p>
                  
                  <div className="incident-updates">
                    <h4>Updates:</h4>
                    <div className="updates-list">
                      {incident.updates.map((update, index) => (
                        <div key={index} className="update-item">
                          <span className="update-time">{update.time}</span>
                          <span className="update-message">{update.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="status-subscribe">
            <h2>Stay Updated</h2>
            <div className="subscribe-content">
              <div className="subscribe-text">
                <h3>Get Status Updates</h3>
                <p>Subscribe to receive notifications about service status changes and planned maintenance.</p>
              </div>
              <div className="subscribe-actions">
                <button className="subscribe-btn email">
                  Subscribe via Email
                </button>
                <button className="subscribe-btn rss">
                  RSS Feed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;