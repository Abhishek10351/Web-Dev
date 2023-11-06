// the map array method
// used to iterate over an array and apply some sort of transformation or
// calculation on each element in the array
const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(function (num) {
    return num * 2;
});

console.log(doubles);

let cars = ["Audi", "BMW", "Mercedes", "Volkswagen", "Skoda"];

let upperCaseCars = cars.map((car) => {
    return car.toUpperCase();
});

console.log(upperCaseCars);


// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

const firstNames = fullNames.map((name) => {
    return name.first;
});