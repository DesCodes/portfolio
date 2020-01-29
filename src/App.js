import React from 'react';
import './App.css';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contacts.js';
// import { projectInfo } from './projectInfo.js';


const App = () => {
	return (
			<div>
	      <Header />

	      <About />

	      <Projects />

	      <Contact />
	    </div>
	)
}


export default App;