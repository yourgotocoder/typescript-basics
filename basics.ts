let age: number;
age = 5;
let userName: string = "Sudu";
let isInstructor: boolean = false;
let hobbies: string[];
hobbies = ["Boxing", "MMA"];
type Person = { name: string; age: number };
let person: Person = { age: 2, name: "Sudu" };
let people: Person[];
people = [{ name: "Sudu", age: 25 }];
let course: string | number = "React - The Complete Guide";
//Functions and types
function add(a: number, b: number): number {
    return a + b;
}

function showPrint(value: any): void {
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
insertAtBeginning(demoArray, -3);
