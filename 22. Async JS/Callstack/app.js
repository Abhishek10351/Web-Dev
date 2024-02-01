const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")

// - Call Stack - It's a data structure that records basically where in the program we are. If we call a function, we put it on top of the stack. If we return from a function, we take it off the top. It's a stack of functions that have been called to get us to where we are in the program.

// > When we call a function, we put it on top of the stack. When we return from a function, we take it off the top. But for asynchronous functions, we don't put them on the stack. We put them on the callback queue.

//  - Web API - These are functions that the browser gives us that we can call, but that run in the browser, not in JavaScript. For example, setTimeout is a Web API function. When we call setTimeout, we're telling the browser to start a timer. When the timer is done, the callback function we gave to setTimeout will be put on the callback queue.

//  - Callback Queue - This is a queue of callback functions that are waiting to be executed. They get executed when the call stack is empty.

// + https://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDUsMTIsMTMp!!! (for visualizing the call stack)