"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Implementing interfaces
const calculate_total_amount_1 = require("./lib/calculate-total-amount");
const shopping_cart_1 = require("./lib/shopping-cart");
const order_1 = require("./lib/order");
const shoppingCart = new shopping_cart_1.ShoppingCart();
console.log(`The cart total  is ${(0, calculate_total_amount_1.calculateTotalAmount)(shoppingCart)}`);
const order = new order_1.Order();
