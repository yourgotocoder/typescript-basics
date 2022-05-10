interface A {
    someProp: number;
}

interface B {
    someProp: number;
}

let a: A = { someProp: 4 };
let b: B = a;

//Index signatures
interface C {
    [key: string]: number;
}
//Call signatures
interface Sum {
    (a: number, b: number): number;
}

const add: Sum = (a, b) => a + b;

//Inheritance
interface Parent {
    surname: string;
}

interface Child extends Parent {}

const child: Child = { surname: "R" };
//Functions
type myFunc = (a: number, b?: number) => number;
const sum2: myFunc = (a, b) => a + (b || 0); //Providing a default value

function sumEverything(...numbers: number[]): number {
    return numbers.reduce(
        (prevValue, currentValue) => prevValue + currentValue
    );
}

console.log(sumEverything(2, 3, 5));

//Overloads

function calcArea(width: number, height: number): number;
function calcArea(length: number): number;

function calcArea(...args: number[]): number {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return args[0] * args[0];
}
