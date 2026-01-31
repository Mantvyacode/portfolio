import React from 'react';

const Skills = () => {
  console.log("Skills component rendering...");
  const skillCategories = [
    {
      title: '!!! FRONTEND TEST !!!',
      skills: [
        { name: 'REACT TEST', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'HTML5 & CSS3', icon: '🌐' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Responsive Design', icon: '📱' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', icon: '🐘' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'RESTful APIs', icon: '🔗' },
        { name: 'Database Design', icon: '🗄️' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Chrome DevTools', icon: '🔧' },
        { name: 'Webpack', icon: '📦' },
        { name: 'Vite', icon: '⚡' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'Team Collaboration', icon: '👥' },
        { name: 'Agile/Scrum', icon: '🔄' },
        { name: 'Communication', icon: '💬' },
        { name: 'Time Management', icon: '⏰' }
      ]
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
                    <span key={idx} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </span>
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
