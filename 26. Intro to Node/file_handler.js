const fs = require('fs');

// - require is used to import the module. it is same as import in ES6. but require is used in commonJS.
// - import is used to import the module.
// - fs module is used to interact with the file system.
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}