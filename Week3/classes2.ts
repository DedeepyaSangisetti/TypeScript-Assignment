class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

let e = new Employee("Rahul");
e.display();