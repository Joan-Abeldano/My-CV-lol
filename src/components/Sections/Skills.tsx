import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import SkillBar from '../UI/SkillBar';
import type { Skill } from '../Common/types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Docker', level: 60, category: 'tools' },
  ];

  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'DevOps & Tools',
    soft: 'Soft Skills'
  };

  return (
    <AnimatedSection id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container">
        {Object.entries(categories).map(([key, title]) => {
          const categorySkills = skills.filter(skill => skill.category === key);
          if (categorySkills.length === 0) return null;

          return (
            <div key={key} className="skill-category">
              <h3 className="skill-category-title">{title}</h3>
              <div className="skill-list">
                {categorySkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default Skills;