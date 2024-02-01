console.log("Sending request to server!")
setTimeout(() => {
    console.log("Here is your data from the server...")
}, 3000)
console.log("I AM AT THE END OF THE FILE!")

// - Web APIs are provided to the browser by the browser's JavaScript runtime environment. The runtime environment is the environment in which your JavaScript code is executed. It's the browser's JavaScript engine, plus all of the browser-provided Web APIs, plus the JavaScript call stack, plus the callback queue, plus the event loop.
// - JS is single-threaded, meaning it can only do one thing at a time. It can't multitask. It can't run two things simultaneously. So it transfers tasks to the browser's Web API environment, which is multi-threaded. It can do multiple things at once. When the Web API environment finishes a task, it puts a callback function on the callback queue. The event loop then puts that callback function on the call stack, and it gets executed.