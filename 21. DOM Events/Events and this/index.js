// create required buttons
function createButton() {
    let button = document.createElement("button");
    button.innerText = "Click Me";
    document.body.append(button);
}

for (let i = 0; i < 5; i++) {
    createButton();
}
// check ai generated designs
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    // const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${100}%, ${lightness}%)`;
}
function colorize() {
    // > "this" gives access to the element
    this.style.backgroundColor = getRandomColor();
}
for (let button of document.querySelectorAll("button")) {
    button.addEventListener("click", colorize);
    button.addEventListener("click", (e) => {
        console.log(e);
        button.style.color = getRandomColor();
    });

}
