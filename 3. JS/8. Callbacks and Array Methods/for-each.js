// the foreach array method in js

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//     console.log(number);
// });
function print(element) {
    console.log(element);
}
numbers.forEach(print);
numbers.forEach(function (el) {
    console.log(`Square of ${el} is ${el * el}`);
});
// output: 1 2 3 4 5

// return value of forEach is undefined
// forEach is a method on the array prototype

const movies = [
    {
        name: "Kung Fu Panda 2",
        score: 7.8,
    },
    {
        name: "Endgame",
        score: 8.4,
    },
    {
        name: "Lord of the Rings, Fellowship of the Ring",
        score: 8.8,
    },
];
movies.forEach(function (movie) {
    console.log(`${movie.name} - ${movie.score}/10`);
});
