const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Our fake database:
let comments = [
  {
    // id: 1,
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    // id: 2,
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    // id: 3,
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    // id: 4,
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new", { comments });
});

app.post("/comments", (req, res) => {
  const { comment, username } = res.body;
  comments.push({ comment, username });
  res.redirect("comments/show", { comment: { comment, username } });
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});
