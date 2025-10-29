import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ParticleBackground from './components/Layout/ParticleBackground';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import './styles/globals.css';
import './styles/layout/sections.css';
import './styles/components/header.css';
import './styles/components/buttons.css';
import './styles/components/cards.css';
import './styles/components/forms.css';
import './styles/sections/hero.css';
import './styles/sections/about.css';
import './styles/sections/skills.css';
import './styles/sections/experience.css';
import './styles/sections/projects.css';
import './styles/sections/contact.css';
import './styles/layout/footer.css';
import './styles/animations.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;