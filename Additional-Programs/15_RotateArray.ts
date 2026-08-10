let numbers: number[] = [1, 2, 3, 4, 5];
let n: number = 2;

for (let i: number = 0; i < n; i++) {
    let last: number | undefined = numbers.pop();

    if (last !== undefined) {
        numbers.unshift(last);
    }
}

console.log("Rotated Array = " + numbers);