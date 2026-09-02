
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import './LoadingScreen.css';

// LoadingScreen component for displaying a progress animation
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Initializing');

  useEffect(() => {
    const stages = [
      'Initializing 3D Engine...',
      'Loading Pixel Horse Assets...',
      'Rendering 3D Components...',
      'Finalizing Experience...'
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const newProgress = prev + Math.random() * 15;
        const stageIndex = Math.floor((newProgress / 100) * stages.length);

        if (stageIndex !== currentStage && stageIndex < stages.length) {
          currentStage = stageIndex;
          setStage(stages[stageIndex]);
        }

        return Math.min(newProgress, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ph-loading-screen">
      <div className="ph-loading-background">
        <div className="ph-loading-orb ph-orb-1"></div>
        <div className="ph-loading-orb ph-orb-2"></div>
        <div className="ph-loading-orb ph-orb-3"></div>
      </div>

      <div className="ph-loading-content">
        <div className="ph-loading-logo">
          <div className="ph-logo-3d-container">
            <Zap className="ph-logo-3d-icon" />
            <div className="ph-logo-rings">
              <div className="ph-ring ph-ring-1"></div>
              <div className="ph-ring ph-ring-2"></div>
              <div className="ph-ring ph-ring-3"></div>
            </div>
          </div>
          <h1 className="ph-loading-title">Pixel Horse</h1>
          <p className="ph-loading-subtitle">3D Innovation Hub</p>
        </div>

        <div className="ph-loading-progress">
          <div className="ph-progress-container">
            <div className="ph-progress-bar">
              <div
                className="ph-progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="ph-progress-glow"></div>
            </div>
            <div className="ph-progress-text">
              <span className="ph-progress-percentage">{Math.round(progress)}%</span>
            </div>
          </div>
          <p className="ph-loading-stage">{stage}</p>
        </div>
      </div>

      <div className="ph-loading-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="ph-loading-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
