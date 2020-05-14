import { Username } from '../../domain/username';
import { Token } from '../../domain/token';

require('dotenv').config();

const API_URL = process.env.REACT_APP_USER_SESSION_CHALLENGE_API_URL;

/**
 * this class retrieve user session data
 * @requires username
 * @requires token
 * @returns user session data object with username, token and session date
 * @returns error when token is not valid
 * @returns error when username is empty
 * @returns error when username is not valid
 * @returns error when user session is not found
 * @returns error when service is not available
 */
export class UserDataService {
	constructor(userSessionApi) {
		this.userSessionApi = userSessionApi;
	}

	async findUser(username, token) {
		try {
			new Token(token);
			new Username(username);

			return await this.userSessionApi.get(`${API_URL}/info/${username}/${token}`);
		} catch ({ message }) {
			throw Error(message);
		}
	}
}
