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
		try{
			return await axios.get(url);
		}catch(error){
			throw Error(error.response.data);
		}
	}

	async post(url, data) {
		try {
			return await axios.post(url, data);
		} catch (error) {
			throw Error(error.response.data);
		}
	}
}
