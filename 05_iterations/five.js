// for each

const coding = ["js", "ruby", "java", "cpp"]

coding.forEach( function (item) {} ) // here function name is not required as it is call back fuction
// parameter here is item            function name(parameter) {}
       console.log(val);


coding.forEach(function (val){
    console.log(val);
})

coding.forEach( (val) => {
    console.log(item);
} )

function printMe(item){     // takes item and print whatever is there in item
    console.log(item);

}

coding.forEach(printMe())

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    }
]

myCoding.forEach((item) => {
    console.log(item)
}