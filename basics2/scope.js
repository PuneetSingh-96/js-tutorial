//scope {}

let a;
if (true){
    a = 20
    const b = 30
    var c = 50
}
//console.log(a);
//console.log(b);
//console.log(c);  //we can access outside the scope

function first(){
    const firstname = "leo";
    function sec(){
        const lastname = "mark"
        console.log(firstname )
    }
    //console.log(lastname) //no assces
    sec()
}
first()

if(true){
    const username = "mona"
    if(username === "mona"){
        const website = "insta"
        console.log(username + website)
    }
    //console.log(website)  //local scope
}
//console.log(username)  //local scope

//==============interesting================//


//addone(5)    //
function addOne(num){
    return num + 1;
}
addOne(5)

//addtwo(4)  addtwo is declare
const addtwo = function(num){ //experesiion
    return num + 2
}
addtwo(4)








