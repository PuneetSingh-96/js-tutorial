/*
function fuct_name (parameter){
    code
}
    console.log(fuct_name(argument))
*/

// function sum (num1, num2){
//     console.log(num1+num2);
// }
// console.log(sum(2,5));

function sum(number1,number2){

    let result = number1+number2;
    return result;

}
//console.log("result is" , sum(2,5));


function loginUserMsg (username){
    return `${username} just logged in`
}
//console.log(loginUserMsg("leo"));
//console.log(loginUserMsg("")); 
//console.log(loginUserMsg()); //undefined

function loggedOffmsg(username){
    if(username == undefined){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged off`;
}
//console.log(loggedOffmsg("leo"));
//console.log(loggedOffmsg())

function calculateCartPrice1(num1){
    return num1
}
console.log(calculateCartPrice1(200));

// function calculateCartPriceN(...num1){ //...(rest operator) 
//     return num1
// }
// console.log(calculateCartPriceN(200,300,400,))

function calculateCartPriceN(val1,val2,...num1){ //...(rest operator) 
    return num1
}
console.log(calculateCartPriceN(200,300,400,300))

const user = {
    username : "leo",
    id : 123,
}
function handelObj(anyobjecct){
    console.log(`user name is ${anyobjecct.username } and id is ${anyobjecct.id}`); //anyobject help to get and pass value which you define

}
//handelObj(user) //define obj
handelObj({
    username : "joe",
    id : 321
})

const myArr = [ 220,330,440,550,]
function returnSecondVlaue(getArray){
    return getArray[1]

}
//console.log(returnSecondVlaue(myArr))
console.log(returnSecondVlaue([220,300,400,500]))
