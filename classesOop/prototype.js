//Prototype

let myName = "Mahatma    Gandhi";
//console.log(myName.trim().length)
// console.log(myName.trueLength);


let hero = ["thor","spiderman","ironman"];

let heroPower = {
    thor: "hammer",
    spiderman : "web",
    ironman : "iron suit",

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}
Object.prototype.myObj = function(){
    console.log("created a object in prototype")
 }

// heroPower.myObj()
// hero.myObj();

Array.Object.arrObj = function(){
    console.log("created a object in prototype of array")
}
hero.arrObj();
// heroPower.arrObj();

//inheritence

const user = {
    name : "mia",
    email : 'mia@email.com'
}

const Teacher = {
    makeVideo : true,
}
const TeachingSupport = {
    isAvailable : false;
}
const TASupport = {
    makeAssignment : 'js Assignment',
    fullTime : true,
    __proto__:TeachingSupport,
}
Teacher.__proto__ = user

//mordern Syntax:

Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "joe     ";

String.prototype.trueLength = function(){
    //console.log(this);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mahatma Ganghi    ".trueLength()
