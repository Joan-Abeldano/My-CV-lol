import React from 'react';
import type { Experience } from '../Common/types';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="timeline">
      {experiences.map((exp) => (
        <div key={exp.id} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-period">{exp.period}</div>
            <h3 className="timeline-position">{exp.position}</h3>
            <h4 className="timeline-company">{exp.company}</h4>
            <ul className="timeline-description">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="timeline-technologies">
              {exp.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;