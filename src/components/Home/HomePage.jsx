import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Monitor,
  TrendingUp,
  Smartphone,
  DollarSign,
  Globe,
  Cpu,
  Bot
} from 'lucide-react';

import Hero from '../Hero/Hero';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './HomePage.css';

const HomePage = () => {
  const homeRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';

    const angle = 20;
    const lerp = (a, b, t) => a + (b - a) * t;
    const remap = (value, max) =>
      Math.max(Math.min((value / max) * angle, angle), -angle);

    const cards = cardRefs.current;

    cards.forEach((card) => {
      if (!card) return;

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.dataset.rx = remap(y, rect.height / 2);
        card.dataset.ry = remap(x, rect.width / 2);
      };

      const onLeave = () => {
        card.dataset.rx = 0;
        card.dataset.ry = 0;
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);

      card._cleanup = () => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      };
    });

    const animate = () => {
      cards.forEach((card) => {
        if (!card) return;

        const rx = parseFloat(card.style.getPropertyValue('--rotateX')) || 0;
        const ry = parseFloat(card.style.getPropertyValue('--rotateY')) || 0;

        const nx = lerp(rx, card.dataset.rx || 0, 0.1);
        const ny = lerp(ry, card.dataset.ry || 0, 0.1);

        card.style.setProperty('--rotateX', `${nx}deg`);
        card.style.setProperty('--rotateY', `${ny}deg`);
      });
    };

    const loop = setInterval(animate, 16);

    return () => {
      clearInterval(loop);
      cards.forEach((c) => c?._cleanup && c._cleanup());
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  /* ---------------- DATA ---------------- */

  // const services = [
    // {
    //   title: '3D Anamorphic Illusions',
    //   description: 'Mesmerizing anamorphic 3D visuals for next-gen branding.',
    //   icon: Sparkles,
    //   color: '#00FFFF',
    //   shadow: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg',
    //   background: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg',
    //   cutout: 'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg',
    //   border: 'border-left-behind',
    // },
    // {
    //   title: '3D Billboard Advertising',
    //   description: 'High-impact 3D billboards that stop traffic.',
    //   icon: Monitor,
    //   color: '#FF6600',
    //   shadow: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    //   background: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    //   cutout: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    //   border: 'border-right-behind border-bottom-behind',
    // },
    // {
    //   title: 'Digital Business & Web Management',
    //   description: 'Scalable, secure and automated digital platforms.',
    //   icon: Cpu,
    //   color: '#4169E1',
    //   shadow: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    //   background: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    //   cutout: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    //   border: 'border-left-behind',
    // },
    // {
    //   title: 'Digital Marketing',
    //   description: 'Data-driven marketing that delivers measurable growth.',
    //   icon: TrendingUp,
    //   color: '#FF00FF',
    //   shadow: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    //   background: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    //   cutout: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    //   border: 'border-right-behind',
    // },
  // ];

  // const products = [
  //   {
  //     title: 'Pixel 8',
  //     description: 'Next-gen AI powered device.',
  //     icon: Smartphone,
  //     color: '#008080',
  //     shadow: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
  //     background: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
  //     cutout: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
  //     border: 'border-left-behind border-bottom-behind',
  //   },
  //   {
  //     title: 'Pixel World',
  //     description: 'Immersive AR/VR digital universe.',
  //     icon: Globe,
  //     color: '#FF1493',
  //     shadow: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  //     background: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  //     cutout: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  //     border: 'border-right-behind',
  //   },
  //   {
  //     title: 'Pixel Coin',
  //     description: 'Blockchain-powered secure currency.',
  //     icon: DollarSign,
  //     color: '#FFD700',
  //     shadow: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
  //     background: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
  //     cutout: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
  //     border: 'border-left-behind',
  //   },
  //   {
  //     title: 'Pixel Robotics',
  //     description: 'AI + IoT driven robotic solutions.',
  //     icon: Bot,
  //     color: '#8A2BE2',
  //     shadow: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
  //     background: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
  //     cutout: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg',
  //     border: 'border-right-behind border-bottom-behind',
  //   },
  // ];

  return (
    <div className="home-page" ref={homeRef}>
      {/* 1️⃣ HERO */}
      <Hero />

      {/* 2️⃣ SERVICES */}
      {/*<section className="services-section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Our Services
        </motion.h2>

        <div className="card-container">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`card ${s.border}`}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              animate="visible"
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ '--rotateX': '0deg', '--rotateY': '0deg' }}
            >
              <div className="shadow" style={{ '--url': `url(${s.shadow})` }} />
              <div className="image background" style={{ '--url': `url(${s.background})` }} />
              <div className="image cutout" style={{ '--url': `url(${s.cutout})` }} />
              <div className="content">
                <s.icon size={48} color={s.color} />
                <h2 style={{ color: s.color }}>{s.title}</h2>
                <p>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* 3️⃣ PRODUCTS */}
      {/* <section className="products-section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Our Products
        </motion.h2>

        <div className="card-container">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className={`card ${p.border}`}
              variants={cardVariants}
              custom={i + services.length}
              initial="hidden"
              animate="visible"
              ref={(el) => (cardRefs.current[i + services.length] = el)}
              style={{ '--rotateX': '0deg', '--rotateY': '0deg' }}
            >
              <div className="shadow" style={{ '--url': `url(${p.shadow})` }} />
              <div className="image background" style={{ '--url': `url(${p.background})` }} />
              <div className="image cutout" style={{ '--url': `url(${p.cutout})` }} />
              <div className="content">
                <p.icon size={48} color={p.color} />
                <h2 style={{ color: p.color }}>{p.title}</h2>
                <p>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* 4️⃣ ABOUT */}
      <About />

      {/* 5️⃣ CONTACT */}
      <Contact />
    </div>
  );
};

export default HomePage;