import React, { createContext, useContext, useEffect } from 'react';

const ParallaxContext = createContext();

export const useParallaxContext = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error('useParallaxContext must be used within a ParallaxProvider');
  }
  return context;
};

export const ParallaxProvider = ({ children, isEnabled = true }) => {
  useEffect(() => {
    if (!isEnabled) return;

    const style = document.createElement('style');
    style.textContent = `
      .parallax-element {
        transition: transform 0.1s ease-out;
        will-change: transform;
      }
      
      @media (prefers-reduced-motion: reduce) {
        .parallax-element {
          transform: none !important;
          transition: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [isEnabled]);

  return React.createElement(
    ParallaxContext.Provider,
    { value: { isEnabled } },
    children
  );
};

export const withParallax = (Component, parallaxOptions = {}) => {
  return function ParallaxWrapper(props) {
    const { isEnabled } = useParallaxContext();
    
    if (!isEnabled) {
      return React.createElement(Component, props);
    }

    return React.createElement(
      'div',
      {
        className: 'parallax-element',
        style: {
          transform: 'translate3d(0, 0, 0)',
          ...parallaxOptions.style
        }
      },
      React.createElement(Component, props)
    );
  };
};

export default ParallaxProvider;