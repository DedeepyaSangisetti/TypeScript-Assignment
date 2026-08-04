import express, { Request, Response, NextFunction } from 'express';

const app = express();

const PORT = 3000;

// Custom logging middleware
const logger = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleString()}`
    );

    next();
};

// Use custom middleware
app.use(logger);

// Home route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express Server');
});

// About route
app.get('/about', (req: Request, res: Response) => {
    res.send('About Page');
});

// Dynamic URL
app.get('/student/:id', (req: Request, res: Response) => {
    res.json({
        studentId: req.params.id,
        message: 'Student details'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});