import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-bg-text">ABOUT ME</div>

      <div className="about-container">
        <div className="about-left">
          {/* <span className="section-number">01 — ABOUT</span> */}
          <h2 className="about-heading">
            FullStack Developer <em>End-to-End Scalable Systems (UI → API)</em>
          </h2>
          <div className="about-description">
            <p>
              Currently shaping digital experiences as a <strong>Full-Stack Developer</strong>,
              where I lead the transition from complex requirements to fully integrated digital systems.
              From backend architecture to real-time user tracking — I build what matters.
            </p>
            <p>
              With a focus on performance and hands-on experience across
              React, Node.js, and cloud platforms — I bridge the gap between
              ambitious ideas and production-ready solutions.
            </p>
          </div>
          {/* <div className="about-dot"></div> */}
        </div>

        {/* <div className="about-right">
          <div className="about-badges">
            <span className="about-badge">1 Year Experience</span>
            <span className="about-badge">Full-Stack</span>
            <span className="about-badge">UI/UX Focus</span>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Building</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Problems Solved</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
