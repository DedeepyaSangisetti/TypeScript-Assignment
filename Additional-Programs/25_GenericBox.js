"use strict";
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Value = " + this.value);
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Hello TypeScript");
numberBox.display();
stringBox.display();
