function setuserName(username){
    //compllex db call
    this.username = username;
}

function createUser(username,email,password){
    //setuserName(username);//reference
    setuserName.call(this, username);// reference hold

    this.email = email
    this.password = password
}

const userOne = new createUser("mia","mia@email.com","123")
console.log(userOne);








