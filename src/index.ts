import multiply, { multiplyBy2 as mBy2 } from "./multiply";
const a = 4;
const b = 5;

console.log(multiply(a, b));
console.log(mBy2(a, b));
//
function capitalize(word: string | null) {
    //using type guard
    if (word) {
        return word[0].toUpperCase() + word.substring(1);
    } else {
        throw new Error("Null cannot be capitalized");
    }
}

console.log(capitalize("null"));
