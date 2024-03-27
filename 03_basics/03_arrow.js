const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        //it runs the current context
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

//in browser the global object is windows object - interview question

// function chai(){
//     let username = "sanjana"
//     console.log(this.username);     // output here is undefined as the this is used in function and it wont work in functions it works only inside objects
// }

// const chai() = function(){
//     let username = "sanjana"
//     console.log(this.username);
// }

const chai = () => {
    let username = "sanjana"
    console.log(this.username);
}

const addTwo = (num1, num2) => {
    return num1 + num2              //this is called as explicit return as we are explicitly using the return keyword in it
}
console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => (num1 + num2)   if parenthesis is used then there is no need of writing return keyword  hence this is called implicit return
//const addTwo = (num1, num2) => (num1 + num2)   these paranthesis creates a block and could be used to do anything in this block

const addTwo1 = (num1, num2) => ({username: "sanjana"})  // when objects are written it has to be written using the curly braces otherwise it wont return the value

const myArray = [2, 5, 3, 7, 8]
myArray.forEach(function() {})
myArray.forEach(()=> {})