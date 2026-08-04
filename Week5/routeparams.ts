import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

// Dynamic URL using route parameter
app.get('/student/:id', (req: Request, res: Response) => {
    res.json({
        message: 'Student details',
        studentId: req.params.id
    });
});

// Multiple route parameters
app.get('/student/:id/:name', (req: Request, res: Response) => {
    res.json({
        studentId: req.params.id,
        studentName: req.params.name
    });
});

// Query parameters
app.get('/search', (req: Request, res: Response) => {
    res.json({
        keyword: req.query.keyword,
        category: req.query.category
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});