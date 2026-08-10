let binary: string = "1010";
let decimal: number = 0;

for (let i: number = 0; i < binary.length; i++) {
    decimal = decimal * 2 + Number(binary[i]);
}

console.log("Decimal = " + decimal);