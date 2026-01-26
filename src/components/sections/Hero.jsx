import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
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
        
        <div className="hero-3d">
          <div className="computer-setup">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Desk Top */}
              <path d="M40 200L360 200L390 250L10 250Z" fill="#2A2A2E" />
              {/* Desk Edge */}
              <path d="M10 250L390 250L390 260L10 260Z" fill="#1A1A1E" />
              
              {/* Monitor Stand */}
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

              {/* Keyboard */}
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

              {/* Mouse */}
              <g transform="translate(290, 225)">
                <ellipse cx="0" cy="0" rx="12" ry="18" fill="#1A1A1E" />
                <path d="M-5 -10C-5 -15 5 -15 5 -10V-5H-5V-10Z" fill="#3C83F6" />
                <rect x="-1" y="-13" width="2" height="6" rx="1" fill="#0A0A0C" />
              </g>
            </svg>
          </div>
          <div className="floating-badge badge-3">React.js</div>
          <div className="floating-badge badge-2">PHP</div>
          <div className="floating-badge badge-1">Full Stack Developer</div>
        </div>
      </div>
    </section>
  );
};
 
export default Hero;
