//IIFE : immediately Invoked Function Expression
// to remove variabl of global scope from polution global scope
//()()
//in first ()block we write defination of function
//in second()bloack we used to execute the code and to pass the value


//for immediately invoked function

//named iife
(function  code() {
    console.log("code is executed")
})(); //semi colon is used to stop iife


//simple iife
((name) => {
    console.log(`this is my name ${name}`);
})("leo")

