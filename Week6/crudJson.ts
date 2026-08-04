import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

// Middleware to receive JSON
app.use(express.json());

// GET - Send JSON
app.get('/students', (req: Request, res: Response) => {
    res.json({
        message: 'Student list',
        students: [
            {
                id: 1,
                name: 'Dedeepya',
                branch: 'AI & DS'
            },
            {
                id: 2,
                name: 'Anu',
                branch: 'CSE'
            }
        ]
    });
});

// GET - Dynamic URL
app.get('/students/:id', (req: Request, res: Response) => {
    res.json({
        message: 'Student details',
        studentId: req.params.id
    });
});

// POST - Receive JSON
app.post('/students', (req: Request, res: Response) => {
    const student = req.body;

    res.json({
        message: 'Student added successfully',
        student: student
    });
});

// PUT - Update JSON
app.put('/students/:id', (req: Request, res: Response) => {
    const studentId = req.params.id;
    const updatedStudent = req.body;

    res.json({
        message: 'Student updated successfully',
        studentId: studentId,
        updatedData: updatedStudent
    });
});

// DELETE - Dynamic URL
app.delete('/students/:id', (req: Request, res: Response) => {
    res.json({
        message: 'Student deleted successfully',
        studentId: req.params.id
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});