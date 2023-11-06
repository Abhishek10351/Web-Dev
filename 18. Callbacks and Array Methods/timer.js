// the timer functions

setTimeout(() => {
    console.log("I waited 5 seconds!");
}, 5000);

const id = setInterval(function () {
    console.log(Math.floor(Math.random() * 10));
}, 500);

clearInterval();
// stops the interval

// we can also halt everything with clearInterval
