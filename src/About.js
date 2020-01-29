import React from 'react';
import profile from './assests/profile.png';
import Icons from './Icons.js';
import ProgressBarAnimation from './ProgessBarAnimation.js';

const About = () => {
	return (
		<div id='aboutSection'className='aboutSection'>
			<div className='wrapper'>
				<h2>About</h2>
				<div className='container'>
					<figure>
						<img className='aboutImg' src={profile} alt='developer profile' />
					</figure>
					<div>
						<p>
							I'm an ambitious problem solver that builds fully responsive websites from templates
						</p>
					</div>
				</div>
				<ProgressBarAnimation>
					<Icons />
				</ProgressBarAnimation>
			</div>
		</div>
	);
}

export default About;