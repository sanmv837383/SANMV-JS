let a = 10
const b= 20
var c = 30

if (true){
let a = 10
const b= 20
var c = 30  // this is comming out of the scope and executing
}
// things written in scope should not go out of scope
// different scope is there in windows and in the console -->interview question 

// console.log(a);
// console.log(b);
// console.log(c);

// nested scope
function one(){
    const username= "sanjana"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
   // console.log(website);     //scope out
}
//console.log(username);       //scope out

// ++++++++++++++++++++++++interesting++++++++++++++++++++++


addone(5)

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num +2
}
//  this is known as hoisting as the variables cannot be called before the declaration
