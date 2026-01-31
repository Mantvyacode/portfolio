import React from 'react';
import { FaCode, FaServer, FaTools, FaLanguage, FaReact, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaNode, FaDatabase, FaGitAlt, FaChrome, FaBox, FaBolt, FaPuzzlePiece, FaUsers, FaSync, FaComments, FaClock } from 'react-icons/fa';

const Container = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaLanguage className="skill-icon" />,
      skills: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML5 & CSS', icon: <><FaHtml5 /><FaCss3Alt /></> },
        { name: 'Tailwind CSS', icon: <FaCode /> },
        { name: 'Responsive Design', icon: <FaCode /> }
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer className="skill-icon" />,
      skills: [
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'Restful APIs', icon: <FaCode /> },
        { name: 'Database Design', icon: <FaDatabase /> }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools className="skill-icon" />,
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Chrome DevTools', icon: <FaChrome /> },
        { name: 'Webpack', icon: <FaBox /> },
        { name: 'Vite', icon: <FaBolt /> }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaLanguage className="skill-icon" />,
      skills: [
        { name: 'Problem Solving', icon: <FaPuzzlePiece /> },
        { name: 'Team Collaboration', icon: <FaUsers /> },
        { name: 'Agile/Scrum', icon: <FaSync /> },
        { name: 'Communication', icon: <FaComments /> },
        { name: 'Time Management', icon: <FaClock /> }
      ]
    }
  ];

  return (
    <section className="section full-width-container">
      {/* <div className="skills-bg-text">MY SKILLS</div> */}
      <div className="skills-container">
        <h2 className="skills-heading reveal">Tools to Integrate</h2>
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
                    <span className="skill-icon-container">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
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