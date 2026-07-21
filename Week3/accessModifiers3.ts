class Car {
    public brand: string;
    private price: number;
    protected model: string;

    constructor(brand: string, price: number, model: string) {
        this.brand = brand;
        this.price = price;
        this.model = model;
    }

    show() {
        console.log(this.brand);
        console.log(this.price);
    }
}

let c = new Car("Toyota", 2500000, "Fortuner");
c.show();