import React from 'react'

const Button = ({ onToken, onUsername }) => {
	return (
		<button
			onClick={(event) => {
				event.preventDefault();
                
				onToken(onUsername);
			}}
			className="button"
			type="button"
		>
			Submit
		</button>
	);
};
export default Button;
