import React from 'react';

const Reset = ({onSession}) =>{

    return (<>
        <button className="button__reset" onClick={(event)=>{
            event.preventDefault();
                
            onSession();
        }}>Reset</button>
    </>);
}

export default Reset;