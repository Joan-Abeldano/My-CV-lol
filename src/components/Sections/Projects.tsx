import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import ProjectCard from '../UI/ProjectCard';
import type { Project } from '../Common/types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecast and location services',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
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
          Here are some of my recent projects that showcase my skills and experience
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