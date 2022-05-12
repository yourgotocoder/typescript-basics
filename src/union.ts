function someFn(myArgument: number | string | boolean) {
    if (typeof myArgument === "string") {
        //Type guards
        let x = myArgument.toUpperCase();
    } else if (typeof myArgument === "number") {
        myArgument.toFixed();
    }
    return myArgument;
}
