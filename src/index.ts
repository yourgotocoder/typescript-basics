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
