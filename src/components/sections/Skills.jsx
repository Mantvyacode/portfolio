import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Python', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'VS Code', 'Chrome DevTools', 'Figma', 'Webpack', 'Vite']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Communication', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Tools of the Trade</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
