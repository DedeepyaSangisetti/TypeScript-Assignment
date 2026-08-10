let num: number = 28;
let sum: number = 0;

for (let i: number = 1; i < num; i++) {
    if (num % i === 0) {
        sum = sum + i;
    }
}

if (sum === num) {
    console.log(num + " is a Perfect Number");
} else {
    console.log(num + " is not a Perfect Number");
}