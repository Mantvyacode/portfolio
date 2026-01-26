import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scrolling down
          setIsVisible(false);
        } else { // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''} ${!isVisible ? 'navbar-hidden' : ''}`}>
      <div className="nav-content">
        <div className="logo" onClick={() => handleNavClick('home')}>
          <Logo />
        </div>
        
        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleNavClick(item.id)} 
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button 
            className="nav-cta-button"
            onClick={() => handleNavClick('projects')}
          >
            Discover My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
