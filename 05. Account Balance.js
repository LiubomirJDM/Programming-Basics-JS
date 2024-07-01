function demo(input) {
    let total = 0;
    let index = 0;
    let current = input[index];
    while (current !== "NoMoreMoney") {
        let inputSum = Number(current);
        if (inputSum < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            total += inputSum;
            console.log(`Increase: ${inputSum.toFixed(2)}`);
        }
        index++;
        current = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
demo(["5.51",

    "69.42",
    
    "100",
    
    "NoMoreMoney"])
    