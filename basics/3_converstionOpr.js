let mark1 = 96
console.log(typeof (mark1));

let mark2 = "98";
console.log(typeof (mark2))

//converting mark2(string) into number
let newMark2 = Number(mark2)  //to convert in string we use String in place of Number
console.log(typeof (newMark2))

let mark3 = null
console.log(typeof (mark3))

let mark4 = true
console.log(typeof (mark4))

let mark5 = undefined
console.log(typeof (mark5))

//"33"=>33 Number
//33 => "33" String
//"33aa3" => NaN

let isLoggedIn = 1
let isLoggedOff = 0

console.log(Boolean (isLoggedIn))
console.log(Boolean (isLoggedOff))

let on = "on"  //true
console.log(Boolean (on))

let off = ""   //false
console.log(Boolean (off))

let number = 33
let strNumber = String(number)
console.log(strNumber)
console.log(typeof (strNumber))

===================///////////////===================//

operations

let value = 4
let negValue = -value

console.log(negValue)

basic

console.log(2+5)
console.log(7-4)
console.log(3*3)
console.log(10/5)
console.log(2%3)

let str1 = "hello"
let str2 = " javaScript"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
console.log(+false)
console.log(+"")
console.log(-"")
console.log("")
console.log(-true)
console.log(-false)
