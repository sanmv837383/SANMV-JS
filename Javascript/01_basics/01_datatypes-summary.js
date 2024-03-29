/* Primitive 
call by value original value is not given the value is copied and given and the changes made are done in the copy place
7 types : string , number, boolean, null, undefined, symbol, bigint

const score = 100

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId); --false because the sybols are unique even everything in the symbol is same

const bigNumber = 3456567n


javascript is statically typed or dynamically typed statically typed or dynamically typed???


Reference (non primitive) datatype

array, objects, functions

const heroes = ["shaktiman","avengers"];     -- reference type or non returnable type
let myObj = {                                -- objects are always in the curly braces 
    name: "sanjana",
    age : 22, 
}

const myFunction = function(){
    console.log("hello world");
}
return typr os object function

mention and find out the return type of everything mentioned here

console.log(typeof anotherId);


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

stack(primitive type) heap memory(non primitive)

let myYoutubeName = "sanjanadotcom"

let anotherName = myYoutubeName

anothername = "sana"

whenever we use stack always the copy of what is existing is being altered not the main answer hence here in the shown
the value of the variable myYoutubeName is sanjanadotcom and it has not changed

here in the heap memory there is no copy created we just refer to the existing condition and refer to that condition
in heap memory only the non primitive data can be entered 

*/