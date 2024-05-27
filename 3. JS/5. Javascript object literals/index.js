// object literals in javascript

const person = {
    name: "John",
    age: 24,
    hobbies: ["music", "movies", "sports"],
};

console.log(person.name);
console.log(person["name"]);
// the second statement is used when we don't know the value of the key directly
// we can also use variables to access the value of the key

const a = "hobbies";
console.log(person[a])

person.age = 25;

