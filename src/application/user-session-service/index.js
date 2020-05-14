import { Username } from '../../domain/username';

require('dotenv').config();

const API_URL = process.env.REACT_APP_USER_SESSION_CHALLENGE_API_URL;
/**
 * this class rcreate user session and retrieve token session
 * @requires username
 * @returns user session token
 * @returns error when username is empty
 * @returns error when username is not valid
 * @returns error when service is unavailable
 */
export class UserSessionService {
	constructor(userSessionApi) {
		this.userSessionApi = userSessionApi;
	}

	async addSession(username) {
		try {
			new Username(username);
			const data = {
				username: username
			};
			return await this.userSessionApi.post(`${API_URL}/session`, data);
		} catch ({ message }) {
			throw Error(message);
		}
	}
}
