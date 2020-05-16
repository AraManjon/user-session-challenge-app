import { UserDataService } from './index';
import { UserSessionAPI } from '../../infrastructure/http/userSessionAPI';
import axios from 'axios';

jest.mock('axios');

describe('user data service', () => {
	let userDataService;
	let userSessionAPI;

	beforeEach(async () => {
		userSessionAPI = new UserSessionAPI();
		userDataService = new UserDataService(userSessionAPI);
	});

	it('should return user data correctly', async () => {
		const currentDate = new Date().toDateString();
		let username = 'username';
		let token =
			'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkzMzM4MDUsInN1YiI6InN0cmluZyJ9.o4pSOlVA1DdUCcfFAiUxhPSiKEjC6kMf_UEl2tMOOdE';
		let data = { data: { username: username, token: token, date: currentDate }, status: 200 };

		axios.get.mockImplementationOnce(() => Promise.resolve(data));
		const result = await userDataService.findUser(username, token);

		await expect(result.username).toEqual(data.username);
		await expect(result.token).toEqual(data.token);
		await expect(result.date).toEqual(data.date);
		await expect(result.status).toEqual(data.status);
	});

	it('should throw an error when is retrieved a user session with empty username', async () => {
		let username = '._a';
		let token =
			'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkzMzM4MDUsInN1YiI6InN0cmluZyJ9.o4pSOlVA1DdUCcfFAiUxhPSiKEjC6kMf_UEl2tMOOdE';

		axios.get.mockRejectedValueOnce('._a is not a valid username');

		await expect(userDataService.findUser(username, token)).rejects.toThrow(
			new Error('._a is not a valid username')
		);
	});

	it('should throw an error when is retrieved a user session with not valid token', async () => {
		let username = 'username';
		let token = '0';

		axios.get.mockRejectedValue('0 is not a valid token');

		await expect(userDataService.findUser(username, token)).rejects.toThrow(
            new Error('0 is not a valid token'));
	});
});
