import React from 'react';

const ProjectCard = ({ projectInfo }) => {
	return (
		projectInfo.map((project, i) => {
			return (
				<div key={i} className='projectCard card'>
					<h3>{projectInfo[i].projectName}</h3>
					<p>{projectInfo[i].projectDescription}</p>
						<br />
						<a className='seeLiveLink' href={projectInfo[i].projectLive} rel="noopener noreferrer" target='_blank'>
							<button>
								See Live
							</button>
						</a>
					<a className='souceCodeLink' href={projectInfo[i].sourceCode} rel="noopener noreferrer" target='_blank'>
						<button>
							Source Code
						</button>
					</a>
					<figure>
						<a className='hoverElement' href={projectInfo[i].projectLive} rel="noopener noreferrer" target='_blank'>
							<img src={projectInfo[i].projectImg} alt="project preview" />
							{/*<p className='imgOverlayText'>See Live!</p>*/}
						</a>
					</figure>
				</div>
			);
		})
	)
}

export default ProjectCard;