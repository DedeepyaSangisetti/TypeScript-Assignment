function display<T>(value: T): T {
    return value;
}

console.log(display<number>(50));
console.log(display<string>("Hello"));

class Container<T> {
    item: T;

    constructor(item: T) {
        this.item = item;
    }

    show() {
        console.log(this.item);
    }
}

let c = new Container<number>(500);
c.show();