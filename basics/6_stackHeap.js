//stack and heap

//Stack store (primitive data type)

let myName = "ifeelLeo"
//stored in a stack

let newName = myName
//console.log(newName)

newName = "leo"
// console.log( newName)

//heap store (Non Primitive data type)

let user1 = {
    name :  "abcd",
    email : "user@gamil.com"

}

let user2 = user1 //reference 
console.log(user1.email)

user2.email = "newUser@gmail.com" //email of user1 is due to refernce

console.log(user1.email)//changed value
console.log(user2.email)//current value