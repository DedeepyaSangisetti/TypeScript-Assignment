function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<boolean>(true));
console.log(getValue<string>("Welcome"));

class Storage<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    display() {
        console.log(this.data);
    }
}

let s = new Storage<string>("TypeScript Generics");
s.display();