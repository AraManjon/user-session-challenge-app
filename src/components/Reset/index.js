import React from 'react';
import PropTypes from 'prop-types';

const Reset = ({onResetSession}) =>{

    return (<>
        <button className="button__reset" onClick={(event)=>{
            event.preventDefault();
                
            onResetSession();
        }}>Reset</button>
    </>);
}
Reset.prototype = {
    onResetSession: PropTypes.func
}

export default Reset;