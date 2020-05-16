import React from "react"
import PropTypes from 'prop-types';
import Message from "../../components/Message"
import Reset from "../../components/Reset"

const Session = ({onResetSession, session}) => {

    return (<>
        {<Message session={session}/>}
        {<Reset onResetSession={onResetSession}/>}
    </>
    );
}

Session.prototype = {
    session: PropTypes.shape({
        username: PropTypes.string,
        token: PropTypes.string,
        date: PropTypes.object
    }),
    onResetSession: PropTypes.func
}

export default Session;