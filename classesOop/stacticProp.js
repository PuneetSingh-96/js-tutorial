class user {
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`${this.username} is logged in`)
    }
    static createID(){ //not for user access or out of class or child class
        return this.username + "123@#$";
    }
}

const newUser1 = new user("Mia");
console.log(newUser1.logMe());
console.log(newUser1.createID());

class teacher extends user {

    constructor(username,email){
        super(username);
        this.email = email;
    }
}
const mytacher = new teacher("Mia","MIA@emial.com")
console.log(mytacher.createID())
