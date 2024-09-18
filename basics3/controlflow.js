//if statement

//if(condition == true){
    //code will run
//}

// const userloggedIn = true
// if(userloggedIn){
//     console.log("logged in succesful")
// }

//example
//if(2 == "2"){
// if (2 === "2"){
//     console.log("executed")
// }

//if and else


// const temp = 40;
// if(temp === 40){
//     console.log("temp is less than 50 degree")
// }
// else{
//     console.log("temp is so high")
// }


// const score = 200 
// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power}`)

const balance = 1000
//if(balance > 500) console.log(" no issue")

//nested if else
// if(balance < 500){
//     console.log(`less than 500`)
// }
// else if(balance < 750 ) {
//     console.log("less than 750 ")
// }
// else if(balance < 900 ) {
//     console.log("less than 900 ")
// }
// else{
//     console.log("more than 100")
// }


// const userlogIn = true
// const upiId = true
// if(userlogIn && upiId){
//     console.log("allow to buy course")
// }


// const loggedinFromGmail = true
// const logeesinFromFacebook = true
// if(logeesinFromFacebook || loggedinFromGmail){
//     console.log("user logged in")
// }


//switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const day  = "workingday"
switch (day) {
    case "workingday" :
        console.log("monday,tuesday,wednesday,thursday,friday")
        break;
    case "weekend" :
        console.log("saturday,sunday")
        break;

    default:
        console.log("specify the day")
        break;
}

//ternary operator

//condition ? true : false

const coffee_price = 100

coffee_price <= 80 ? console.log("affordable coffee") : console.log("not afforadable coffee")

