import React from 'react';
// import simpleRestaurant from './assests/simple restaurant.png';
// import restaurantLocator from './assests/restaurant locator.png';
// import robofriends from './assests/robofriends app.png';

const Projects = ({ projectInfo }) => {
	return (
		<div id='projectSection'
		className='
			projectSection
			tc
			bg-washed-blue { background-color: var(--washed-green)
		'>
		<h2>Projects</h2>
			{
				projectInfo.map((project, i) => {
					return (
						<div className='projectCard'>
							<h3>{projectInfo[i].projectName}</h3>
							<p>{projectInfo[i].projectDescription}</p>
								<a href={projectInfo[i].projectLive} rel="noopener noreferrer" target='_blank'>
									<button>See Live</button>
								</a>
							<a href={projectInfo[i].sourceCode} rel="noopener noreferrer" target='_blank'>Source Code</a>
							<img src={projectInfo[i].projectImg} alt="project preview" />
						</div>
					);
				})
			}
		</div>
	);
}

export default Projects;