"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayDetails() {
        console.log("Name = " + this.name);
        console.log("Salary = " + this.salary);
        console.log("Department = " + this.department);
    }
}
let employee = new Employee("Dedeepya", 50000, "IT");
employee.displayDetails();
