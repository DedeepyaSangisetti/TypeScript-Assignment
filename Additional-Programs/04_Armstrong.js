"use strict";
let no = 153;
let original = no;
let sum = 0;
while (no > 0) {
    let digit = no % 10;
    sum = sum + (digit * digit * digit);
    no = Math.floor(no / 10);
}
if (sum === original) {
    console.log(original + " is an Armstrong Number");
}
else {
    console.log(original + " is not an Armstrong Number");
}
