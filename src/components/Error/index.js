import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error, onInput}) => {

    return (
    <>
        <p className="input-area"> Ooops! something went wrong... {error}.</p>

        <button className="input-area--click button--click" onClick={(event) =>{

            onInput();
        }}>Click here to try again <span role="img" aria-label="strong">💪</span></button>
    </>
    );
}

Error.prototype = {
    error: PropTypes.string,
    onInput : PropTypes.func
}

export default Error;