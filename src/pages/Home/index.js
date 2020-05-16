import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { UserSessionAPI } from '../../infrastructure/http/userSessionAPI'
import { UserSessionService } from '../../application/user-session-service'
import { UserDataService } from '../../application/user-data-service'

import Button from "../../components/Button"
import Boot from "../../components/Boot"
import Session from "../../components/Session"


class Home extends Component{

    constructor(){
        super();

        this.state = {
            username: localStorage.username || null, 
            error: null,
            session: (localStorage.username && localStorage) || null
        };
    }

    userSessionAPI = new UserSessionAPI();
    userSessionService = new UserSessionService(this.userSessionAPI);
    userDataService = new UserDataService(this.userSessionAPI);

    handleUsername = (username) => this.setState({username});
    

    handleResetSession = () => {
        this.setState({username: null, session: null})
        localStorage.clear();
    }

    handleError = (message) => this.setState({error: message});
    
    getToken = async () => {
        try {
            const response = await this.userSessionService.addSession(this.state.username);
            this.getUserSession(response.data);
        } catch ({message}) {
            this.handleError(message);
        }
    }

    getUserSession = async (data) => {
        try {
            const response = await this.userDataService.findUser(this.state.username, data.token);
            const responseDataKeys = Object.keys(response.data);
            responseDataKeys.forEach(key => localStorage.setItem(key, response.data[key]))
            this.setState({session:localStorage})
        } catch ({message}) {
            this.handleError(message);

        }
    }

    render(){
        return (
            <>
    
            {this.state.session && 
            <Session onResetSession={this.handleResetSession} session={this.state.session}/>}
    
            {!this.state.session && 
            <Boot onUsername={this.handleUsername} error={this.state.error} onError={this.handleError}/>}
    
            {<Button getToken={this.getToken} username={this.state.username}/>}
            </>
        );
    }
};

export default withRouter(Home)

