class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
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