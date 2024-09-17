const user = {
    userName : "leo",
    score : 990,
    welcomeMsg : function (){
        console.log(`${this.userName}, welcome to my website`)
        //console.log(this)
    }
}
//user.welcomeMsg()

//user.userName = "joe"
//user.welcomeMsg()

//console.log(this)  //window is global object 

function myfunction(){
    let myname = "leo"
    //console.log(this);
    console.log(this.name)//undefined

    //note : this keyword only used in object not function

}
myfunction();

//note : function are not store context of this keyword

//arrow function

const mynewfunction = () => {
    let username = "leo"
    console.log(this);
}
//mynewfunction()

//explicit return
const addtwo = (num1 , num2) => {
    return num1 + num2
}
//console.log(addtwo(3,5));

//implicit return
//note : only for one line function

//no need parenthesis
//no return keyword is used without parenthesis 
//easy way to code
const addthree = (num1 , num2 , num3) => (num1 + num2 + num3)

//console.log(addthree(3,5,8));

//const  rtrn = (name) => {username : "leo"} //undefined
const  rtrn = (name) => ({username : "leo"}) //to return object used ()
console.log(rtrn())