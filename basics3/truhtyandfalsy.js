//const useremail = "myemail@gmail.com "
//const useremail = ""

// if(useremail){
//     console.log("got user email")
// }
// else{
//     console.log("dont have email")
// }

//falsy value

// => fasle , 0 ,-0 , BigInt 0n . "". null , undefined , NaN

//true value

// => "0", "false", "sapce",[],{},function(){}


//false == 0  (true)
//false == `` (true)
//0 == `` (true)


//nullish coalescing operator (??) : null undefined

let val1;

//val1 = 5 ?? 10   //=> 5
val1 = null ?? 10 
//val1 = undefined ?? 15

console.log(val1)