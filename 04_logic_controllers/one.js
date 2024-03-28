// if

// if(condition){
    
// }

// if (true){   // if the condition is true then the loop will execute

// }
//if (false){   // if the condition is false then the loop will not execute

    // }

// const isUserLoggedIn = true;

// if (isUserLoggedIn){

// }

// <,>, <=, >=, ==, != , === (when even the datatype matters), !==


// const score = 200

// if (score>100){
//     const power = "fly"
//     // let power = "fly"     let has the scopes and executes as the const
//     var power = "fly"
//     // var power = "fly" the scope of var is completely global there is no local scope for var
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2");      dont write codes like this

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");

// } else if (balance < 900){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy courses");
}

if( loggedInFronGoogle || loggedInFromGmail) {
    console.log("user logged in");
}
