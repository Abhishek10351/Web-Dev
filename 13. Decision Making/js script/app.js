let age = parseInt(prompt("Enter your age"));

if (age <= 10) {
    alert("Go HOME, kid.");
} else if (age < 18) {
    alert("You are not eligible.");
} else if (age > 18) {
    alert("You are eligible for driving license");
} else {
    alert("Enter proper age");
}

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
