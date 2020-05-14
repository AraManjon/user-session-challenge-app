import axios from 'axios';
/**
 * this class send endpoints to API
 * 
 * @method get retrieve user session
 * @requires url
 * @returns user session
 * 
 * @method post create user session and retrieve user session token
 * @requires url
 * @requires data
 * @returns user session token
 */
export class UserSessionAPI {
	async get(url) {
		return await axios.get(url);
	}

	async post(url, data) {
		return axios.post(url, data);
	}
}
