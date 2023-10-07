// for loop
for (let index = 0; index < 10; index++) {
    console.log("I is ${index}");
}

for (let index = 20; index >= 0; index -= 4) {
    console.log(index);
}
// looping arrays
const cartoons = ["Tom", "Jerry", "Pikachu", "Ben", "Spider-Man", "Po"];
for (let i = 0; i < cartoons.length; i++) {
    console.log(`Index ${i}: ${cartoons[i]}`);
}
console.log();
const cars = [
    "Audi",
    "Mercedes",
    "Buggati",
    "Lamborghini",
    "Camaro",
    "Bentley",
];

for (let i = cars.length; i >= 0; i--) {
    console.log(`Car ${i}: ${cars[i]}`);
}
// nested loops

console.log();
for (let i = 0; i < 4; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`   Inner Loop: ${j}`);
    }
}
