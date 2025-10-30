import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import SkillBar from '../UI/SkillBar';
import type { Skill } from '../Common/types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 50, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'FastAPI', level: 95, category: 'backend' },
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'SpringBoot', level: 90, category: 'backend' },
    { name: 'Java', level: 95, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'Firebase', level: 65, category: 'tools' },
    { name: 'Docker', level: 60, category: 'tools' },
    { name: 'Communication', level: 95, category: 'soft' },
    { name: 'Teamwork', level: 95, category: 'soft' },
    { name: 'Active Listening', level: 95, category: 'soft' },
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