const USERNAME_REGEX = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
/**
 *  validation username
 *  @returns error when username is emtpy
 *  @returns error when username is not valid
 */

export class Username{

    constructor(username){
        if(username === '' || username === null) throw new Error('username cannot be empty')
        if(!USERNAME_REGEX.test(username)) throw new Error(`${username} is not a valid username`)
    }

    toString(){
        return this.username;
    }
}