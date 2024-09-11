//OBJECT

//object literals

const mySymbol = Symbol("my symbol")

const Jsuser = {
    name: "raone",
    age : 21 ,
    email : "myemail@google.com",
    isLoggedIn : false,
    lastLogginDate : [ "Monday","sunday"],
    //mySymbol : "my symbol" //string type
    [mySymbol] : "my symbol", //symbol type
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser[mySymbol])

Jsuser.email = "mynewemail@gmail.com"
// console.log(Jsuser["email"])

//Object.freeze(Jsuser)  // no updation in object
Jsuser.email = "mylatest@gmail.com"
//console.log(Jsuser["email"]) //no updation

Jsuser.greeting = function(){
    console.log("hi !")
}
//console.log(Jsuser.greeting)
console.log(Jsuser.greeting())

Jsuser.greeetingtwo = function(){
    console.log(`hello mr.${this.name} you are good learner ...`)
}
console.log(Jsuser.greeetingtwo())












