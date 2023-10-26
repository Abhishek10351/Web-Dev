function greet(name = "") {
    console.log(`Hello ${name}`);
    console.log("Have a pleasant day.");
}
greet("Abhishek");

let msg = "Dogs are awesome";
let character = "Spiderman";
const a= 10;
function test(){
    msg = "Dinosaurs are cool too🦖🦕"
    let character = "Diamond Head";
    const a= 20; // we can reset the value of a constant variable in a different scope
    console.log(msg);
    console.log(character);
    console.log(a);
}
console.log(msg);
console.log(character);
test();
console.log(msg);
console.log(character);
// if we don't use let keyword then it will change the global variable
// let keyword is used to create a local variable

// lexical scope
function outer() {
    let movie = "The Dark Knight";
    function inner() {
        let movie = "The Dark Knight Rises";
        console.log(movie.toUpperCase());
    }
    inner();
    console.log(movie.toUpperCase());
}
outer();
// lexical scope refers to the ability of inner function to access the variables of outer function

// function expression
let add = function (x, y) {
    return x + y;
}
console.log(add(10, 20)); // 30 (function name is not required)