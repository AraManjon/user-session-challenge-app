import { Username } from '.';

describe('username', () => {
	it('should throw an error when username is empty', () => {
		expect(() => new Username('')).toThrow('username cannot be empty');
	});

	it('should throw an error when username is null', () => {
		expect(() => new Username(null)).toThrow('username cannot be empty');
	});

	it('should throw an error when username is not valid format', () => {
		expect(() => new Username('._a')).toThrow('._a is not a valid username');
	});
});
