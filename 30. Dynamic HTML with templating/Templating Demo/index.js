const express = require("express");
const ejs = require("ejs");
const path = require("path");
const redditData = require("./data.json");

const app = express();

const port = 3000;

app.set("view engine", "ejs");  // set the view engine to ejs
app.set("views", path.join(__dirname, "views"));  // set the views directory

app.use(express.static(path.join(__dirname, "public")));  // serve the public directory
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { num });  // pass the data to the template
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render("subreddit", { ...data });
    } else {
        res.render("notfound", { subreddit });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

