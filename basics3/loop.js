//for loop

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;

    if(element == 5){
        //console.log("5 mid number")
    }
    //console.log(element);
}

// for(let i=0; i<=10; i++){
//     console.log("outer loop : " + i)
//     for(let j=0; j<=10; j++ ){
//         console.log("inner loop : " + j)
//     }
// }

// for(let i=1; i<=10; i++){
//     console.log("Table of " + i)
//     for(let j=1; j<=10; j++){
        
//         console.log( i + " * " + j + " = " +i*j )
//     }
// }

let myArr = [ "flash", "batman", "superman"]
//console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    //console.log(element)
}

//brak and continue

for (let k = 0; k < 20; k++) {
    if(k==5){
        console.log(`detect 5`);
        break;
    }
    console.log(`value of i is ${k}`)
}

for (let k = 0; k < 20; k++) {
    if(k==5){
        console.log(`unlike number k is : 5`);
        continue;
    }
    console.log(`value of i is ${k}`)
}
