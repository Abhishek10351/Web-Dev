// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const figlet = require("figlet");
const colors = require("colors");
figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...'.red);
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});

// -  we can use npm init to store all importtant meta data in package.json file

// - npm install installs all dependencies in the package.json file

