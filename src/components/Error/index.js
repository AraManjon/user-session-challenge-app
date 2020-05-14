import React from 'react';

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

export default Error;