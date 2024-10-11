//JS and Classes

//Opp

//Object
//1-collection of properties and method

//why we use opp

//part of opp
//-object literal

//1-constructor function
//2-Prototypes
//3-Classes
//4-Instances(new,this)

//Pillars of OPP

//Abstraction : Hide Details from user
//Encapsulation : wrap up the data (single unit)
//Inheritance : 
//Polymorphism : Manyform

const user = {
    userName : "joe",
    logginCount : 5,
    SignedIn : true,

    getUserDetail : function(){
        console.log(`user name is ${this.userName} and he is logged ${this.logginCount} time.`);
        console.log(this);
        
    }
}
//console.log(user.userName);
//console.log(user.getUserDetail());
console.log(this);

//constructor

const users = function(userName,logginCount,isLoggedIN){
    this.userName = userName;
    this.logginCount = logginCount;
    this.isLoggedIN = isLoggedIN;
    this.greeting = function () {
        console.log(`welcome ${userName} !`)
    }
    //return this;  //return implicit
}

//chexk result:

// const userOne = users("Leo",5,true);
// const userTwo = users("Mia",5,Flase);
// console.log(userOne);

const userOne = new users("Leo",5,true);
const userTwo = new users("Mia",5,false);
//console.log(userOne);
console.log(userOne.constructor);
//console.log(userTwo)


//new : create a new instance 
//1-new object is create
//2-constructor function call due to new
//3-this keyword inject

//instanceOf




