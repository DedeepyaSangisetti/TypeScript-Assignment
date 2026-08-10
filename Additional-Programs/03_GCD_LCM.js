"use strict";
let num1 = 12;
let num2 = 18;
let a = num1;
let b = num2;
//to find GCD
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
let gcd = a;
let lcm = (num1 * num2) / gcd;
console.log("GCD = " + gcd);
console.log("LCM = " + lcm);
