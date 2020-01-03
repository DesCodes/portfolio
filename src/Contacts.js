import React from 'react';

const Contact = () => {
	return (
		<div className='contactSection'>
			<div className='wrapper'>
				<h2>Contact</h2>
				<div className='container'>
					<p>
						Feel free to drop me a message.
					</p>
					<form method='POST' action='https://submit-form.com/FIoJCv9P4I5-GjBhuPlog'>
						<label for='name'>Name</label>
						<input type='name' name='userName' required='true' placeholder='Name' />

						<label for='email'>Email</label>
						<input type='email' name='userEmail' label='email' required='true' placeholder='Email' />

						<label for='message'>Message</label>
						<textarea placeholder='Message' name='userMessage' required='true' />

						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;