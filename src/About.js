import React from 'react';
import profile from './assests/profile.png';
import Icons from './Icons.js';

const About = () => {
	return (
		<div id='aboutSection'
		className=' 
			aboutSection
			tc vh-50
		'>
			<h2>About</h2>
			<div className='flex justify-center'>
				<figure>
					<img className='aboutImg fl' src={profile} alt='developer profile' />
				</figure>
				<div>
					<p>
						I'm a problem solver that builds fully responsive websites from templates
					</p>
				</div>
			</div>
			<Icons />
		</div>
	);
}

export default About;