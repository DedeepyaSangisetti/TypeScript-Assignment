import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/student', (req: Request, res: Response) => {
    res.json({
        id: 101,
        name: 'Dedeepya',
        branch: 'AI & DS',
        year: 3
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});