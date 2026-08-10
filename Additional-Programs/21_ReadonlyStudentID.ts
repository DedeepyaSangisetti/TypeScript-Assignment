class Student {
    readonly studentId: number;
    name: string;

    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    displayDetails() {
        console.log("Student ID = " + this.studentId);
        console.log("Student Name = " + this.name);
    }
}

let student = new Student(101, "Dedeepya");

student.displayDetails();