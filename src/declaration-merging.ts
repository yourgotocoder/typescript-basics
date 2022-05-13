interface Cart {
    calculateTotal(): number;
}

interface Cart {
    x: number;
}

interface Cart {
    calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
    x: 1,
    calculateTotal(options?: { discountCode: number }) {
        if (options && options.discountCode) {
            //Apply discount code
        }
        return 1;
    },
};

//Namespace

namespace MyNamespace {
    export const x: number = 10;
    export interface SomeInterface {
        y: number;
    }
}

namespace MyNamespace {
    export const getX = () => x;
    export interface SomeInterface {
        x: number;
    }
}

MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface = {
    x: 1,
    y: 2,
};

enum Vegetables {
    Tomato = "tomato",
    Onion = "onion",
}
