//Implementing interfaces
import { calculateTotalAmount } from "./lib/calculate-total-amount";
import { ShoppingCart } from "./lib/shopping-cart";
import { Order } from "./lib/order";
const shoppingCart = new ShoppingCart();
console.log(`The cart total  is ${calculateTotalAmount(shoppingCart)}`);

const order = new Order();
