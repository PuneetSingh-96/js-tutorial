const course = {
    coursename : "js tutorial",
    price : 999,
    courseinstructor : "leo"

}
//console.log(course.courseinstructor)

//const{value} = object
const{courseinstructor} = course;
console.log(courseinstructor)


//changing name of value {valuename : newname} = obj
const {courseinstructor: instructor} = course;
console.log(instructor)


