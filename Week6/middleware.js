import express from 'express';

const app = express();

// Custom logging middleware
const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleString()}`
    );

    next();
};

// Use custom middleware
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/student/:id', (req, res) => {
    res.json({
        studentId: req.params.id,
        message: "Student details"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});