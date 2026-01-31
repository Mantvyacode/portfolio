import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section about-section"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Text */}
      <div
        className="about-bg-text reveal"
        style={{
          position: "absolute",
          top: "70%",
          left: 0,
          transform: "translateY(-50%)",

          width: "100%",
          textAlign: "center",

          fontSize: "14vw", // slightly reduced so full text fits
          fontWeight: 950,
          lineHeight: 1,

          color: "rgba(255, 255, 255, 0.08)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",

          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        ABOUT ME
      </div>

      {/* Content */}
      <div
        className="about-container"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="about-left reveal-stagger">
          <h2 className="about-heading">
            <span style={{ color: "#FFFFFF" }}>FullStack</span> Developer{" "}
            <em>
              End-to-End Scalable Systems{" "}
              <span style={{ color: "#FFFFFF" }}>(UI → API)</span>
            </em>
          </h2>

          <div className="about-description" style={{ textAlign: "left", marginTop: "24px" }}>
            <p style={{ textAlign: "left", marginTop: "24px" }}>
              Currently enabling digital healthcare transformation at <strong>Kiran Multi Super Speciality Hospital</strong>, moving legacy paper workflows to integrated digital systems — from EMRs to real-time patient tracking.
            </p>

            <p>
              With a BCA background and hands-on experience in React, PHP, Node.js, and Databases Design, I build scalable, production-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
