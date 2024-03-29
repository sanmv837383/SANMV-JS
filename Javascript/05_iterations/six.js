const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item;
} )

console.log(values); 

// for each doesn't return anything even after using return it doesn't return
// when for each is stored in a variable it doesn't return anything and the output is undefined 
// hence to get the output we use filter() 


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// const newNumss = myNums.filter( (num) => {
//     return num > 4                //here a scope is started hence we have to use return keyword
//  } )

// we will do this using for each

const newNums = []

myNums.forEach ( (num) => {
    if ( num > 4) {
        newNums.push(num)
    }
})

//  here we are creating a stack and pushing the values in it

console.log(newNums);

let userBooks = books.filter( (bk) => bk.genre === "history" )
userBooks = books.filter( (bk) => { return bk.publish >= 1995})
userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "history"})

console.log(userBooks);
