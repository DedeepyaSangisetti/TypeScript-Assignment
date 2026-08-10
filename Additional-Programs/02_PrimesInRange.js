"use strict";
let start = 1;
let end = 20;
console.log("Prime numbers between " + start + " and " + end + ":");
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    else {
        for (let i = 2; i < num; i++) {
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
