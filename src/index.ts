import multiply, { multiplyBy2 as mBy2 } from "./multiply";
const a = 4;
const b = 5;

console.log(multiply(a, b));
console.log(mBy2(a, b));
//Types
type primitiveTypes = string | number | boolean | symbol | null | undefined;
type objectTypes = {} | []; //Or a new Map

//Array
const array: string[] = ["x", "y"];
const genericArray: Array<string> = ["a", "b"]; // both array and genericArray represent the same type

//Tuple
const tuple: [string, number] = ["abc", 1]; //It represents a type of array where the number of element is fixed

//Enum
enum PrimaryColor {
    Red = "red",
    Green = "green",
    Blue = "blue",
}

let myFavorityColor: PrimaryColor = PrimaryColor.Green;
console.log(myFavorityColor); //Enum assigns a number starting from 0, it can be bypassed by giving the first value a starting value
//or the values can be set manually

//Any
/* 
 the any type is used when we don't know the type of the value that will either be returned or used
*/

const email = document.getElementById("email");
if (email) {
    email.addEventListener("change", (e) => {
        const input = e.currentTarget as HTMLInputElement;
        console.log(input.value);
    });
}

function capitalize(word: string | null) {
    //using type guard
    if (word) {
        return word[0].toUpperCase() + word.substring(1);
    } else {
        throw new Error("Null cannot be capitalized");
    }
}

console.log(capitalize("null"));
