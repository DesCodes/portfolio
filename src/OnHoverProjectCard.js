import React from 'react';


class OnMouseOver extends react.Component {
	componentDidMount() {
		window.addEventListener('mouseover', this.handleMouseOver)
	}

	handleMouseOver() {
		const element = getElementsByClassName('hoverElement');
		const overlayText = getElementsByClassName('imgOverlayText');

		
		
	}
}

export default OnMouseOver;