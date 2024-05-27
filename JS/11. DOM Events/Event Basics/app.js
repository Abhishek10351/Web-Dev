let button = document.querySelector("#color-changer");

// we can add events in two ways
// using the onEventName property
// or using the addEventListener method
function clicked() {
    console.log("Button was clicked at:" + new Date().toLocaleTimeString());
}
function shout() {
    console.log("HEY YOU!");
}
button.onclick = () => {
    let hue = Math.floor(Math.random() * 360);
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 64%)`;
};

button.addEventListener("click", () => {
    let hue = Math.floor(Math.random() * 360);
    document.body.style.color = `hsl(${hue}, 100%, 50%)`;
});

button.addEventListener("click", clicked);
button.addEventListener("click", shout, { once: true });
// > if we use the second method then we can use more than one event listener for the same event
