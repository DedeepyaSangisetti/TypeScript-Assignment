"use strict";
let numbers = [1, 2, 3, 5];
let n = 5;
let total = (n * (n + 1)) / 2;
let sum = 0;
for (let num of numbers) {
    sum = sum + num;
}
let missing = total - sum;
console.log("Missing Number = " + missing);
