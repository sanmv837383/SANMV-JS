const userEmail = "sanjana.ai"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//  falsy values

// false, 0, -0, BigInt 0n, "" (empty string), null, undefined, NaN

// truthy values
// "0", 'false', " "(string with space), [], {}, function(){}

if (userEmail.length ===0) {
    console.log("Array is empty");
}

const emptyObject = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

false == 0 //true
falsee == '' //true
0 == '' //true

//Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10 // here usually the first value is the output
val2 = null ?? 10 // here 10 runs
val3 = undefined ?? 15 // here undefined runs
val4 = null ? 10 ?? 15 // first value it gets is executed here
console.log(val1);

//terniary operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")

