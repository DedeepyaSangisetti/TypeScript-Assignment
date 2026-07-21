class Student {
    public name: string;
    private marks: number;
    protected course: string;

    constructor(name: string, marks: number, course: string) {
        this.name = name;
        this.marks = marks;
        this.course = course;
    }

    show() {
        console.log(this.name);
        console.log(this.marks);
    }
}

let s = new Student("Dedeepya", 95, "AI & DS");
s.show();