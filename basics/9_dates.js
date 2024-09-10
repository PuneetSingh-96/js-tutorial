//dates

// let myDates = new Date()  //date method
// console.log(myDates.toString())
// console.log(myDates.toLocaleDateString())
// console.log(myDates.toLocaleString())
// console.log(myDates.toDateString())
// console.log(typeof myDates)

//create own date

// let myDate = new Date(2014 , 0 ,23)
// console.log(myDate.toString())

let myDatess = new Date("02-07-2025")
console.log(myDatess.toLocaleString())

let time = Date.now()
// console.log(time)
// console.log(myDatess.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday : "long",
    day : "numeric"

})


