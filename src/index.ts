class Robot {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    askName() {
        console.log(`Hi, my name is ${this.name}`);
    }

    move(distance: number) {
        console.log(`${this.name} moved by ${distance}`);
    }
}

class FlyingRobot extends Robot {
    jetPackSize: number;

    constructor(name: string, jetPackSize: number) {
        super(name);
        this.jetPackSize = jetPackSize;
    }

    move(distance: number) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}

const flyingRobot = new FlyingRobot("Sudu", 24);
flyingRobot.move(30);
