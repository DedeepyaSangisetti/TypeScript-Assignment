let start: number = 1;
let end: number = 20;

console.log("Prime numbers between " + start + " and " + end + ":");

for (let num: number = start; num <= end; num++) {
    let isPrime: boolean = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i: number = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num);
    }
}