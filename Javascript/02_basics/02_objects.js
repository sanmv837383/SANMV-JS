// objects can be declared in two types - literals and constructors
//singleton - if any constructor is made then it is made in the form of singleton that means it is a separate entity as the object
//  it becomes as singleton only when it becomes from literals and not when it becomes fro literals
//object literals

//Object.create  //this is constructor way of creating the object
const mySym = Symbol("key1")  //interview question take a symbol and add it as a key and show


const JsUser = {
    name: "Sanjana",
    "full name": "sanjana bharadwaj",    //console.log(JsUser."full name") this is not allowed we have to use it as console.log(JsUser["full name"])
    age: 18,
    [mySym] : "myKey1",
    location: "Jaipur",
    email: "sana.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym]);  // here the return type is symbol as it is saved within the [] 
JsUser.email = "sanjana"
Object.freeze(JsUser)
JsUser.email = "sanjanamicrosoft"
console.log(JsUser);