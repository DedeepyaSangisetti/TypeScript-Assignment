import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express TypeScript Server');
});

app.get('/about', (req: Request, res: Response) => {
    res.send('This is the About Page');
});

app.get('/student', (req: Request, res: Response) => {
    res.json({
        id: 101,
        name: 'Dedeepya',
        branch: 'AI & DS',
        year: 3
    });
});

app.get('/student/:id', (req: Request, res: Response) => {
    res.json({
        message: 'Student details',
        studentId: req.params.id
    });
});

app.get('/search', (req: Request, res: Response) => {
    res.json({
        message: 'Search result',
        keyword: req.query.keyword
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});