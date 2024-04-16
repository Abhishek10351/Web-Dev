
const express = require('express');

const app = express();
const path = require('path');
const port = 3000;

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})


app.listen(port, () => {
    console.log("ON PORT 3000!")
});