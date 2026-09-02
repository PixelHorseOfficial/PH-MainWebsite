import React, { useEffect, useRef } from 'react';
import './ParticleSystem.css';

const ParticleSystem = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'global-particle';
      
      // Random properties
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 2;
      const opacity = Math.random() * 0.6 + 0.2;
      
      // Random colors
      const colors = ['#00FFFF', '#FF00FF', '#0066FF', '#FF6600', '#8A2BE2', '#008080'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${opacity};
        box-shadow: 0 0 ${size * 2}px ${color};
        background: ${color};
      `;
      
      particlesRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    const createConnectionLine = () => {
      if (!particlesRef.current) return;
      
      const line = document.createElement('div');
      line.className = 'connection-line';
      
      const left = Math.random() * 100;
      const width = Math.random() * 200 + 100;
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 3;
      
      line.style.cssText = `
        left: ${left}%;
        width: ${width}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      
      particlesRef.current.appendChild(line);
      
      setTimeout(() => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, (duration + delay) * 1000);
    };

    // Create particles at intervals
    const particleInterval = setInterval(createParticle, 300);
    const lineInterval = setInterval(createConnectionLine, 5000);
    
    return () => {
      clearInterval(particleInterval);
      clearInterval(lineInterval);
    };
  }, []);

  return <div ref={particlesRef} className="particle-system"></div>;
};

export default ParticleSystem;