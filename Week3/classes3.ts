class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    display() {
        console.log(this.brand);
    }
}

let c = new Car("Toyota");
c.display();