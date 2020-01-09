import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import ProgressBar from './ProgressBar.js';
import {Utils} from './isScrolledIntoView.js';
 
library.add(fab, far)

const Icons = () => {
	return (
		<div className='icons'>
			<div className='container'>
				<FontAwesomeIcon className='html5' icon={['fab', 'html5']} />
				<ProgressBar strokeDasharray='340' strokeDashoffset='96' />
			</div>
			<div className='container'>
				<FontAwesomeIcon className='css3' icon={['fab', 'css3-alt']} />
				<ProgressBar strokeDasharray='340' strokeDashoffset='96' />
			</div>
			<div className='container'>
				<FontAwesomeIcon className='js' icon={['fab', 'js-square']} />
				<ProgressBar strokeDasharray='333' strokeDashoffset='95' />
			</div>
			<div className='container'>
				<FontAwesomeIcon className='react' icon={['fab', 'react']} />	
				<ProgressBar strokeDasharray='310' strokeDashoffset='96' />
			</div>
			<div className='container'>
				<FontAwesomeIcon className='github' icon={['fab', 'github-square']} />
				<ProgressBar strokeDasharray='340' strokeDashoffset='96' />
			</div>
		</div>
	)
}

export default Icons;