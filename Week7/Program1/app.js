const express = require("express");

const app = express();
const PORT = 3000;

// Configure EJS template engine
app.set("view engine", "ejs");

// Student details
const student = {
    name: "Dedeepya",
    rollNo: 25,
    course: "Computer Science"
};

// Render values using EJS
app.get("/", (req, res) => {
    res.render("index", {
        student: student
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});