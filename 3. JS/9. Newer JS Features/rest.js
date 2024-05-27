// collects all other arguments into an array

//  while spread expands iterables into a list of arguments
// rest collects all other arguments into an array

function sum() {
    // arguments is an array-like object
    // but it doesn't have array methods
    // so we can't use reduce on it
    // it contains all the arguments passed to the function,
    // if we don;t provide the function with any parameters, while defining it
    return arguments.reduce((total, el) => total + el)
}

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

console.log(sumAll(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function results(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`);
    console.log(`SILVER MEDAL GOES TO: ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

results("Tom", "Jerry", "Spike", "Tyke", "Butch", "Tuffy", "Nibbles");
