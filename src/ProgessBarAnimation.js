import React from 'react';
import Icons from './Icons.js';

class ProgressBarAnimation extends React.Component {
  componentDidMount() {
  	window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
		const element = document.getElementById('icons');
		const bar = document.getElementsByClassName('bar');
    
    if ((window.innerHeight - window.scrollY) <= (element.offsetHeight + element.scrollTop)) {
      console.log('bottom of page')
      for(let i=0; i<5; i++) {
      	bar[i].classList.add('progressBar');
      }
    }
  }
  render() {
    return (
      <div className="content-container" onScroll={this.handleScroll}>
        <Icons />
      </div>
    )
  }
}
 
export default ProgressBarAnimation;