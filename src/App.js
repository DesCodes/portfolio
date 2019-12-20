import React from 'react';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import { projectInfo } from './projectInfo.js';

function App() {
  return (
    <div>
      <Header />

      <About />

      <Projects projectInfo={ projectInfo } />
    </div>
  );
}

export default App;
