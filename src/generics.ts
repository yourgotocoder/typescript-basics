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

interface GetExpiredItemsFunction {
    <Item extends Expirable>(item: Array<Item>): Array<Item>;
}

const getExpiredItems: GetExpiredItemsFunction = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

const expiredVanillaCakes = getExpiredItems(vanillaCakes);

interface ShoppingCart<Item, ItemId> {
    items: Array<Item>;
    addItem(this: ShoppingCart<Item, ItemId>, item: Item): void;
    getItemById(this: ShoppingCart<Item, ItemId>, id: ItemId): Item | undefined;
}

interface Item {
    id: number;
    price: number;
}

const cart: ShoppingCart<Item, number> = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
