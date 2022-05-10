"use strict";
class Robot {
    constructor(name) {
        this.name = name;
    }
    askName() {
        console.log(`Hi, my name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved by ${distance}`);
    }
}
class FlyingRobot extends Robot {
    constructor(name, jetPackSize) {
        super(name);
        this.jetPackSize = jetPackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const flyingRobot = new FlyingRobot("Sudu", 24);
flyingRobot.move(30);
