import express from 'express';

const app = express();

app.get('/student/:id', (req, res) => {
    res.send(`Student ID is: ${req.params.id}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});