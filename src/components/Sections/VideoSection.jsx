import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Eye, Zap } from 'lucide-react';
import './VideoSection.css';

const VideoSection = ({ 
  title, 
  description, 
  videoSrc, 
  posterImage,
  autoplay = true,
  controls = true,
  color = '#00FFFF'
}) => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (autoplay && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Handle autoplay restrictions
            });
          }
        } else {
          setIsVisible(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [autoplay]);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      
      requestAnimationFrame(() => {
        const parallaxSpeed = 0.3;
        const yPos = -(scrollY - elementTop) * parallaxSpeed;
        
        const videoContainer = sectionRef.current.querySelector('.video-container');
        if (videoContainer) {
          videoContainer.style.transform = `translate3d(0, ${yPos}px, 0) scale(${1 + Math.abs(yPos) * 0.0002}) rotateX(${yPos * 0.02}deg)`;
        }
      });
    }
  }, [scrollY]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Handle play restrictions
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section 
      className={`video-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      style={{ '--video-color': color }}
    >
      <div className="video-background">
        <div className="bg-gradient gradient-1"></div>
        <div className="bg-gradient gradient-2"></div>
        <div className="bg-gradient gradient-3"></div>
      </div>

      <div className="video-content">
        <div className="content-container">
          <div className="video-header">
            <div className="header-badge">
              <Eye className="badge-icon" />
              <span>Experience Innovation</span>
            </div>
            <h2 className="video-title">{title}</h2>
            {description && <p className="video-description">{description}</p>}
          </div>

          <div className="video-container">
            <video
              ref={videoRef}
              className="main-video"
              poster={posterImage}
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Advanced Video Overlay Effects */}
            <div className="video-effects">
              <div className="scan-line"></div>
              <div className="hologram-grid">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="grid-line" style={{ '--line-delay': `${i * 0.1}s` }}></div>
                ))}
              </div>
              <div className="corner-frame">
                <div className="corner top-left">
                  <div className="corner-inner"></div>
                </div>
                <div className="corner top-right">
                  <div className="corner-inner"></div>
                </div>
                <div className="corner bottom-left">
                  <div className="corner-inner"></div>
                </div>
                <div className="corner bottom-right">
                  <div className="corner-inner"></div>
                </div>
              </div>
            </div>

            {/* Custom 3D Controls */}
            {controls && (
              <div className="video-controls">
                <button className="control-btn play-pause" onClick={togglePlay}>
                  {isPlaying ? <Pause /> : <Play />}
                  <div className="btn-glow"></div>
                </button>
                
                <button className="control-btn mute" onClick={toggleMute}>
                  {isMuted ? <VolumeX /> : <Volume2 />}
                  <div className="btn-glow"></div>
                </button>
                
                <button className="control-btn fullscreen" onClick={toggleFullscreen}>
                  <Maximize />
                  <div className="btn-glow"></div>
                </button>
              </div>
            )}

            {/* Video Info Overlay */}
            <div className="video-info">
              <div className="info-badge">
                <Zap className="info-icon" />
                <span className="badge-text">4K Ultra HD</span>
              </div>
              <div className="info-badge">
                <Eye className="info-icon" />
                <span className="badge-text">3D Anamorphic</span>
              </div>
            </div>

            {/* Video Glow Effect */}
            <div className="video-glow"></div>
          </div>
        </div>
      </div>

      {/* Floating Video Particles */}
      <div className="video-particles">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="video-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              '--particle-color': i % 3 === 0 ? '#00FFFF' : i % 3 === 1 ? '#FF00FF' : '#FF6600'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;