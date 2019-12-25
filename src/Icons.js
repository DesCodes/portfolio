import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
 
library.add(fab)

const Icons = () => {
	return (
		<div className='icons'>
			<div className='pie'>
				<div className='innerCircle'></div>
				<div className='triangle90'></div>
				<FontAwesomeIcon className='html5' icon={['fab', 'html5']} />
			</div>
			<div className='pie'>
				<div className='innerCircle'></div>
				<div className='triangle90'></div>
				<FontAwesomeIcon className='css3' icon={['fab', 'css3-alt']} />
			</div>
			<div className='pie'>
				<div className='innerCircle'></div>
				<div className='triangle80'></div>
				<FontAwesomeIcon className='js' icon={['fab', 'js-square']} />
			</div>
			<div className='pie'>
				<div className='innerCircle'></div>
				<div className='triangle80'></div>
				<FontAwesomeIcon className='react' icon={['fab', 'react']} />			</div>
			<div className='pie'>
				<div className='innerCircle'></div>
				<div className='triangle80'></div>
			 <FontAwesomeIcon className='github' icon={['fab', 'github-square']} />
			</div>
		</div>
	)
}

export default Icons;