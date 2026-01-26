import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking. Built with React, Node.js, and MongoDB.',
      liveLink: '#',
      repoLink: '#',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      number: '02',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      liveLink: '#',
      repoLink: '#',
      tags: ['React', 'Firebase', 'Material-UI', 'WebSocket']
    },
    {
      id: 3,
      number: '03',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations and optimized performance.',
      liveLink: '#',
      repoLink: '#',
      tags: ['React', 'Vite', 'CSS3', 'Animations']
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Selected Work</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
