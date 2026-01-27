import React from 'react';
import { FaCode, FaServer, FaTools, FaLanguage } from 'react-icons/fa';

const Container = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaLanguage className="skill-icon" />,
      skills: ['React.js', 'JavaScript', 'HTML5 & CSS', 'Tailwind CSS','Responsive Design']
    },
    {
      title: 'Backend',
      icon: <FaServer className="skill-icon" />,
      skills: ['PHP', 'Node.js', 'Restful APIs', 'Database Design']
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="skill-icon" />,
      skills: ['Git & GitHub','VS Code','Chrome DevTools','Webpack','Vite' ]
    },
    {
      title: 'Soft Skills',
      icon: <FaLanguage className="skill-icon" />,
      skills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Communication', 'Time Management']
    }
  ];

  return (
    <section className="section full-width-container">
      {/* <div className="skills-bg-text">MY SKILLS</div> */}
      <div className="skills-container">
        <h2 className="skills-heading reveal">Tools of the Trade</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-category-header">
                {category.icon}
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-bullet">•</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Container;