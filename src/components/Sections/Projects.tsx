import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import ProjectCard from '../UI/ProjectCard';
import type { Project } from '../Common/types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'DATA-UNSIS',
      description: 'A data hub for students information.',
      technologies: ['Java', 'SpringBoot', 'PostgreSQL'],
      githubUrl: 'https://github.com/DATA-UNSIS/DATA-UNSIS-BACKEND',
      liveUrl: '#'
    },
    {
      id: '2',
      title: 'ExamForge-UNSIS',
      description: 'An exam scheduling web application.',
      technologies: ['Python', 'FastAPI', 'MariaDB'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '3',
      title: 'AnyStore POS',
      description: 'A general purpose point of sale web application.',
      technologies: ['Java', 'SpringBoot', 'React', 'TypeScript', 'MariaDB'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '4',
      title: 'F1 DataDrive',
      description: 'A data hub for easy accesing F1 telemetry data graphs.',
      technologies: ['Python', 'FastAPI', 'MariaDB', 'FastF1'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];


  
  return (
    <AnimatedSection id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Here are some of my projects that showcase my skills and experience
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;