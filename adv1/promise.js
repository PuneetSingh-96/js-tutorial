const promiseOne = new Promise(function (resolve,reject){
    //Do async task
    //database, cryptography,network
    setTimeout(function(){
        console.log("Asyn task is completed")
        resolve();//help to complete code then move to next part
    },1000)
    
})

promiseOne.then(function(){
    console.log("Promise Completed")
})

//another way 

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn task 2 completed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : "joe", email : "joe@email.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false; //check for true
        if(!error){
            resolve({userName : "loe", password : "xyz123"});
        }
        else{
            reject("ERROR : Something is missing");
        }
    },1000)
})

// promiseFour.then().catch();

promiseFour.then(function(user){
    console.log(user);
    return user.userName;

}).then(function(userName){
    console.log(userName);

}).catch(function(error){
    console.log(error);

}).finally(()=>{
    console.log("either promise are resolve or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false; //check for true
        if(!error){
            resolve({userName : "Mahatma Gandhi", password : "BoloAjadi"});
        }
        else{
            reject("ERROR : Something is missing");
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         //console.log(response)
//         const data = await response.json(); //take time
//   9      console.log(data)
//     } catch (error) {
//         console.log("E : ", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data) //here we not use await 
})
.catch((error)=>{
    console.log(error)
})