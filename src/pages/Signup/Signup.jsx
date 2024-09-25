import React from 'react';

const Signup = () => {
	return (
		<div>
			<h2>Sign Up Page</h2>
			<form>
				<div>
					<label>Name:</label>
					<input type="text" required />
				</div>
				<div>
					<label>Email:</label>
					<input type="email" required />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" required />
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
