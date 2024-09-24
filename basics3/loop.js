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

//=================================//============================//

//brak and continue

for (let k = 0; k < 20; k++) {
    if(k==5){
        //console.log(`detect 5`);
        break;
    }
    //console.log(`value of i is ${k}`)
}

for (let k = 0; k < 20; k++) {
    if(k==5){
        //console.log(`unlike number k is : 5`);
        continue;
    }
    //console.log(`value of i is ${k}`)
}

//=======================//=====================//

// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    //console.log(num)
}

const greeting = "hello world !"
for(const greet of greeting){
    // if(greet == " "){
    //     continue;
    // }
    //console.log(`each char of greeting is ${greet}`)
}

//=======================//====================//

//map

const map = new Map()

map.set('IND',"INDIA")
map.set('USA',"United tate Of America")
map.set('FR',"France")
map.set('IND',"INDIA")//not add

//console.log(map)

for(const [key,value] of map){
    //console.log(key,":-",value);
}

const myobj = {
    game1: 'nfs',
    game2 : 'gta',
    game3 : 'maxpane'
}
// for(const [key,value] of myobj){
//     console.log(key ,':-', value)
// }
//note : for of is not used as iterator for objecct 

//==================//==========================//

//for in

const lang = {
    js:'javascipt',
    cpp:'c++',
    rb: 'ruby',
    swift : 'swift by apple'

}
for (const key in lang){
    //console.log(`${key} shortcut is extension of ${lang[key]}`)
}

map.set('IND',"INDIA")
map.set('USA',"United tate Of America")
map.set('FR',"France")

for(const key in map ){
    //console.log(key) //map key is not iterable
}

//=============================//===========================//

//foreach() loop

// array.forEach((element,index,array) => {
    
// });

const code = ["js","java","python","cpp","go","rust"]

code.forEach( function (item)  {
    //console.log(item);
} )

code.forEach( (val) => {
    //console.log(val)
})

const mycoding = [
    {
        langName : "javaScirpt",
        langfile : "js",
    },
    {
        langName : "cpp",
        langfile : "cpp",
    }
    ,
    {
        langName : "java",
        langfile : "java",
    },
    {
        langName : "Pyhthon",
        langfile : "py",
    }

]

mycoding.forEach((item)=>{
    //console.log(item.langName);
    //console.log(item.langfile);
})

//========================//============================//

//filter()

const mynums = [1,2,3,4,5,6,7,8]
const newnums = mynums.filter((num)=> num > 4)
    //console.log(newnums)

//note : use return function in {}   

const evenNum = mynums.filter((num)=> {
    if (num%2==0){
       return num
    }
})
//console.log(evenNum);

//============================//=================================//

//map()

const numbers = [0,1,2,3,4,5,6,7,8,9]
const newNUmbers = numbers.map((num )=> num + 10)
//console.log(newNUmbers)


const value = [0,1,2,3,4,5,6,7,8,9]

const new_val = value
               .map((val)=> val*10)
               .map((updated_newval)=> updated_newval+ 1)
               .filter((num)=> num > 50 )
//console.log(new_val)

//===============================//==================================//

//reduce()

const array = [0,1,2,3,4,5]

const newArray = array.reduce( function (accumaulator,currentValue) {
    //console.log("acc :"+accumaulator + " curr :"+currentValue)
    return accumaulator + currentValue
}, 0)
//console.log(newArray)

const updarray = array.reduce((acc,curr)=> acc + curr , 0)
console.log(updarray)

const shoppingcart = [
    {
        item_name: "js course",
        price : 499
    },
    {
        item_name: "python course",
        price : 299
    },
    {
        item_name: "java course",
        price : 899
    },
    {
        item_name: "c++ course",
        price : 399
    }
]

const cartprice = shoppingcart.reduce((acc,item) => (acc + item.price),0)
console.log(cartprice)
