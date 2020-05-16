import React from 'react';
import PropTypes from 'prop-types';
var moment = require('moment');

const Message = ({ session }) => {
    return (
        <div className="writer">
            <p className="parraf" > Hello {session.username} <span role="img" aria-label="hello">👋</span> </p>
            <p className="parraf" >This is your session key </p>
            <p className="parraf__text-red" >{session.token}</p>
            <p className="parraf" >{moment(session.date).format('DD-MM-YYYY THH:mm:ss')}</p>
        </div>
	);
};
Message.propTypes = {
    session: PropTypes.object
}
export default Message;