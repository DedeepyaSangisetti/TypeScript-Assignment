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

// Connect to MongoDB
mongoose
    .connect(mongoURL)
    .then(async () => {
        console.log("MongoDB Atlas Connected Successfully");

        // CREATE
        const student = await Student.create({
            name: "Anil",
            age: 20,
            course: "IT"
        });

        console.log("\n1. CREATE");
        console.log(student);

        // READ
        const students = await Student.find();

        console.log("\n2. READ");
        console.log(students);

        // UPDATE
        const updatedStudent = await Student.findOneAndUpdate(
            { name: "Anil" },
            { age: 21 },
            { returnDocument: "after" }
        );

        console.log("\n3. UPDATE");
        console.log(updatedStudent);

        // DELETE
        const deletedStudent = await Student.findOneAndDelete({
            name: "Anil"
        });

        console.log("\n4. DELETE");
        console.log(deletedStudent);

        // Close connection
        await mongoose.connection.close();

        console.log("\nMongoDB Connection Closed");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed");
        console.log(error.message);
    });