// tests if all the elements follow the given condition
// some returns true if it is true for any one of the elements
// while every returns true if it is true for all of the elements

const numbers = [1, 3, 5, 8, 54, 68, 72];

const allEven = numbers.every((num) => {
    num % 2 == 0;
});

console.log(allEven);

const isGreater = numbers.some((num) => {
    return num>=10;
});
// check if there are numbers greater than or equal to 10
console.log(isGreater);

