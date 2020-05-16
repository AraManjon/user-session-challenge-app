import React from 'react';
import PropTypes from 'prop-types';
import Error from "../../components/Error"
import Input from "../../components/Input"

const Boot = ({ onUsername, error, onError }) => {

    const onInput = () => {
        onError();
        onUsername(null);
    }
    
	return (
    <div className="writer">

            {error && <Error error={error} onInput={onInput}/>}

            {!error && <Input onUsername={onUsername}/>}
	</div>
	);
};

Boot.propTypes = {
    onUsername: PropTypes.func,
    error: PropTypes.string,
    onError: PropTypes.func 
}

export default Boot;
