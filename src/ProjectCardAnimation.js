import React from 'react';
import ProjectCard from './ProjectCard.js';
import { projectInfo } from './projectInfo.js';

class ProjectCardAnimation extends React.Component {
  componentDidMount() {
  	window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
		const element = document.getElementById('projectSection');
    const card = document.getElementsByClassName('card');

    if ((window.innerHeight - window.scrollY) <= (element.scrollTop)) {
      console.log('bottom of page')
      for(let i=0; i<3; i++) {
      	card[i].classList.add('projectCardAnimate');
      }
    }
  }
  render() {
    return (
      <div 
      	className="content-container" 
      	id='projectContent' 
      	onScroll={this.handleScroll}
    	>
        <ProjectCard projectInfo={projectInfo} />
      </div>
    )
  }
}
 
export default ProjectCardAnimation;