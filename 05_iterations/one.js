// for 

// for (let i = 0; index < array.length; index++) {
//     const element = array[index];
//     //let index = 0; variable declaration and assigning the values
//     // index < array.length; condition check
//     // after the execution of the loop it gets incremented
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }
//  select the index and press ctrl + d and change all the element at once


// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10 ; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j =0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${1}`)

//     }
    
// }

for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j =0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${1}`)
        // console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
    
// }
// console.log(`value of i is ${index}`);

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    
}
console.log(`value of i is ${index}`);

