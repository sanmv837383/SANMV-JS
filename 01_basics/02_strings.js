const name = "sanjana"
const repoCount = 50

console.log(name + repoCount + "value");
//in modern times we use back ticks as it creates string interpolation
//there are placeholders where the values are stored

console.log(`heloo my name is ${name} and ${repoCount}`)

const gameName = new String('sanjanajc')
//string here is stored in the form of object where it shows as the key value PerformanceObserverEntryList

console.log(gameName[[0]]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = gameName.substring(-8,4)  //negative values are ignored and output would be given considering from the first position

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(gameName.split('a'));




