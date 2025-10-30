import React from "react";
import AnimatedSection from "../UI/AnimatedSection";
import type { Contribution } from "../Common/types";
import ContributionCard from "../UI/ContributionCard";

const Contributions: React.FC = () => {
    const contributions: Contribution[] = [
        {
            id: '1',
            title: 'UnsiSmile',
            description: 'A clinical history digitizer web app.',
            contributionList: 'Added some endpoints and made backend for password recovery service.',
            githubUrl: '#'
        }
    ]

    return (
        <AnimatedSection id="projects" className="projects">
          <div className="section-header">
            <h2 className="section-title">Contributions</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Here are some of my projects that I contributed to
            </p>
          </div>
    
          <div className="projects-grid">
            {contributions.map((contribution, index) => (
              <ContributionCard key={contribution.id} contribution={contribution} index={index} />
            ))}
          </div>
        </AnimatedSection>
      );
};

export default Contributions;