/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function SignUpForm({ setToken }) {
	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const response = await fetch(
				'https://fsa-jwt-practice.herokuapp.com/signup',
				{
					method: 'POST',
					body: JSON.stringify({ username, password }),
				}
			);

			const result = await response.json();
			console.log(result);

			setToken(result.token);
		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<>
		<div id='signUpForm'>
			<h2>Sign Up Here!</h2>
			{error && <p>{error}</p>}

			<form onSubmit={handleSubmit}>
				<label>
					Username:{' '}
					<input
						type='text'
						value={username}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</label>
				<label>
					Password:{' '}
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
		</>
	);
}
