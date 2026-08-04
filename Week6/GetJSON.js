import express from 'express';

const app = express();

app.get('/student', (req, res) => {
    res.json({
        id: 101,
        name: "Dedeepya",
        branch: "AI & DS",
        year: 3
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});