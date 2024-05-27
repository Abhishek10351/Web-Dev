// destructuring

//  destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.

// 1. Array destructuring

const names = ["Panda", "Penguin", "Dog", "Cat", "Bird"];
// const animal1 = names[0];
// const animal2 = names[1];

const [animal1, animal2] = names;
console.log(animal1, animal2);
const [winner, silver, ...everyoneElse] = names;
// winner = 'Panda'
// silver = 'Penguin'
// everyoneElse = ['Dog', 'Cat', 'Bird'];
console.log(winner, silver, everyoneElse);

// adding a "..." before the variable name will take the rest of the values and put them into an array
//  else if you want to skip a value, you can leave a blank space in the array
// if we don't add the "..." at the last variable, it will only take the corresponding value and not the rest of the values

// 2. Object destructuring

const user = {
    email: "abcd@example.com",
    password: "12345",
    firstName: "John",
    lastName: "Doe",
    born: 1990,
    city: "New York",
    state: "New York",
    // died: 2015,
};

// const firstName = user.firstName;
// const lastName = user.lastName;

const { firstName, lastName } = user;
console.log(firstName, lastName);

// if we want to rename the variable, we can do it like this:
const { born: birthYear, city, state, died = "N/A" } = user;
// if the property doesn't exist, we can set a default value like this:
// else if we don't set a default value, it will be undefined
console.log(birthYear, city, state, died);

// 3. Parameter destructuring

function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}
console.log(fullName(user));

// we can also destructure the parameters like this:
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(fullName(user));

console.log();



const games = [
    {
        name: "God of War",
        score: 9.5,
        genre: "Action",
    },
    {
        name: "Uncharted 4",
        score: 9.7,
        genre: "Action",
    },
    {
        name: "The Last of Us",
        score: 9.8,
        genre: "Horror",
    },
];

const scores = games.map(({ name, score }) => {
    return `${name}: ${score / 10}`;
});
console.log(scores);