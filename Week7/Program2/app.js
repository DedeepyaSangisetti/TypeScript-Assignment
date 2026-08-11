const express = require("express");

const app = express();
const PORT = 3001;

// Configure EJS
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req, res) => {
    res.render("index", {
        message: "",
        error: ""
    });
});

// Accept input
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    // Validate name
    if (!name || name.trim() === "") {
        return res.render("index", {
            message: "",
            error: "Name is required."
        });
    }

    // Validate age
    if (!age || age < 18) {
        return res.render("index", {
            message: "",
            error: "Age must be 18 or above."
        });
    }

    // Successful submission
    res.render("index", {
        message: `Hello ${name}, form submitted successfully!`,
        error: ""
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});