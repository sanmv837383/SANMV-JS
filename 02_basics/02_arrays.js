// array

const arr = [0, 1, 2, 3, 4, "sanjana", "sheetal"]

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0]);

//array methods

//myArr.push(6)

myArr.unshift(9);
myArr.shift();  //i dont know it does

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();

console.log(myArr); //adding values to the arrays
console.log(newArr); 

// slice, splicce

console.log("A",myArr);

const myn1 = myArr.slice(1,3)           // here in slice the existing array is changed and there is no manipulation being done in the array
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)        //here in the splice operation the original array is also manipulated 
console.log(myn2);
console.log("C", myArr);