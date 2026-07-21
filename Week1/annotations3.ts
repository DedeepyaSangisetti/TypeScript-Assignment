let productId: number = 1001;
let productName: string = "Laptop";

function displayProduct(name: string): string {
    return "Product: " + name;
}

console.log(productId);
console.log(productName);
console.log(displayProduct(productName));