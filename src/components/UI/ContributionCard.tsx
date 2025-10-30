import React from 'react';
import type { Contribution } from '../Common/types';

interface ContributionCardProps {
  contribution: Contribution;
  index: number;
}

const ContributionCard: React.FC<ContributionCardProps> = ({ contribution, index }) => {
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-image">
        <div className="project-placeholder">
          <span>Project Image</span>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{contribution.title}</h3>
        <p className="project-description">{contribution.description}</p>
        <p className="project-description">{contribution.contributionList}</p>
        <div className="project-technologies">
        </div>
        <div className="project-links">
          {contribution.githubUrl && (
            <a href={contribution.githubUrl} className="project-link">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributionCard;