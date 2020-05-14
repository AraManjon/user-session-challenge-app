import React from "react"
import Message from "../../components/Message"
import Reset from "../../components/Reset"

const Session = ({onSession, session}) => {

    return (<>
        {<Message onSession={session}/>}
        {<Reset onSession={onSession}/>}
    </>
    );
}

export default Session;