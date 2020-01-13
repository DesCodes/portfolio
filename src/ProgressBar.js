import React from 'react';

const ProgressBar = (props) => {
	return (
		<svg id='progressContainer' viewBox="0 0 100 100">
		  <path d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#686F7A" strokeWidth="5" fillOpacity="0"></path>
		  <path className='bar' d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke="#46C28E" strokeWidth="0" fillOpacity="0" 
		  	style={{strokeDasharray: `${props.strokeDasharray}`, 
		  	strokeDashoffset: `${props.strokeDashoffset}`}}>
	  	</path>
		</svg>
	)
}

export default ProgressBar;