import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Globe, Brain, Monitor, Smartphone, Eye, Layers, Star } from 'lucide-react';
import './ParallaxSection.css';

const ParallaxSection = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  backgroundVideo, 
  icon: Icon, 
  color = '#00FFFF',
  gradient,
  children,
  reverse = false 
}) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      
      requestAnimationFrame(() => {
        const parallaxSpeed = 0.4;
        const yPos = -(scrollY - elementTop) * parallaxSpeed;
        
        const backgroundElement = sectionRef.current.querySelector('.parallax-background');
        if (backgroundElement) {
          backgroundElement.style.transform = `translate3d(0, ${yPos}px, 0) scale(${1 + Math.abs(yPos) * 0.0003})`;
        }
      });
    }
  }, [scrollY]);

  return (
    <section 
      className={`parallax-section ${isVisible ? 'visible' : ''} ${reverse ? 'reverse' : ''}`}
      ref={sectionRef}
      style={{ '--section-color': color, '--section-gradient': gradient }}
    >
      {/* Background Layer with Parallax */}
      <div className="parallax-background">
        {backgroundVideo ? (
          <video
            className="section-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <img src={backgroundImage} alt="" className="section-image" />
        ) : null}
        <div className="section-overlay"></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="section-floating-elements">
        <div 
          className="floating-icon icon-1"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 20}px, 0) rotateY(${scrollY * 0.1}deg) rotateZ(${scrollY * 0.05}deg)`
          }}
        >
          <Sparkles />
          <div className="icon-glow"></div>
        </div>
        <div 
          className="floating-icon icon-2"
          style={{
            transform: `translate3d(${mousePosition.x * -25}px, ${mousePosition.y * -15}px, 0) rotateY(${scrollY * -0.08}deg) rotateZ(${scrollY * -0.03}deg)`
          }}
        >
          <Zap />
          <div className="icon-glow"></div>
        </div>
        <div 
          className="floating-icon icon-3"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 25}px, 0) rotateY(${scrollY * 0.06}deg) rotateZ(${scrollY * 0.04}deg)`
          }}
        >
          <Globe />
          <div className="icon-glow"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div 
          className="floating-shape shape-1"
          style={{
            transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * -30}px, 0) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.15}deg)`
          }}
        ></div>
        <div 
          className="floating-shape shape-2"
          style={{
            transform: `translate3d(${mousePosition.x * -35}px, ${mousePosition.y * 35}px, 0) rotateX(${scrollY * -0.12}deg) rotateY(${scrollY * -0.08}deg)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="section-content">
        <div className="content-container">
          <div className="section-header">
            {Icon && (
              <div className="section-icon-container">
                <Icon className="section-icon" />
                <div className="icon-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
                <div className="icon-particles">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i}
                      className="icon-particle"
                      style={{
                        '--particle-delay': `${i * 0.2}s`,
                        '--particle-angle': `${i * 30}deg`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="section-text">
              <h2 className="section-title">{title}</h2>
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
              {description && <p className="section-description">{description}</p>}
            </div>
          </div>
          
          {children && (
            <div className="section-children">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* 3D Decorative Elements */}
      <div className="section-decorations">
        <div className="decoration-orb orb-1"></div>
        <div className="decoration-orb orb-2"></div>
        <div className="decoration-orb orb-3"></div>
      </div>

      {/* Energy Lines */}
      <div className="energy-lines">
        <div className="energy-line line-1"></div>
        <div className="energy-line line-2"></div>
        <div className="energy-line line-3"></div>
      </div>
    </section>
  );
};

export default ParallaxSection;