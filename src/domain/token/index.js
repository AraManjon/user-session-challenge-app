const TOKEN_REGEX = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
/**
 *  validation token
 *  @returns error when token is not valid
 */
export class Token {

    constructor(token){
        if(!TOKEN_REGEX.test(token)) throw new Error(`${token} is not a valid token`)
        this.token = token; 
    }
    toString(){
        return this.token;
    }
}