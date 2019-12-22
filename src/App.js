import React from 'react';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contacts.js';
import { projectInfo } from './projectInfo.js';

function App() {
  return (
    <div>
      <Header />

      <About />

      <Projects projectInfo={ projectInfo } />

      <Contact />
    </div>
  );
}

export default App;
