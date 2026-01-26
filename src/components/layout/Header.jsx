import React from 'react';
import Logo from './Logo';

const Header = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <Logo />
        </div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)} 
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button 
          className="nav-cta-button"
          onClick={() => scrollToSection('projects')}
        >
          Discover My Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
