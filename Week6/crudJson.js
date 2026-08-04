import express from 'express';

const app = express();

// Middleware to read JSON data
app.use(express.json());

// GET - Send JSON
app.get('/students', (req, res) => {
    res.json({
        message: "Student list",
        students: [
            { id: 1, name: "Dedeepya" },
            { id: 2, name: "Anu" }
        ]
    });
});

// GET - Dynamic URL
app.get('/students/:id', (req, res) => {
    res.json({
        message: "Student details",
        studentId: req.params.id
    });
});

// POST - Receive JSON
app.post('/students', (req, res) => {
    const student = req.body;

    res.json({
        message: "Student added successfully",
        student: student
    });
});

// PUT - Update JSON
app.put('/students/:id', (req, res) => {
    const id = req.params.id;
    const updatedStudent = req.body;

    res.json({
        message: "Student updated successfully",
        studentId: id,
        updatedData: updatedStudent
    });
});

// DELETE
app.delete('/students/:id', (req, res) => {
    res.json({
        message: "Student deleted successfully",
        studentId: req.params.id
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});