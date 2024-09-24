const score = 400
console.log(score)

const balance = new Number(100.12345) //object
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //decimal value after point

const newnum = 123.9474
console.log(newnum.toPrecision(3)) //left to rigth check precision

const hunderth = 1000000
console.log(hunderth.toLocaleString('en-IN')) 

//==========================/////////======================//

//Maths

// console.log(Math);
// console.log(Math.abs(-1))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2)) //get high value
// console.log(Math.floor(4.9))//get low value
// console.log(Math.min(1,2,3,4,5,6,7,8,9))
// console.log(Math.max(1,2,3,4,5,6,7,8,9))

console.log(Math.random()) //0.1xyz
console.log(Math.random()*10) //1.xyz
console.log((Math.random()*10)+1) // in case we get 0.0123456 value

//in case we need in range value
min = 10
max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+ min)

