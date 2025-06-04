import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <section id="home">
          <Home />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills/>
        </section>

        <section id="experience">
          <Experience/>
        </section>

        <section id="contact">
          <Contact/>
        </section>
    </div>
  );
}

export default App;
