import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, Zap, Globe, ArrowRight, Play, Star, Brain, Eye, Layers } from 'lucide-react';
import './ParallaxHero.css';

const ParallaxHero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      
      requestAnimationFrame(() => {
        if (heroRef.current && textRef.current) {
          const heroHeight = heroRef.current.offsetHeight;
          const scrollProgress = Math.min(newScrollY / heroHeight, 1);
          
          // Hero scaling and fading effect (like your reference)
          const scale = Math.max(0.3, 1 - scrollProgress * 0.7);
          const opacity = Math.max(0, 1 - scrollProgress * 1.2);
          const translateY = newScrollY * 0.5;
          const blur = scrollProgress * 10;
          
          heroRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
          heroRef.current.style.opacity = opacity;
          heroRef.current.style.filter = `blur(${blur}px)`;
          
          // PIXEL HORSE text parallax effect
          const textScale = Math.max(0.2, 1 - scrollProgress * 0.8);
          const textOpacity = Math.max(0, 1 - scrollProgress * 1.5);
          const textY = newScrollY * 0.3;
          
          textRef.current.style.transform = `translateY(${textY}px) scale(${textScale}) rotateX(${scrollProgress * 45}deg)`;
          textRef.current.style.opacity = textOpacity;
        }
      });
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={`parallax-hero ${isLoaded ? 'loaded' : ''}`} ref={heroRef}>
      {/* Background Video with Parallax */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Animated Background Layers */}
      <div className="background-layers">
        <div className="layer layer-1" style={{ transform: `translateY(${scrollY * 0.1}px) rotateZ(${scrollY * 0.02}deg)` }}></div>
        <div className="layer layer-2" style={{ transform: `translateY(${scrollY * 0.2}px) rotateZ(${scrollY * -0.01}deg)` }}></div>
        <div className="layer layer-3" style={{ transform: `translateY(${scrollY * 0.3}px) rotateZ(${scrollY * 0.015}deg)` }}></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="floating-3d-elements">
        {/* Floating Cubes with Service Icons */}
        <div 
          className="floating-cube cube-1"
          style={{
            transform: `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 30 + Math.sin(scrollY * 0.01) * 20}px, 0) rotateX(${scrollY * 0.2}deg) rotateY(${scrollY * 0.3}deg) rotateZ(${scrollY * 0.1}deg)`
          }}
        >
          <div className="cube-face front"><Sparkles /></div>
          <div className="cube-face back"><Zap /></div>
          <div className="cube-face right"><Globe /></div>
          <div className="cube-face left"><Brain /></div>
          <div className="cube-face top"><Star /></div>
          <div className="cube-face bottom"><Eye /></div>
        </div>

        <div 
          className="floating-cube cube-2"
          style={{
            transform: `translate3d(${mousePosition.x * -40}px, ${mousePosition.y * -25 + Math.cos(scrollY * 0.008) * 15}px, 0) rotateX(${scrollY * -0.25}deg) rotateY(${scrollY * -0.2}deg) rotateZ(${scrollY * -0.15}deg)`
          }}
        >
          <div className="cube-face front"><Brain /></div>
          <div className="cube-face back"><Globe /></div>
          <div className="cube-face right"><Layers /></div>
          <div className="cube-face left"><Zap /></div>
          <div className="cube-face top"><Play /></div>
          <div className="cube-face bottom"><Star /></div>
        </div>

        <div 
          className="floating-cube cube-3"
          style={{
            transform: `translate3d(${mousePosition.x * 35}px, ${mousePosition.y * 40 + Math.sin(scrollY * 0.012) * 25}px, 0) rotateX(${scrollY * 0.15}deg) rotateY(${scrollY * 0.25}deg) rotateZ(${scrollY * -0.1}deg)`
          }}
        >
          <div className="cube-face front"><Eye /></div>
          <div className="cube-face back"><Sparkles /></div>
          <div className="cube-face right"><Brain /></div>
          <div className="cube-face left"><Globe /></div>
          <div className="cube-face top"><Zap /></div>
          <div className="cube-face bottom"><Layers /></div>
        </div>

        {/* Floating Spheres */}
        <div 
          className="floating-sphere sphere-1"
          style={{
            transform: `translate3d(${mousePosition.x * 60}px, ${mousePosition.y * -35 + Math.sin(scrollY * 0.005) * 30}px, 0) rotateZ(${scrollY * 0.4}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`
          }}
        ></div>

        <div 
          className="floating-sphere sphere-2"
          style={{
            transform: `translate3d(${mousePosition.x * -45}px, ${mousePosition.y * 50 + Math.cos(scrollY * 0.007) * 20}px, 0) rotateZ(${scrollY * -0.3}deg) scale(${1 + Math.cos(scrollY * 0.008) * 0.15})`
          }}
        ></div>

        <div 
          className="floating-sphere sphere-3"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * -20 + Math.sin(scrollY * 0.009) * 15}px, 0) rotateZ(${scrollY * 0.2}deg) scale(${1 + Math.sin(scrollY * 0.006) * 0.1})`
          }}
        ></div>

        {/* Floating Rings */}
        <div 
          className="floating-ring ring-1"
          style={{
            transform: `translate3d(${mousePosition.x * 25}px, ${mousePosition.y * 15}px, 0) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.2}deg) rotateZ(${scrollY * 0.3}deg)`
          }}
        ></div>

        <div 
          className="floating-ring ring-2"
          style={{
            transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -10}px, 0) rotateX(${scrollY * -0.15}deg) rotateY(${scrollY * -0.1}deg) rotateZ(${scrollY * -0.25}deg)`
          }}
        ></div>
      </div>

      {/* Main PIXEL HORSE Text */}
      <div className="hero-text-container" ref={textRef}>
        <h1 className="hero-main-text">
          <span className="text-line pixel">PIXEL</span>
          <span className="text-line horse">HORSE</span>
        </h1>
        <div className="text-glow"></div>
        <div className="text-particles">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="text-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content" ref={contentRef}>
        <div className="hero-badge">
          <Star className="badge-icon" />
          <span>3D Innovation Pioneers</span>
          <div className="badge-glow"></div>
        </div>
        
        <div className="hero-subtitle">
          <span className="subtitle-line">Transforming Digital Reality Through</span>
          <span className="subtitle-highlight">Advanced 3D Technology</span>
        </div>
        
        <p className="hero-description">
          Experience the future of digital advertising with our revolutionary 3D anamorphic technology, 
          AI-powered solutions, and comprehensive digital services that push the boundaries of innovation.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Delivered</div>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
            <div className="stat-glow"></div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
            <div className="stat-glow"></div>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="cta-button primary">
            <Zap className="button-icon" />
            <span>Explore Our Universe</span>
            <ArrowRight className="button-arrow" />
            <div className="button-glow"></div>
          </button>
          <button className="cta-button secondary">
            <Play className="button-icon" />
            <span>Watch Magic Unfold</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
        <ChevronDown className="scroll-icon" />
        <span className="scroll-text">Discover the Future</span>
        <div className="indicator-glow"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="geometric-patterns">
        <div className="pattern pattern-1" style={{ transform: `rotate(${scrollY * 0.1}deg)` }}></div>
        <div className="pattern pattern-2" style={{ transform: `rotate(${scrollY * -0.15}deg)` }}></div>
        <div className="pattern pattern-3" style={{ transform: `rotate(${scrollY * 0.08}deg)` }}></div>
      </div>

      {/* Energy Waves */}
      <div className="energy-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
    </section>
  );
};

export default ParallaxHero;