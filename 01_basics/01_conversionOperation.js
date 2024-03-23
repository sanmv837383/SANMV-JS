let score = 33

console.log(typeof score);
console.log(typeof (score));

// consider the vaue here in number also contains variables than that can be converted to the number type and the output would be NaN-> not a number
// score =null would be converted to 0
// score = undefined would show NaN
// "33" => 33
// "33abc" => NaN

let  isLoggedIn = "sanjanaa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);