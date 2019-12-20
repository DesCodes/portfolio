import React from 'react';
import profile from './assests/profile.png';

const About = () => {
	return (
		<div id='aboutSection'
		className=' 
			aboutSection
			tc vh-50 ma4
		'>
			<h2>About</h2>
			<div className='flex justify-center'>
				<img className='aboutImg fl pa2' src={profile} alt='developer profile' />
				<p className=''>I'm a problem solver that builds fully responsive websites from templates</p>
			</div>
		</div>
	);
}

export default About;