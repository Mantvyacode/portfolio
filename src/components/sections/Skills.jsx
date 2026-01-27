import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript','HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['PHP', 'Node.js', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'Webpack', 'Vite']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Communication', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="section skills-section-full">
      <div className="skills-bg-text">MY SKILLS</div>
      
      <div className="skills-container-full">
        <h2 className="skills-heading-full reveal">Tools of the Trade</h2>
        <div className="skills-grid reveal-stagger">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-row">
              <div className="skill-row-number">{index + 1}</div>
              <div className="skill-row-content">
                <h3 className="skill-row-title">{category.title}</h3>
                <div className="skill-row-items">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
