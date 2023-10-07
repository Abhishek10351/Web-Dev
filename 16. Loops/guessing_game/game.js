maximum = parseInt(prompt("Enter max number for game"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid max number"));
    // repeat until valid number not entered
}
let num = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter your first guess");
let attempts = 1;
while (parseInt(guess) !== num) {
    if (guess === "q") {
        alert("Quitting!!!");
        break;
    }
    if (parseInt(guess) > num) {
        guess = prompt("Too high.. Enter a lower guess ⬇️");
    } else if (parseInt(guess) < num) {
        guess = prompt("Too low.. Enter a higher guess ⬆️");
    } else {
        alert("Invalid value");
    }
    attempts++;
}
if (parseInt(guess) == num) {
    alert(`You guessed the number in ${attempts} steps 😎`);
}