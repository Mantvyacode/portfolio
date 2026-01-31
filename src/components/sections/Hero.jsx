import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const computerRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero background parallax
      if (heroRef.current) {
        const yPos = -(scrollY * 0.2);
        heroRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      // Content parallax (slower)
      if (contentRef.current) {
        const yPos = -(scrollY * 0.1);
        contentRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      // Computer parallax (faster with rotation)
      if (computerRef.current) {
        const yPos = -(scrollY * 0.3);
        const rotation = scrollY * 0.02;
        computerRef.current.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
      }
      
      // Badges horizontal parallax
      if (badge1Ref.current) {
        const xPos = scrollY * 0.4;
        badge1Ref.current.style.transform = `translate3d(${xPos}px, 0, 0)`;
      }
      
      if (badge2Ref.current) {
        const xPos = scrollY * 0.6;
        badge2Ref.current.style.transform = `translate3d(${xPos}px, 0, 0)`;
      }
      
      if (badge3Ref.current) {
        const xPos = scrollY * 0.5;
        badge3Ref.current.style.transform = `translate3d(${xPos}px, 0, 0)`;
      }
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content reveal-stagger" ref={contentRef}>
          <h1>
            <span className="hero-name">MANTVYA</span>
            <span className="hero-code">CODE</span>
          </h1>
          <p>Full-Stack Dynamo powering scalable web innovations, electrifying user experiences, and everything in the dev pipeline.</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </button>
        </div>
        
        <div className="hero-3d reveal" ref={computerRef}>
          <div className="computer-setup">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Desk */}
              <g className="fall-desk">
                <path d="M40 200L360 200L390 250L10 250Z" fill="#2A2A2E" />
                <path d="M10 250L390 250L390 260L10 260Z" fill="#1A1A1E" />
              </g>
              
              {/* Monitor Stand */}
              <g className="fall-monitor">
                <rect x="195" y="170" width="10" height="30" fill="#1A1A1E" />
                <rect x="160" y="200" width="80" height="6" rx="2" fill="#111113" />
                
                {/* Monitor */}
                <rect x="110" y="50" width="180" height="120" rx="8" fill="#1A1A1E" />
                <rect className="screen-glow" x="118" y="58" width="164" height="104" rx="4" fill="#0A0A0C" />
                
                {/* Code Text */}
                <g className="svg-code-lines" style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 'bold' }}>
                  <text x="122" y="80" fill="#3C83F6" opacity="0.9">const dev = () =&gt; {"{"}</text>
                  <text x="132" y="95" fill="#E4572E" opacity="0.9">  code.run();</text>
                  <text x="132" y="110" fill="#3C83F6" opacity="0.9">  return 1;</text>
                  <text x="122" y="125" fill="#3C83F6" opacity="0.9">{"}"};</text>
                  <text x="122" y="140" fill="#22c55e" opacity="0.8">dev.start();</text>
                </g>
              </g>

              {/* Keyboard */}
              <g className="fall-keyboard">
                <g transform="translate(140, 215)">
                  <rect x="0" y="0" width="120" height="25" rx="2" fill="#1A1A1E" />
                  <rect x="5" y="4" width="15" height="6" rx="1" fill="#3C83F6" opacity="0.6" />
                  <rect x="25" y="4" width="10" height="6" rx="1" fill="#2A2A2E" />
                  <rect x="40" y="4" width="10" height="6" rx="1" fill="#2A2A2E" />
                  <rect x="55" y="4" width="60" height="6" rx="1" fill="#2A2A2E" />
                  <rect x="5" y="14" width="10" height="6" rx="1" fill="#2A2A2E" />
                  <rect x="20" y="14" width="80" height="6" rx="1" fill="#3C83F6" opacity="0.4" />
                  <rect x="105" y="14" width="10" height="6" rx="1" fill="#E4572E" opacity="0.6" />
                </g>
              </g>

              {/* Mouse */}
              <g className="fall-mouse">
                <g transform="translate(290, 225)">
                  <ellipse cx="0" cy="0" rx="12" ry="18" fill="#1A1A1E" />
                  <path d="M-5 -10C-5 -15 5 -15 5 -10V-5H-5V-10Z" fill="#3C83F6" />
                  <rect x="-1" y="-13" width="2" height="6" rx="1" fill="#0A0A0C" />
                </g>
              </g>
            </svg>
          </div>
          <div className="floating-badge badge-3" ref={badge3Ref}>React.js</div>
          <div className="floating-badge badge-2" ref={badge2Ref}>PHP</div>
          <div className="floating-badge badge-1" ref={badge1Ref}>Full Stack Developer</div>
        </div>
      </div>
    </section>
  );
};
 
export default Hero;
