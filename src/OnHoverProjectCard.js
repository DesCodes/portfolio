import React from 'react';


class OnHover extends react.Component {
	componentDidMount() {
		window.addEventListener('hover', this.handleHover)
	}

	handleHover() {
		const element = getElementsByClassName('hoverElement');
		const overlayText = getElementsByClassName('imgOverlayText');

		
	}
}

export default OnHover;