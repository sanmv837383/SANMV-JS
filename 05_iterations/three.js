//  all these loops are array specific loops
//  for of

// ["" , "" , ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = " helo world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

//maps

const map = new Map()      // here the insertion order is remembered but in objects the insertion order is not remembered, stored in the form of key value pairs
map.set('IN', "India")
map.set('USA',"united states")

console.log(map);   //maps are unique

for (const key of Map) {
    console.log(key);
}

for (const [key,value] of Map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for(const [key,value] of myObject){
    console.log(key,':-',value);
}  // here the object is not iteratable but maps are iterable there is different method to iterate object

