// in function the function name and its definition is written
function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
    console.log("a");
}

// sayMyName()       //here this is the refernce of the function given

// function addTwoNumbers(number1, number2){        //here values given inside is known as parameters 
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){        //here values given inside is known as parameters 
    let result = number1+number2;
    return result                                //anything written in a function after the return never gets executed
    // return number1+number2 
}

const result = addTwoNumbers(3, 5)           //here values given inside is known as arguments

// console.log("Result", result);

function loginUserMessage(username){    // function loginUserMessage(username = "san") here default name passdin the function is san then the condition could never be false and always run with the default value  
    if(username == undefined)  //if(!username)
    {
        // console.log("Please enter a username"); 
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sanjana")) 

function calculateCartPrice(val1,val2, ...num1){     //rest operator(multiple values) and spread operator
   //function calculateCartPrice( ...num1) here everything is passed into the array and the values are stored as array but in the above condition two values are passed in val1 and val22 and the rest of the values are passed into the array
    return num1

}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "sanjana",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} an price is ${anyobject.price}`);
}

// handleObject(user) 
handleObject({
    username: "sana",
    price: 200
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 100]));