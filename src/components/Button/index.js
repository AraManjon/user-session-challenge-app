import React from 'react'

const Button = ({ onToken, username }) => {
	return (
		<button
			onClick={(event) => {
				event.preventDefault();
                
				onToken(username);
			}}
			className="button"
			type="button"
		>
			Submit
		</button>
	);
};
export default Button;
