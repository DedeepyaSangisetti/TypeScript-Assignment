require("dotenv").config();
const mongoose = require("mongoose");

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

// Connect to MongoDB Atlas
mongoose
    .connect(mongoURL)
    .then(async () => {
        console.log("MongoDB Atlas Connected Successfully");
        console.log("Database: Week9DB");

        // CREATE
        const student = await Student.create({
            name: "Rahul",
            age: 21,
            course: "CSE"
        });

        console.log("\nCREATE:");
        console.log(student);

        // READ
        const students = await Student.find();

        console.log("\nREAD:");
        console.log(students);

        // UPDATE
        const updatedStudent = await Student.findOneAndUpdate(
            { name: "Rahul" },
            { age: 22 },
            { new: true }
        );

        console.log("\nUPDATE:");
        console.log(updatedStudent);

        // DELETE
        const deletedStudent = await Student.findOneAndDelete({
            name: "Rahul"
        });

        console.log("\nDELETE:");
        console.log(deletedStudent);

        // Close connection
        await mongoose.connection.close();
        console.log("\nMongoDB Connection Closed");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error.message);
    });