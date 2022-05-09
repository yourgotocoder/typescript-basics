"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importStar(require("./multiply"));
const a = 4;
const b = 5;
console.log((0, multiply_1.default)(a, b));
console.log((0, multiply_1.multiplyBy2)(a, b));
//Array
const array = ["x", "y"];
const genericArray = ["a", "b"]; // both array and genericArray represent the same type
//Tuple
const tuple = ["abc", 1]; //It represents a type of array where the number of element is fixed
//Enum
var PrimaryColor;
(function (PrimaryColor) {
    PrimaryColor["Red"] = "red";
    PrimaryColor["Green"] = "green";
    PrimaryColor["Blue"] = "blue";
})(PrimaryColor || (PrimaryColor = {}));
let myFavorityColor = PrimaryColor.Green;
console.log(myFavorityColor); //Enum assigns a number starting from 0, it can be bypassed by giving the first value a starting value
//or the values can be set manually
//Any
/*
 the any type is used when we don't know the type of the value that will either be returned or used
*/
const email = document.getElementById("email");
if (email) {
    email.addEventListener("change", (e) => {
        const input = e.currentTarget;
        console.log(input.value);
    });
}
function capitalize(word) {
    //using type guard
    if (word) {
        return word[0].toUpperCase() + word.substring(1);
    }
    else {
        throw new Error("Null cannot be capitalized");
    }
}
console.log(capitalize("null"));
