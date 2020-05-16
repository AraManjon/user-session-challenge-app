import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ getToken, username }) => {
	return (
		<button
			onClick={(event) => {
				event.preventDefault();
                
				getToken(username);
			}}
			className="button"
			type="button"
		>
			Submit
		</button>
	);
};

Button.prototype = {
	getToken: PropTypes.func,
	username : PropTypes.string
}
export default Button;
