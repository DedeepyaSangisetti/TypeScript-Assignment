"use strict";
let numbers = [1, 2, 2, 3, 1, 2, 3, 3];
let count = {};
for (let num of numbers) {
    if (count[num]) {
        count[num]++;
    }
    else {
        count[num] = 1;
    }
}
console.log(count);
