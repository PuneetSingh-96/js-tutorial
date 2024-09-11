//singleton object
//const instagramUser = new Object()

//non singleton object (constructor)
const instagramUser = {}

instagramUser.name = "leo"
instagramUser.userId = "leo123"
instagramUser.isloggedIn = true

//console.log(instagramUser)

const regUser = {
    email : "myemail@gmail.com" ,
    userName : {
        fullname : {
            firstname : "leo",
            lastname : "choudhery"
        }

    }

}
//console.log(regUser.userName.fullname.firstname)

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3 = {obj1,obj2}
//console.log(obj3);
//console.log(Object.assign({},obj1 ,obj2)) // all object sore in {} if ther is no {} then store in first object in order

//console.log(obj3)
//console.log({...obj1, ...obj2})

const user = [
    {
        id :1,
        email : "a@email.com"
    },
    {
        id :2,
        email : "b@email.com"
    },
    {
        id :3,
        email : "c@email.com"
    },
    {
        id :4,
        email : "d@email.com"
    }
]

console.log(user[1].email)

console.log(Object.keys(instagramUser))
console.log(Object.values(instagramUser))
console.log(Object.entries(instagramUser))

console.log(instagramUser.hasOwnProperty(`isloggedIn`))







