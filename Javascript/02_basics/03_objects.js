// const tinderUser = new Object()    --> singleton object
const tinderUser = {}         // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 
 
// console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sanjana",
            lastname: "Bharadwaj"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },   // objects within array
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //returns boolean values


 const course = {
    coursename: "js in hindi",
    price: "ggg",
    courseInstructor: "sanjana"
 }

//  course.courseInstructor 


// destructuring of arrays and objects could be done 
// whenever you see curly braces understand the restructuring is happening
const {courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor);

