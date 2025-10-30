import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2025 Joan Manuel Abeldaño. Built with React & TypeScript</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Joan-Abeldano" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;