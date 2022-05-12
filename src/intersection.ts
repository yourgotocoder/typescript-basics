interface A {
    a: number;
}

interface B {
    b: number;
}

function combine(obj: A & B) {
    return obj.a + obj.b;
}
