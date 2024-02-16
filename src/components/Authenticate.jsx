/* eslint-disable react/prop-types */

import { useState } from 'react';

export default function Authenticate({ token }) {
	const [error, setError] = useState(null);

	async function handleClick() {
		try {
			const response = await fetch(
				'https://fsa-jwt-practice.herokuapp.com/authenticate'
			);
			const result = await response.json();
			console.log(result);
		} catch (error) {
			setError(error.message);
		}
		console.log(token);
	}

	return (
		<>
			<h2>Authenticate</h2>
			{error && <p>{error}</p>}
			<button onClick={handleClick}>Authenticate Token</button>
		</>
	);
}
