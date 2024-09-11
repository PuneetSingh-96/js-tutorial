const mcu = ['ironman','captainAmerica','hulk','thor']
const dc = ["superman",'batman','flash','cyborg']

// mcu.push(dc)// add as an array  
// console.log(mcu)
const hero = mcu.concat(dc)
//console.log(hero)

const allHero = [...mcu, ...dc] //same as concat
// console.log(allHero)

const matrixArr = [1,2,3[4,5[6,7,[8,9]]]]
const newMatrix = matrixArr.flat(Infinity)
// console.log(newMatrix)

//console.log(Array.isArray("ifeelleo")) //false (string)
//console.log(Array.from("ifeelleo")) //convert in array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Arrays.of(score1,score2,score3,score4))




