// spread in js

// spread is used to expand the value of the iterator into list of seperate arguments

// spread in functions
const nums = [1, 2, 3, 4, 5, 6, 7, 6, 5, 3, 4634, 35, 345];

console.log(Math.max(nums));
console.log(Math.max(...nums));

// spread in arrays
const dogs = ["Spyke", "Tyke"];
const cats = ["Tom", "Butch"];

const pets = [...dogs, ...cats];

console.log(pets);

// spread in object literals

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine };
console.log(catDog);

const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke",
};
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
console.log(newUser);