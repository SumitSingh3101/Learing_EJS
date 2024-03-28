const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {   
        id : "1A",
        username : "SumitSingh",
        content : "I love developing websites."
    },
    {   
        id : "2B",
        username : "apanacollege",
        content : "We teach codding"
    },
    {   
        id : "3B",
        username : "Harpic",
        content : "We sell Toilet cleaner"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    
    res.send("request working");
});

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});
