
function greet(name = "") {
    console.log(`Hello ${name}`);
    console.log("Have a pleasant day.");
}
greet("Abhishek");

let msg = "Dogs are awesome🐕";
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
console.log(add(10, 20));
// 30 (function name is not required)

// higher order functions - functions that operate on/with other functions
// they can accept other functions as arguments and return a function
function callTwice(func) {
    func();
    func(); // use a function as an argument
}
function laugh() {
    console.log(":)");
}
let test1 = callTwice(laugh);

function makeMysteryFunc() {
    const rand = Math.random();
    // returns a function
    if (rand > 0.5) {
        return function () {
            console.log("YOU WIN A MORBILLION DOLLARS!!");
        };
    } else {
        return function () {
            console.log("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
        };
    }
}
let mystery = makeMysteryFunc();
mystery();

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    };
}


let isadult = makeBetweenFunc(19, 50);
console.log(isadult(20));

// defining methods

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num; // defining a method
    },
    cube (num) {
        return num ** 3; // another way to define a method
    }
}

// shorthand method syntax
console.log(myMath.PI);
console.log(myMath.square(2));
console.log(myMath.cube(2));


// this keyword
// refers to the object that is executing the current function

const dog = {
    name: "Spike",
    color: "White",
    breed: "Bull Dog",
    bark() {
        console.log(`${this.name} says woof!`);
    }
}
dog.bark(); // Spike says woof!
let bark = dog.bark;
bark(); // undefined says woof! -> this keyword refers to the global object
// it doesn't work because the this keyword is not pointing to the dog object


bark = dog.bark.bind(dog);
// Call the bark() function through the bark variable
bark(); // Spike says woof!


// exceptions

try {
    hello.toUpperCase();
}
catch {
    console.log("ERROR!!!");
}

try {
    hello.toUpperCase();
}
catch (e) {
    console.log("ERROR!!!");
    // console.log(e);
    console.log(e.name);
}