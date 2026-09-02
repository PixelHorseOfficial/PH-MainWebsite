import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Sparkles, Monitor, TrendingUp, Brain, Smartphone, Palette, Shield, Film, ChevronDown, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsMenuOpen(false);
        setMobileActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'homepage', label: 'Home', icon: <Home size={18} />, path: '/homepage' },
    {
      id: '3d-advertising',
      label: '3D Advertising',
      icon: <Sparkles size={18} />,
      path: '/3d-advertising',
      subItems: [
        { id: 'anamorphic-video', label: '3D Anamorphic Advertising', path: '/anamorphic-video' },
        { id: 'digital-store-branding', label: 'Digital Store Branding', path: '/digital-store-branding' },
        { id: 'outdoor-branding', label: 'Outdoor OOH Branding', path: '/outdoor-branding' }
      ]
    },
    {
      id: 'digital-marketing',
      label: 'Digital Marketing',
      icon: <TrendingUp size={18} />,
      path: '/digital-marketing',
      subItems: [
        { id: 'seo-services', label: 'SEO Services', path: '/seo-services' },
        { id: 'social-media-marketing', label: 'Social Media Marketing', path: '/social-media-marketing' },
        { id: 'website-management', label: 'Website Management', path: '/website-management' },
        { id: 'google-adwords', label: 'Google AdWords', path: '/google-adwords' },
        { id: 'google-analytics', label: 'Google Analytics', path: '/google-analytics' },
        { id: 'content-creation', label: 'Content Creation', path: '/content-creation' },
        { id: 'ppc-advertising', label: 'PPC Advertising', path: '/ppc-advertising' },
      ]
    },
    { id: '3d-webdesigning', label: '3D Web Designing', icon: <Monitor size={18} />, path: '/3d-webdesigning' },
    { id: 'uiux-design', label: 'UI/UX Design', icon: <Palette size={18} />, path: '/uiux-design' },
    { id: 'arvr-development', label: 'AR/VR Development', icon: <Box size={18} />, path: '/arvr-development' },
    { id: 'animation-creation', label: 'Animation Creation', icon: <Film size={18} />, path: '/animation-creation' }
  ];

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  };

  // FIXED: first tap opens dropdown, second tap navigates to parent page
  const handleMobileDropdownClick = (itemId, path) => {
    if (mobileActiveDropdown === itemId) {
      handleNavClick(path);
    } else {
      setMobileActiveDropdown(itemId);
    }
  };

  const handleMouseEnter = (itemId) => {
    if (window.innerWidth > 1200) setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1200) setActiveDropdown(null);
  };

  return (
    <>
      <header className={`pxh-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="pxh-header-container">
          <div className="pxh-logo-container" onClick={() => handleNavClick('/homepage')}>
            <div className="pxh-logo-3d">
              <div className="pxh-logo-icon-container">
               {/* <img src="/images/Logo.png" alt="Pixel Horse Logo" className="pxh-logo-image" />*/} <img src="/images/pixelhorse.png" alt="Pixel Horse Logo" className="pxh-logo-image" /> 
              </div>
            </div>
          </div>

          <nav className={`pxh-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className="pxh-nav-item-container"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.id)}
                onMouseLeave={() => item.subItems && handleMouseLeave()}
              >
                <button
                  className={`pxh-nav-item ${currentSection === item.id || (item.subItems && item.subItems.some(sub => currentSection === sub.id)) ? 'active' : ''} ${item.subItems ? 'has-dropdown' : ''}`}
                  onClick={() => handleNavClick(item.path)}
                  style={{ '--nav-delay': `${index * 0.1}s` }}
                >
                  <div className="pxh-nav-icon">{item.icon}</div>
                  <span className="pxh-nav-text">{item.label}</span>
                  {item.subItems && (
                    <div className={`pxh-dropdown-arrow ${activeDropdown === item.id ? 'open' : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 8L2 4h8L6 8z" />
                      </svg>
                    </div>
                  )}
                  <div className="pxh-nav-hover-effect"></div>
                  <div className="pxh-nav-3d-shadow"></div>
                </button>

                {item.subItems && (
                  <div className={`pxh-dropdown-menu ${activeDropdown === item.id ? 'open' : ''}`}>
                    <div className="pxh-dropdown-content">
                      {item.subItems.map((subItem, subIndex) => (
                        <button
                          key={subItem.id}
                          className={`pxh-dropdown-item ${currentSection === subItem.id ? 'active' : ''}`}
                          onClick={() => handleNavClick(subItem.path)}
                          style={{ '--sub-delay': `${subIndex * 0.05}s` }}
                        >
                          <span>{subItem.label}</span>
                          <div className="pxh-dropdown-item-glow"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button className="pxh-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="pxh-menu-icon">{isMenuOpen ? <X /> : <Menu />}</div>
          </button>
        </div>
      </header>

      <div className={`pxh-mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`pxh-mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="pxh-mobile-drawer-content">
          <div className="pxh-mobile-drawer-header">
            <div className="pxh-mobile-drawer-title">Navigation</div>
            <button className="pxh-mobile-drawer-close" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="pxh-mobile-drawer-nav">
            {navItems.map((item, index) => (
              <div key={item.id} className="pxh-mobile-nav-item-container">
                <div
                  className={`pxh-mobile-nav-item ${currentSection === item.id || (item.subItems && item.subItems.some(sub => currentSection === sub.id)) ? 'active' : ''}`}
                  style={{ '--mobile-delay': `${index * 0.08}s` }}
                >
                  <button
                    className="pxh-mobile-nav-button"
                    onClick={() =>
                      item.subItems
                        ? handleMobileDropdownClick(item.id, item.path)  // FIXED
                        : handleNavClick(item.path)
                    }
                  >
                    <div className="pxh-mobile-nav-content">
                      <div className="pxh-mobile-nav-icon">{item.icon}</div>
                      <span className="pxh-mobile-nav-text">{item.label}</span>
                    </div>
                    {item.subItems && (
                      <div className="pxh-mobile-dropdown-arrow-wrapper">
                        <ChevronDown
                          size={18}
                          className={`pxh-mobile-dropdown-arrow ${mobileActiveDropdown === item.id ? 'rotated' : ''}`}
                        />
                        {/* hint text so user knows tap again to open page */}
                        {mobileActiveDropdown === item.id && (
                          <span className="pxh-mobile-tap-hint">tap again to open page</span>
                        )}
                      </div>
                    )}
                  </button>

                  <div className="pxh-mobile-nav-glow"></div>
                  <div className="pxh-mobile-nav-ripple"></div>
                </div>

                {item.subItems && (
                  <div className={`pxh-mobile-dropdown ${mobileActiveDropdown === item.id ? 'expanded' : ''}`}>
                    <div className="pxh-mobile-dropdown-content">
                      {item.subItems.map((subItem, subIndex) => (
                        <button
                          key={subItem.id}
                          className={`pxh-mobile-dropdown-item ${currentSection === subItem.id ? 'active' : ''}`}
                          onClick={() => handleNavClick(subItem.path)}
                          style={{ '--sub-mobile-delay': `${subIndex * 0.05}s` }}
                        >
                          <span>{subItem.label}</span>
                          <div className="pxh-mobile-dropdown-item-glow"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;