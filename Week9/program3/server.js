require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// MongoDB Atlas connection
const mongoURL = process.env.MONGO_URL;
// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// =========================
// REST API ROUTES
// =========================

// GET - Get all students
app.get("/api/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Add a student
app.post("/api/students", async (req, res) => {
    try {
        const student = await Student.create({
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        });

        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT - Update a student
app.put("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                age: req.body.age,
                course: req.body.course
            },
            { returnDocument: "after" }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE - Delete a student
app.delete("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json({
            message: "Student deleted successfully",
            student: student
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start server after connecting to MongoDB
mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("MongoDB Atlas Connected Successfully");
        console.log("Database: Week9SPADB");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error.message);
    });