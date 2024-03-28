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
        username : "SumitSingh",
        content : "I love developing websites."
    },
    {
        username : "apanacollege",
        content : "We teach codding"
    },
    {
        username : "Harpic",
        content : "We sell Toilet cleaner"
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.listen(port, () => {
    console.log(`listening to port : ${port}`);
});
