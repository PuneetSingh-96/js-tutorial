// ES6

class User {
    constructor(userName,email,password)
    {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abs`;
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }
}

const userOne = new User("mia","mia@emial.com","123");
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());

//behind the scene

function userNew(userName,email,password)
{
    this.userName = userName;
    this.email = email;
    this.password = password;
}
userNew.prototype.encryptPassword = function(){
    return `${this.password}abs`;

}
userNew.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`;

}
const Newuser1 = new userNew("joe","joe@email.com","432")

console.log(Newuser1.encryptPassword())
console.log(Newuser1.changeUsername());

