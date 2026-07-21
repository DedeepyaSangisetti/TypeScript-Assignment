class School {
    readonly schoolName: string = "ABC School";
    static city: string = "Hyderabad";

    show() {
        console.log(this.schoolName);
        console.log(School.city);
    }
}

let s = new School();
s.show();