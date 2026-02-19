import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Discharge Summary Change',
      description: 'A web application for changing discharge summaries. Built with React, PHP, and MySQL.',
      liveLink: '#',
      repoLink: '#',
      tags: ['React', 'PHP', 'MySQL']
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
      <h2 className="reveal">Selected Projects</h2>
      <div className="full-width-projects-container">
        {projects.map((project) => (
          <div key={project.id} className={`full-width-project-card project-card-${project.id}`}>
            <div className="project-content">
              <div className="project-number">{project.number}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle"><em>Web Development</em></p>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tech-tag">{tag}</span>
                ))}
              </div>
              <a href={project.liveLink} className="view-project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
            <div className="project-image">
              <div className="image-container">
                <img 
                  src={`https://placehold.co/600x400/1A1A1A/FFFFFF?text=${project.title.replace(/\s+/g, '+')}`} 
                  alt={`${project.title} preview`} 
                  className="project-preview"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
