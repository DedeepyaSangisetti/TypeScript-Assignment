let num: number = 10;
let binary: string = "";

while (num > 0) {
    let remainder: number = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
}

console.log("Binary = " + binary);