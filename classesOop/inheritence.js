class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class teacher extends user {
    constructor(username ,email, password){

        super(username); //go parent class and accsess given varibale in parent class
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`Discount on new Course by ${this.username}`);
    }
}

const Joe = new teacher("joe","joe@email.com","543");
const jay = new user("jay");
Joe.addCourse()
jay.logMe()

// console.log(Joe instanceof teacher);
// console.log(Joe instanceof user);

// console.log(jay instanceof teacher);
// console.log(jay instanceof user);

