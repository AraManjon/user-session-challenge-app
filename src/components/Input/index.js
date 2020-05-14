import React from 'react';

const Input = ({onUsername}) => {

    return (
    <>
        <input className="input-area" placeholder="(please enter your username)" onChange={(event) => {
                
            onUsername(event.target.value);
        }}></input>
    </>
    );

}

export default Input;