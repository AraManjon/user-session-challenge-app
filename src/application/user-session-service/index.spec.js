import { UserSessionService } from './index';
import { UserSessionAPI } from '../../infrastructure/http/userSessionAPI';
import axios from 'axios';

jest.mock('axios');

describe('user sesssion service', () => {
    let userSessionService;
    let userSessionAPI

    beforeEach(()=>{
        userSessionAPI = new UserSessionAPI();
        userSessionService = new UserSessionService(userSessionAPI);
    })

    it('should return a 200 status when is created a user session correctly', async ()=>{

        let token = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkzMzM4MDUsInN1YiI6InN0cmluZyJ9.o4pSOlVA1DdUCcfFAiUxhPSiKEjC6kMf_UEl2tMOOdE';
        const data = { message: token, status: 200}

        axios.post.mockImplementationOnce(() => Promise.resolve(data));

        const result = await userSessionService.addSession('username');
  
        await expect(result.message).toEqual(token);
        await expect(result.status).toEqual(200);
    })


    it('should throw an erroor when is created a user session with not valid username', async ()=>{
        axios.post.mockImplementationOnce(() => Promise.reject());

        await expect(userSessionService.addSession('._a')).rejects.toThrow(Error('._a is not a valid username'));
    })

    it('should throw an erroor when is created a user session with empty username', async ()=>{
        axios.post.mockImplementationOnce(() => Promise.reject());

        await expect(userSessionService.addSession('')).rejects.toThrow(Error('username cannot be empty'));
    })
})