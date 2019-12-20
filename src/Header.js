import React from 'react';

const Header = () => {
	return (
		<div className='
			bg-washed-blue { background-color: var(--washed-green); }
			vh-100
			flex items-center
			justify-center
		'>
			<h1 className='
				f1 lh-title 
				ma0
			'>
				Hello World! I'm 
				<span className=''> Desmond Tan</span>,
				<br/> the Developer you want on your team
			</h1>
		</div>
	);
}

export default Header;