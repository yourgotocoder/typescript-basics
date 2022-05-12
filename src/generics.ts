function generic<T>(a: T): T {
    return a;
}

const genericArrow = <T>(b: T): T => b;

interface GenericInterface<T> {
    <T>(a: T): T;
    someProp: T;
}

class GenericClass<P> {
    constructor(public props: P) {}

    getProps(): P {
        return this.props;
    }
}

interface Expirable {
    expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }];
const chocolateCakes: ChocolateCake[] = [{ expiryDate: new Date() }];

const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

const expiredVanillaCakes = getExpiredItems(vanillaCakes);
