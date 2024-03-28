const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// instead of for of loop we use for in loop for object iteration
for (const key in object) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py"]

for (const key in programming){
    console.log(programming[key]);
}