// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronDown, Sparkles, Zap, Globe, ArrowRight, Play, Star } from 'lucide-react';
// import { Brain } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import './Hero.css';

// const Hero = () => {
//   const heroRef = useRef(null);
//   const coinContainerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const navigate = useNavigate();
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const coinRef = useRef(null);
//   const animationIdRef = useRef(null);

//   useEffect(() => {
//     if (!coinContainerRef.current) return;

//     const initCoinScene = (THREE) => {
//       // Create the coin using Three.js geometry
//       const createCoin = () => {
//         const geometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
//         const material = new THREE.MeshPhongMaterial({
//           color: 0xffd700,
//           shininess: 100,
//           emissive: 0x444400,
//         });
//         const coin = new THREE.Mesh(geometry, material);
//         coinRef.current = coin;
//         scene.add(coin);
//         animateCoin();
//       };

//       const scene = new THREE.Scene();
//       sceneRef.current = scene;

//       const camera = new THREE.PerspectiveCamera(
//         45,
//         coinContainerRef.current.offsetWidth / coinContainerRef.current.offsetHeight,
//         0.1,
//         1000
//       );
//       camera.position.z = 5;
//       cameraRef.current = camera;

//       const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//       renderer.setSize(coinContainerRef.current.offsetWidth, coinContainerRef.current.offsetHeight);
//       renderer.setClearColor(0x000000, 0);
//       coinContainerRef.current.appendChild(renderer.domElement);
//       rendererRef.current = renderer;

//       // Lighting
//       scene.add(new THREE.AmbientLight(0xffffff, 0.5));
//       const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//       directionalLight.position.set(1, 1, 1);
//       scene.add(directionalLight);
//       const pointLight = new THREE.PointLight(0xffffff, 1, 100);
//       pointLight.position.set(2, 2, 2);
//       scene.add(pointLight);

//       // Animation loop
//       const animateCoin = () => {
//         if (coinRef.current) {
//           coinRef.current.rotation.y += 0.01;
//           coinRef.current.rotation.x += 0.005;
//         }
//         renderer.render(scene, camera);
//         animationIdRef.current = requestAnimationFrame(animateCoin);
//       };

//       // Create the coin
//       createCoin();

//       // Handle window resize
//       const handleResize = () => {
//         if (!coinContainerRef.current) return;
//         camera.aspect = coinContainerRef.current.offsetWidth / coinContainerRef.current.offsetHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(coinContainerRef.current.offsetWidth, coinContainerRef.current.offsetHeight);
//       };

//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//         if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
//         if (renderer) renderer.dispose();
//       };
//     };

//     // Load Three.js and initialize
//     if (window.THREE) {
//       initCoinScene(window.THREE);
//     } else {
//       import('three').then((THREE) => {
//         initCoinScene(THREE);
//       });
//     }
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1,
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   useEffect(() => {
//     let animationFrameId;
//     const handleScroll = () => {
//       if (animationFrameId) cancelAnimationFrame(animationFrameId);
//       animationFrameId = requestAnimationFrame(() => {
//         if (!heroRef.current) return;
//         const progress = Math.min(window.scrollY / (window.innerHeight * 0.4), 1);
//         setScrollProgress(progress);
//       });
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       if (animationFrameId) cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   // Video error handler
//   const handleVideoError = (e) => {
//     console.error('Video failed to load:', e);
//     console.log('Make sure video file exists at: public/videos/video1.mp4');
//   };

//   const handleCardClick = (path) => navigate(path);

//   return (
//     <section
//       className="ph2-hero"
//       ref={heroRef}
//       style={{
//         height: `calc(100vh - ${scrollProgress * 50}vh)`,
//         opacity: 1 - scrollProgress * 0.25,
//         borderBottomLeftRadius: `${scrollProgress * 100}px`,
//         borderBottomRightRadius: `${scrollProgress * 100}px`,
//         transform: `scale(${1 - scrollProgress * 0.2})`,
//       }}
//     >
//       {/* Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="ph2-hero-video"
//         style={{ opacity: 0.9 }}
//         onError={handleVideoError}
//       >
//         {/* Make sure your video is in: public/videos/video1.mp4 */}
//         <source src="/videos/video1.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark overlay */}
//       <div className="ph2-hero-overlay" />

//       <div className="ph2-hero-content" style={{ position: 'relative', zIndex: 2 }}>
//         <div className="ph2-hero-text">
//           <h1 className="ph2-hero-title">
//             <span className="ph2-title-line ph2-animate-slide-in">Welcome to the Future</span>
//             <div className="ph2-logo-wrapper">
//               {/* <img
//                 src="/images/logo_bg.png"
//                 alt="Pixel Horse Logo"
//                 className="ph2-logo-image ph2-animate-scale-in"
//               /> */}
//             </div>
//             <span className="ph2-title-subtitle ph2-animate-slide-in-right">
//               3D Anamorphic Experiences
//             </span>
//           </h1>

//           <div className="ph2-hero-badge">
//             <Star className="ph2-badge-icon" />
//             <span>Premium 3D Innovation</span>
//           </div>

//           <p className="ph2-hero-description ph2-animate-fade-in">
//             Transform your digital presence with cutting-edge 3D anamorphic advertising, revolutionary
//             AI systems, and innovative solutions that push the boundaries of technology and creativity.
//           </p>

//           {/* <div className="ph2-hero-stats ph2-animate-fade-in">
//             <div className="ph2-stat-item">
//               <div className="ph2-stat-number">50+</div>
//               <div className="ph2-hero-stat-label">Projects Delivered</div>
//             </div>
//             <div className="ph2-stat-item">
//               <div className="ph2-stat-number">98%</div>
//               <div className="ph2-hero-stat-label">Client Satisfaction</div>
//             </div>
//             <div className="ph2-stat-item">
//               <div className="ph2-stat-number">24/7</div>
//               <div className="ph2-hero-stat-label">Support Available</div>
//             </div>
//           </div> */}

//           {/* <div className="ph2-hero-buttons ph2-animate-fade-in">
//             <button className="ph2-cta-button ph2-cta-button-primary">
//               <Zap className="ph2-button-icon" />
//               <span>Explore Our Services</span>
//               <ArrowRight className="ph2-button-arrow" />
//             </button>
//             <button className="ph2-cta-button ph2-cta-button-secondary">
//               <Play className="ph2-button-icon" />
//               <span>Watch Demo Reel</span>
//             </button>
//           </div> */}
//         </div>
//       </div>

//       <div
//         className="ph2-scroll-indicator ph2-animate-bounce"
//         style={{ opacity: 1 - scrollProgress * 1.5, position: 'relative', zIndex: 2 }}
//       >
//         <div className="ph2-scroll-line"></div>
//         <ChevronDown className="ph2-scroll-icon" />
//         <span className="ph2-scroll-text">Discover More</span>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Hero3D from "../Hero3D";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Hero3D />
    </section>
  );
};

export default Hero;