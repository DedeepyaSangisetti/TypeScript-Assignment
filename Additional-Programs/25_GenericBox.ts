class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display() {
        console.log("Value = " + this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello TypeScript");

numberBox.display();
stringBox.display();
