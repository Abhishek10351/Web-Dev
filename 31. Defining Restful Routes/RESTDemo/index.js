const express = require('express');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's

const app = express();
const path = require('path');
const { log } = require('console');
const port = 3000;

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())

// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'comments'))
app.set('view engine', 'ejs')


app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})


// Our fake database:
let comments = [
    {
        id: uuid(),
        username: "Ted",
        comment: "And that's how I met your mother",
    },
    {
        id: uuid(),
        username: "Barney",
        comment: "Suit up!",
    },
    {
        id: uuid(),
        username: "Robin",
        comment: "I'm a Canadian pop star",
    },
    {
        id: uuid(),
        username: "Lily",
        comment: "You son of a b****!",
    },
    {
        id: uuid(),
        username: "Marshall",
        comment: "I'm the judge",
    },
    {
        id: uuid(),
        username: "Ranjit",
        comment: "Hello, I'm Ranjit",
    }
]

app.get('/comments', (req, res) => {
    res.render('index', { comments });
})
app.get('/comments/new', (req, res) => {
    res.render('new');
})
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("show", { ...comment })
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    if (username && comment) {
        comments.push({ username: username, comment: comment, id:uuid() });
        res.redirect('/comments');
    }
    res.redirect('/new')
})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('edit', { ...comment })
})
// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);

    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments')
})
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(port, () => {
    console.log("ON PORT 3000!")
});