import React from 'react';
import { projectInfo } from './projectInfo.js';
import ProjectCard from './ProjectCard.js';
import ProjectCardAnimation from './ProjectCardAnimation.js';

const Projects = () => {
	return (
		<div id='projectSection'className='projectSection'>
			<div>
				<h2>Projects</h2>
				<ProjectCardAnimation id='projectContent'>
					<ProjectCard projectInfo={ projectInfo } />
				</ProjectCardAnimation>	
			</div>
		</div>
	);
}

export default Projects;