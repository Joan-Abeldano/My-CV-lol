import React from 'react';
import AnimatedSection from '../UI/AnimatedSection';
import Timeline from '../UI/Timeline';
import type { Experience } from '../Common/types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: [
        'Led development of multiple web applications using React and Node.js',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: '2',
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: [
        'Developed responsive web applications using modern JavaScript frameworks',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Integrated with REST APIs and third-party services'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs']
    },
    {
      id: '3',
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: [
        'Built and maintained company website and internal tools',
        'Participated in agile development processes',
        'Learned modern development practices and tools'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git']
    }
  ];

  return (
    <AnimatedSection id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <div className="section-divider"></div>
      </div>
      
      <Timeline experiences={experiences} />
    </AnimatedSection>
  );
};

export default ExperienceSection;