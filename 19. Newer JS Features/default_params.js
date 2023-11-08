// ways of keeping a default value in functions

// old method

function rollDie(sides) {
    if (sides == undefined) {
        sides = 6;
    }
    // sides = typeof sides != undefined ? sides : 6;
    // another way
    let value = Math.floor(Math.random() * sides) + 1;
    console.log(value);
}
console.log("Die rolling");
rollDie(10);
rollDie();

// new method

function add(a = 0, b = 0) {
    console.log(a + b);
}
console.log("Math");
add(7, 3);
add(3);

// default params should be written after non-default params
