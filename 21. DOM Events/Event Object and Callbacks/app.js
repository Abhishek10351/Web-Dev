

// *the event object is passed to the event handler as an argument
// *it contains information about the event and the element that triggered the event


const btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
    console.log(e);

    console.log(e.currentTarget);
    // *the currentTarget property always refers to the element to which the event handler has been attached to, while the target property returns the element that triggered the event, "this" keyword can also be used to refer to the currentTarget

    // mouse cursor position relative to the browser window

    console.log(`x: ${e.clientX}, y: ${e.clientY}`);
})

// * different events have different properties on the event object

window.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code);
    if (e.code === 'Space') {
        console.log('I need some space!');
    }
});