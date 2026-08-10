"use strict";
let numbers = [1, 2, 3, 2, 4, 1, 5];
let duplicates = [];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
        }
    }
}
console.log("Duplicate Elements = " + duplicates);
