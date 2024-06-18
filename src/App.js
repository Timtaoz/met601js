import React from 'react';
import Bio from './components/Bio';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Skills from './components/Skills';
import SkillsWheel from './components/SkillsWheel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio Public</h1>
        <nav>
          <a href="#bio">About</a>
          <a href="#interests">Interests</a>
          <a href="#resume">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="bio">
          <Bio />
        </section>
        <section id="interests">
          <Interests />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="skills">
          <Skills />
          <SkillsWheel />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
