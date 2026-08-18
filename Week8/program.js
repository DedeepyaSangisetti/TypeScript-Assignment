const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: false
    })
);

// Home / Login
app.get("/", (req, res) => {
    if (req.session.username) {
        res.send(`
            <h1>Welcome ${req.session.username}</h1>
            <p>You are logged in.</p>
            <a href="/profile">Profile</a><br>
            <a href="/read-cookie">Read Cookie</a><br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send(`
            <h1>Login</h1>

            <form method="POST" action="/login">
                Username:
                <input type="text" name="username" required>
                <br><br>

                Password:
                <input type="password" name="password" required>
                <br><br>

                <button type="submit">Login</button>
            </form>
        `);
    }
});

// Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {

        // Maintain state using session
        req.session.username = username;

        // Create cookie
        res.cookie("username", username, {
            maxAge: 60 * 60 * 1000
        });

        res.send(`
            <h1>Login Successful</h1>
            <p>Welcome ${username}</p>

            <a href="/profile">Go to Profile</a>
        `);
    } else {
        res.send(`
            <h1>Login Failed</h1>
            <p>Invalid username or password.</p>
            <a href="/">Try Again</a>
        `);
    }
});

// Profile - maintaining state
app.get("/profile", (req, res) => {
    if (req.session.username) {
        res.send(`
            <h1>Profile</h1>
            <p>Logged in user: ${req.session.username}</p>

            <a href="/read-cookie">Read Cookie</a><br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send(`
            <h1>Access Denied</h1>
            <p>Please login first.</p>
            <a href="/">Login</a>
        `);
    }
});

// Read cookie
app.get("/read-cookie", (req, res) => {
    const username = req.cookies.username;

    if (username) {
        res.send(`
            <h1>Cookie</h1>
            <p>Username stored in cookie: ${username}</p>

            <a href="/profile">Back to Profile</a>
        `);
    } else {
        res.send(`
            <h1>No Cookie Found</h1>
            <a href="/">Login</a>
        `);
    }
});

// Logout
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send("Error while logging out.");
        }

        res.clearCookie("username");

        res.send(`
            <h1>Logout Successful</h1>
            <p>Session destroyed.</p>
            <p>Cookie cleared.</p>

            <a href="/">Login Again</a>
        `);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});