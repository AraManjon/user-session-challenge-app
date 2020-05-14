import { Token } from '.';

describe('token', () => {
	it('should throw an error when token is not valid', () => {
		expect(() => new Token('')).toThrow(' is not a valid token');
	});

	it('should throw an error when token is not valid', () => {
		expect(() => new Token('091')).toThrow('091 is not a valid token');
	});
});
