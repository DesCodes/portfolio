import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
 
library.add(fab)

const Icons = () => {
	return (
		<div className='icons'>
			 <FontAwesomeIcon className='html5' icon={['fab', 'html5']} />
			 <FontAwesomeIcon className='css3' icon={['fab', 'css3-alt']} />
			 <FontAwesomeIcon className='js' icon={['fab', 'js-square']} />
			 <FontAwesomeIcon className='react' icon={['fab', 'react']} />
			 <FontAwesomeIcon className='github' icon={['fab', 'github-square']} />
		</div>
	)
}

export default Icons;