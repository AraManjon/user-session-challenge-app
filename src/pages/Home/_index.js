import React, { useState, componentDidMount } from "react"
import { withRouter } from "react-router-dom"

import { UserSessionAPI } from '../../infrastructure/http/userSessionAPI'
import { UserSessionService } from '../../application/user-session-service'
import { UserDataService } from '../../application/user-data-service'

import Button from "../../components/Button"
import Boot from "../../components/Boot"
import Session from "../../components/Session"

const Home = () => {

    const [username, setUsername] = useState(null);
    const [error, setError] = useState(null);
    const [session, setSession] = useState(localStorage.getItem('session') || null);
    const userSessionAPI = new UserSessionAPI();
    const userSessionService = new UserSessionService(userSessionAPI);
    const userDataService = new UserDataService(userSessionAPI);

    const handleUsername = (username) => {
        setUsername(username);
    }

    const handleResetSession= () => {
        setUsername(null);
        setSession(null);
        localStorage.clear();
    }

    const getToken = async () => {
        try {
            const response = await userSessionService.addSession(username);
            getUserSession(response.data);
        } catch ({message}) {
            setError(message);
        }
    }

    const getUserSession = async (data) => {
        try {
            const response = await userDataService.findUser(username, data.token);
            localStorage.setItem('session', response.data);
            setSession(response.data);
        } catch ({message}) {
            setError(message);
        }
    }
    
    componentDidMount() {
        setSession(localStorage.getItem('session'))
    }

    return (
        <>

        {session && 
        <Session onSession={handleResetSession} session={session}/>}

        {!session && 
        <Boot onUsername={handleUsername} error={error} setError={setError}/>}

        {<Button onToken={getToken} onUsername={username}/>}
        </>
    );
};

export default withRouter(Home)