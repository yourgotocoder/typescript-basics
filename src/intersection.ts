interface A {
    a: number;
}

interface B {
    b: number;
}

function combine<ObjA, ObjB>(objA: ObjA, objB: ObjB): ObjA & ObjB {
    return { ...objA, ...objB };
}

const a = {
    a: 1,
};

const b = {
    b: 2,
};

const c = combine(a, b);
