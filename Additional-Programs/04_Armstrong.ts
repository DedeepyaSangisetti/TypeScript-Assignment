let no: number = 153;
let original: number = no;
let sum: number = 0;

while (no > 0) {
    let digit: number = no % 10;
    sum = sum + (digit * digit * digit);
    no = Math.floor(no / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is not an Armstrong Number");
}