import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="text-primary">Joan Manuel Abeldaño</span>
          </h1>
          <h2 className="hero-subtitle">Backend developer</h2>
          <p className="hero-description">
            Passionate about creating innovative web solutions with modern technologies. 
            I turn ideas into functional digital experiences.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="code-content">
              <span className="code-keyword">const</span> developer = {'{'}
              <br />
              <span className="code-property">  name:</span> 'Joan Manuel Abeldaño',
              <br />
              <span className="code-property">  role:</span> 'Backend Developer',
              <br />
              <span className="code-property">  passion:</span> 'Coding'
              <br />
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;