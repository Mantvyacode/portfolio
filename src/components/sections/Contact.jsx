import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Let's Build Something Great</h2>
      <div className="contact-content">
        <p>I'm currently looking for new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, I'll get back to you as soon as possible!</p>
        <a href="mailto:your.email@example.com" className="email-link">your.email@example.com</a>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
