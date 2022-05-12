function someFn(myArgument: number | string | boolean) {
    if (typeof myArgument === "string") {
        //Type guards
        let x = myArgument.toUpperCase();
    } else if (typeof myArgument === "number") {
        myArgument.toFixed();
    }
    return myArgument;
}

interface Cat {
    meow(): void;
    walk(): void;
}
interface Dog {
    bark(): void;
    walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    //Interface guards
    return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    } else {
        pet.meow();
    }
}

class Foo {
    foo: number;
    commonProp: string;
}

class Bar {
    bar: number;
    commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        //Class guards
        obj.foo;
    }
}
