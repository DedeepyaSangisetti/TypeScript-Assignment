let item: any = 50;
console.log(item);

item = "Laptop";
console.log(item);

let info: unknown = "Welcome";

if (typeof info === "string") {
    console.log(info.toUpperCase());
}

function showMessage(): void {
    console.log("This is a void function");
}

showMessage();