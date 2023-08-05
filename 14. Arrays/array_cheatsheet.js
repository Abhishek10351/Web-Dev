// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// concat - merge arrays
// includes - look for a value
// indexOf - just like str.indexOf
// join - creates a string from an array
// reverse - reverses an array
// slice - copy portion of an array
// splice - remove/replace elements
// sort - sorts an array
colors.splice(1, 0, "red-orange"); // add red-orange in 1st index
console.log(colors.includes("red"));
console.log(colors);
