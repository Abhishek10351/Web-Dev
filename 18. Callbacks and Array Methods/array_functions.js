// arrow functions

const add = (x, y) => {
    return x + y;
};
// we don't need the curly braces if we have a single expression
//  we also don't need the name of the function

console.log(`add(3,4) = ${add(3, 4)}`);

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};

console.log(`rollDie() = ${rollDie()}`);

// we can also remove the parentheses if we have a single parameter
const square = (num) => {
    return num * num;
};

console.log(`square(4) = ${square(4)}`);

// implicit return - we can remove the return keyword if there is only one line
const flipCoin = () => (Math.random() > 0.5 ? "heads" : "tails");

// one liner implicit return
const double = (num) => num * 2;
