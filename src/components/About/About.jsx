import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Award, Users, Target, Zap, CheckCircle, Star, TrendingUp, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [inView, setInView] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [counts, setCounts] = useState([]);
  const [highlightCounts, setHighlightCounts] = useState([]);
  const [highlightsStarted, setHighlightsStarted] = useState(false);

  const aboutRef = useRef(null);
  const achievementsRef = useRef(null);

  // Refs used purely for the GSAP scroll animations below
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const storyTextRef = useRef(null);
  const storyVisualRef = useRef(null);
  const highlightsRef = useRef(null);
  const valuesTitleRef = useRef(null);
  const valuesGridRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const mainCardRef = useRef(null);
  const storyTitleUnderlineRef = useRef(null);

  const values = [
    {
      icon: <Zap />,
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create revolutionary solutions that transform industries.',
      color: '#00FFFF',
      gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
    },
    {
      icon: <Users />,
      title: 'Client Partnership',
      description: 'Building long-term relationships through transparency, communication, and exceptional service.',
      color: '#00FFFF',
      gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
    },
    {
      icon: <Target />,
      title: 'Results Driven',
      description: 'Every project is designed to deliver measurable impact and exceed performance expectations.',
      color: '#00FFFF',
      gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
    },
    {
      icon: <Award />,
      title: 'Excellence Standard',
      description: 'Maintaining the highest quality standards in every aspect of our work and service delivery.',
      color: '#00FFFF',
      gradient: 'linear-gradient(135deg, #00FFFF, #0066FF)'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed', icon: <CheckCircle /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star /> },
    { number: '10+', label: 'Happy Clients', icon: <Users /> },
    { number: '10+', label: 'Industry Awards', icon: <Award /> },
    { number: '1+', label: 'Years Experience', icon: <TrendingUp /> },
    { number: '1M+', label: 'Global Reach', icon: <Globe /> }
  ];

  // Story highlight data (same numbers/labels as before, now driven by a counter)
  const storyHighlights = [
    { number: '2025', label: 'Company Founded' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '10+', label: 'Awards Won' }
  ];

  const targetNumbers = achievements.map(item =>
    parseInt(item.number.replace(/[^0-9]/g, ''))
  );

  const highlightTargetNumbers = storyHighlights.map(item =>
    parseInt(item.number.replace(/[^0-9]/g, ''))
  );

  // Split text helpers for mask-reveal animations (content is untouched, just
  // wrapped word-by-word so GSAP can animate each word independently)
  const titleWords = 'Crafting Digital Excellence'.split(' ');
  const subtitleText =
    "We are pioneers in 3D innovation, transforming ideas into extraordinary digital experiences that captivate and inspire";
  const subtitleWords = subtitleText.split(' ');

  // Check if element is in viewport manually
  const isInViewport = useCallback((el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }, []);

  // Start counter animation (achievements)
  const startCounting = useCallback(() => {
    if (animationStarted) return;
    setAnimationStarted(true);
    setInView(true);

    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setCounts(targetNumbers.map(num => Math.floor(num * eased)));

      if (step >= steps) {
        clearInterval(interval);
        setCounts(targetNumbers);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [animationStarted, targetNumbers]);

  // Start counter animation (story highlights)
  const startHighlightCounting = useCallback(() => {
    if (highlightsStarted) return;
    setHighlightsStarted(true);

    const duration = 1600;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      setHighlightCounts(highlightTargetNumbers.map(num => Math.floor(num * eased)));

      if (step >= steps) {
        clearInterval(interval);
        setHighlightCounts(highlightTargetNumbers);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [highlightsStarted, highlightTargetNumbers]);

  // Scroll handler fallback for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (animationStarted) return;
      if (isInViewport(achievementsRef.current)) {
        startCounting();
      }
    };

    // Check immediately on mount (in case already visible)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationStarted, isInViewport, startCounting]);

  // IntersectionObserver as primary trigger (desktop)
  useEffect(() => {
    if (animationStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    // Section in-view for CSS class
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
      aboutObserver.disconnect();
    };
  }, [animationStarted, startCounting]);

  // IntersectionObserver to trigger the story-highlight counters once
  useEffect(() => {
    if (highlightsStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startHighlightCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (highlightsRef.current) {
      observer.observe(highlightsRef.current);
    }

    return () => observer.disconnect();
  }, [highlightsStarted, startHighlightCounting]);

  // ────────────────────────────────
  // Advanced scroll-driven reveal animations (GSAP + ScrollTrigger)
  // Content and images are untouched — this only animates how things enter.
  // ────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header: badge → title (word mask-reveal) → subtitle (word mask-reveal)
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
        }
      );

      if (titleRef.current) {
        const titleInner = titleRef.current.querySelectorAll('.title-word');
        gsap.fromTo(
          titleInner,
          { yPercent: 120, rotate: 6, opacity: 0 },
          {
            yPercent: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.08,
            delay: 0.15,
            ease: 'power4.out',
            scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
          }
        );
      }

      if (subtitleRef.current) {
        const subtitleInner = subtitleRef.current.querySelectorAll('.subtitle-word');
        gsap.fromTo(
          subtitleInner,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.02,
            delay: 0.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' },
          }
        );
      }

      // Story: text slides in from the left, visual from the right
      gsap.fromTo(
        storyTextRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: storyTextRef.current, start: 'top 85%' },
        }
      );
      gsap.fromTo(
        storyVisualRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: storyVisualRef.current, start: 'top 85%' },
        }
      );

      // Animated underline draw beneath "Our Story"
      if (storyTitleUnderlineRef.current) {
        gsap.fromTo(
          storyTitleUnderlineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.9,
            delay: 0.2,
            ease: 'power3.inOut',
            transformOrigin: 'left center',
            scrollTrigger: { trigger: storyTextRef.current, start: 'top 85%' },
          }
        );
      }

      // Main story image: clip-path wipe reveal
      if (mainCardRef.current) {
        gsap.fromTo(
          mainCardRef.current,
          { clipPath: 'inset(0% 0 100% 0)' },
          {
            clipPath: 'inset(0% 0 0% 0)',
            duration: 1.3,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: storyVisualRef.current, start: 'top 85%' },
          }
        );
      }

      // Story highlights: staggered pop-in, then hand control back to CSS hover
      if (highlightsRef.current) {
        const highlightEls = highlightsRef.current.querySelectorAll('.highlight');
        gsap.fromTo(
          highlightEls,
          { opacity: 0, scale: 0.7, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out(1.8)',
            scrollTrigger: { trigger: highlightsRef.current, start: 'top 90%' },
            onComplete: () => gsap.set(highlightEls, { clearProps: 'transform' }),
          }
        );
      }

      // Floating badge cards over the main story image
      if (storyVisualRef.current) {
        const floaters = storyVisualRef.current.querySelectorAll('.floating-card-1, .floating-card-2');
        gsap.fromTo(
          floaters,
          { opacity: 0, scale: 0.4, rotate: -15 },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.7,
            stagger: 0.2,
            delay: 0.4,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: storyVisualRef.current, start: 'top 85%' },
          }
        );
      }

      // Values: section title (scale + fade) + staggered 3D flip-in cards
      gsap.fromTo(
        valuesTitleRef.current,
        { opacity: 0, y: 30, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: valuesTitleRef.current, start: 'top 88%' },
        }
      );

      if (valuesGridRef.current) {
        const cards = valuesGridRef.current.querySelectorAll('.value-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, rotateX: -35, transformPerspective: 800 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: valuesGridRef.current, start: 'top 85%' },
            onComplete: () => gsap.set(cards, { clearProps: 'transform' }),
          }
        );
      }

      // Ambient background orbs: gentle parallax tied to scroll position
      const parallaxOrb = (el, distance) => {
        if (!el) return;
        gsap.to(el, {
          y: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      };
      parallaxOrb(orb1Ref.current, 150);
      parallaxOrb(orb2Ref.current, -180);
      parallaxOrb(orb3Ref.current, 120);
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  // ────────────────────────────────
  // Ambient orbs also drift toward the cursor slightly (mouse parallax),
  // layered on top of the scroll-linked parallax above via a separate axis.
  // ────────────────────────────────
  useEffect(() => {
    if (!orb1Ref.current || !orb2Ref.current || !orb3Ref.current) return;

    const xTo1 = gsap.quickTo(orb1Ref.current, 'x', { duration: 1.2, ease: 'power3' });
    const xTo2 = gsap.quickTo(orb2Ref.current, 'x', { duration: 1.4, ease: 'power3' });
    const xTo3 = gsap.quickTo(orb3Ref.current, 'x', { duration: 1.6, ease: 'power3' });

    const handleMouseMove = (e) => {
      const relX = e.clientX / window.innerWidth - 0.5;
      xTo1(relX * 70);
      xTo2(relX * -90);
      xTo3(relX * 55);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ────────────────────────────────
  // Magnetic hover for the "About Pixel Horse" badge
  // ────────────────────────────────
  const handleBadgeMove = useCallback((e) => {
    const badge = e.currentTarget;
    const rect = badge.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const relY = (e.clientY - rect.top - rect.height / 2) * 0.35;
    gsap.to(badge, { x: relX, y: relY, duration: 0.4, ease: 'power2.out' });
  }, []);

  const handleBadgeLeave = useCallback((e) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  }, []);

  // ────────────────────────────────
  // Interactive 3D tilt + cursor spotlight for the value cards
  // ────────────────────────────────
  const handleCardTiltMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: relX * 16,
      rotateX: -relY * 16,
      y: -8,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Update spotlight position for the glow-following gradient
    card.style.setProperty('--spot-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--spot-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }, []);

  const handleCardTiltLeave = useCallback((e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className={`about ${inView ? 'in-view' : ''}`} ref={aboutRef}>

      <div className="about-background">
        <div className="bg-orb orb-1" ref={orb1Ref}></div>
        <div className="bg-orb orb-2" ref={orb2Ref}></div>
        <div className="bg-orb orb-3" ref={orb3Ref}></div>
      </div>

      <div className="about-container">

        <div className="about-header">
          <div
            className="header-badge"
            ref={badgeRef}
            onMouseMove={handleBadgeMove}
            onMouseLeave={handleBadgeLeave}
          >
            <Star className="badge-icon" />
            <span>About Pixel Horse</span>
          </div>

          <h2 className="about-title" ref={titleRef}>
            {titleWords.map((word, i) => (
              <span className="title-word-mask" key={i}>
                <span className="title-word">{word}</span>
              </span>
            ))}
          </h2>

          <p className="about-subtitle" ref={subtitleRef}>
            {subtitleWords.map((word, i) => (
              <span className="subtitle-word-mask" key={i}>
                <span className="subtitle-word">{word}&nbsp;</span>
              </span>
            ))}
          </p>
        </div>

        <div className="about-content">

          {/* STORY SECTION */}
          <div className="story-section">
            <div className="story-text" ref={storyTextRef}>
              <h3 className="story-title">
                Our Story
                <span className="story-title-underline" ref={storyTitleUnderlineRef}></span>
              </h3>
              <p>
                Founded in 2025 with the vision to revolutionize digital experiences, Pixel Horse 
                has grown from a small creative studio to a leading force in 3D anamorphic 
                advertising and cutting-edge technology solutions.
              </p>
              <p>
                Our journey began with a simple belief: that technology should inspire, 
                not just function. Today, we combine artistic vision with technical expertise 
                to create solutions that push the boundaries of what's possible.
              </p>
              <div className="story-highlights" ref={highlightsRef}>
                {storyHighlights.map((item, index) => {
                  const suffix = item.number.replace(/[0-9]/g, '');
                  const displayValue =
                    highlightCounts[index] !== undefined ? highlightCounts[index] : 0;
                  return (
                    <div className="highlight" key={index}>
                      <span className="highlight-number">
                        {displayValue}
                        {suffix}
                      </span>
                      <span className="highlight-text">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="story-visual" ref={storyVisualRef}>
              <div className="visual-card main-card" ref={mainCardRef}>
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Our workspace"
                />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h4>Innovation Hub</h4>
                    <p>Where creativity meets technology</p>
                  </div>
                </div>
              </div>
              <div className="visual-card floating-card-1">
                <div className="floating-content">
                  <Zap className="floating-icon" />
                  <span>Cutting-edge Tech</span>
                </div>
              </div>
              <div className="visual-card floating-card-2">
                <div className="floating-content">
                  <Award className="floating-icon" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
          </div>

          {/* VALUES SECTION */}
          <div className="values-section">
            <h3 className="section-title" ref={valuesTitleRef}>Our Values</h3>
            <div className="values-grid" ref={valuesGridRef}>
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`value-card ${activeCard === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={(e) => {
                    setActiveCard(null);
                    handleCardTiltLeave(e);
                  }}
                  onMouseMove={handleCardTiltMove}
                  style={{
                    '--value-color': value.color,
                    '--value-gradient': value.gradient
                  }}
                >
                  <div className="card-spotlight"></div>
                  <div className="value-icon-container">
                    <div className="value-icon">{value.icon}</div>
                    <div className="icon-glow"></div>
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS SECTION */}
         {/* <div className="achievements-section" ref={achievementsRef}>
            <h3 className="section-title">Our Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => {
                const suffix = achievement.number.replace(/[0-9]/g, '');
                return (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-number">
                      {counts[index] !== undefined ? counts[index] : 0}{suffix}
                    </div>
                    <div className="achievement-label">{achievement.label}</div>
                    <div className="achievement-glow"></div>
                  </div>
                );
              })}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default About;
