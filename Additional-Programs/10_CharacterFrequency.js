"use strict";
let str = "hello";
let frequency = {};
for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    }
    else {
        frequency[char] = 1;
    }
}
console.log(frequency);
