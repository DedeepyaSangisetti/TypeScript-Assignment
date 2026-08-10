"use strict";
let num = 10;
let binary = "";
while (num > 0) {
    let remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
}
console.log("Binary = " + binary);
