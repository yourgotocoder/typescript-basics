"use strict";
let a = { someProp: 4 };
let b = a;
const add = (a, b) => a + b;
const child = { surname: "R" };
const sum2 = (a, b) => a + (b || 0); //Providing a default value
function sumEverything(...numbers) {
    return numbers.reduce((prevValue, currentValue) => prevValue + currentValue);
}
console.log(sumEverything(2, 3, 5));
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return args[0] * args[0];
}
