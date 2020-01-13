import React, { Component } from 'react';
import Icons from './Icons.js';
import VizSensor from 'react-visibility-sensor';
// const VisibilitySensor = require('../node_modules/react-visibility-sensor');


// const onChange = (isVisible) => {
//     console.log('element is now %s', isVisible ? 'visible' : 'hidden');
// }

// const ElementIsVisible = (props) => {
//     return (
//          <VisibilitySensor onChange={onChange}>
//          		{props.children}
//          </VisibilitySensor>
//     )
// }

class ElementIsVisible extends Component {
	state = {
		elementVisibility: false
	}
	render() {
		return(
			<VizSensor
				onChange={(isVisible) => {
					this.setState({elementVisibility: isVisible})
				}}
			>
				<Icons style={{
					opacity: this.state.elementVisibility ? 1 : 0.25,
					transition: 'opacity 500ms linear'
				}}/>
			</VizSensor>
		)
	}
}

export default ElementIsVisible;