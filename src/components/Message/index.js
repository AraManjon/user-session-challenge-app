import React from 'react';
var moment = require('moment');

const Message = ({ onSession }) => {
    return (
        <div className="writer">
            <p className="parraf" > Hello {onSession.username} <span role="img" aria-label="hello">👋</span> </p>
            <p className="parraf" >This is your session key </p>
            <p className="parraf__text-red" >{onSession.token}</p>
            <p className="parraf" >{moment(onSession.date).format('DD-MM-YYYY THH:mm:ss')}</p>
        </div>
	);
};

export default Message;