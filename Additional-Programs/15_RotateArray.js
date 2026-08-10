"use strict";
let numbers = [1, 2, 3, 4, 5];
let n = 2;
for (let i = 0; i < n; i++) {
    let last = numbers.pop();
    if (last !== undefined) {
        numbers.unshift(last);
    }
}
console.log("Rotated Array = " + numbers);
