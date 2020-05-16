import React from 'react';
import PropTypes from 'prop-types';

const Input = ({onUsername}) => {

    return (
    <>
        <input className="input-area" placeholder="(please enter your username)" onChange={(event) => {
                
            onUsername(event.target.value);
        }}></input>
    </>
    );

}
Input.prototype = {
    onUsername: PropTypes.func
}
export default Input;