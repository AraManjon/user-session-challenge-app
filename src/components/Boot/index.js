import React from 'react';

import Error from "../../components/Error"
import Input from "../../components/Input"

const Boot = ({ onUsername, error, setError }) => {

    const onInput = () => {
        setError(null);
        onUsername(null);
    }
    
	return (
    <div className="writer">

            {error && <Error error={error} onInput={onInput}/>}

            {!error && <Input onUsername={onUsername}/>}
	</div>
	);
};

export default Boot;
