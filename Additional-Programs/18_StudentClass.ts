class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log("Student Name = " + this.name);
        console.log("Student Age = " + this.age);
    }
}

let student = new Student("Dedeepya", 19);
student.displayDetails();