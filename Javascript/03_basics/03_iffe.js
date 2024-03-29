// IFFE -> Immediately invoked function expression


function chai(){
    console.log(`DB CONNECTED`);
}
// chai()

//  sometimes our function get polluted because of the global scope hence we write iffe to avoid those things

(function chai1(){
    //  named IIFE
    console.log(`DB CONNECTED`);
})();
//  here semicolon is important to end the function as () wont know where to end the function

// first -> () function definition second -> () function execution

// iffe helps in function execution immediately but  also helps in avoiding the pollution of the function through the global scope

(() => {
    console.log(`DB CONNECTED2`);
})();

((name) => {
    console.log(`DB CONNECTED3 ${name}`);
})('sanjana');
