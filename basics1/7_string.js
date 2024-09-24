//String 

const name = "leo"
const repoCount = 50

// console.log( name + repoCount + "value")

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

//string interpulation -> ${}

const newname = new String("ifeelLeo") // run on console  //undefined

// console.log(newname[0])
// console.log(newname.__proto__)

//method
// console.log(newname.length)
// console.log(newname.toUpperCase());
// console.log(newname.charAt(2));
// console.log(newname.indexOf('e'))

// const newname2 = newname.slice(0,6)
// console.log(newname2)
// const newname3 = newname.substring(-1,4)
// console.log(newname3)

// const newstr =  "  fkm kmvlm dfm             "
// console.log(newstr.trim())

const url = "https://google.com"
console.log(url.replace('google','facebook'))

let newurl = "my new url is awsome"
console.log(newurl.split(' '))
