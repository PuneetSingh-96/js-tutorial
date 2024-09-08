//data type

// (1) Primitive typr data type
/*
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

// (2) Non Primitive typr data type
//Refernce type

/*
Arrays
Objects
Functions
*/

//==============/////======================//

const number = 100
const on = true
const value = null

const id = Symbol('123') 
const newId = Symbol('123')

console.log(id === newId) //false

const biggestNumber = 312147584611435874n

//===================////=======================//

//Arrays

const Fruit = ["apple","banana","pineappple","oranges"]

//object 

const newObject = {
    objName : "xyz",
    objValue : 23,
}

//Function

const myFunction = function(){
    console.log("my function")

}
console.log(myFunction())
console.log(typeof (myFunction))

// https://262.ecma-international.org/5.1/#sec-11.4.3

