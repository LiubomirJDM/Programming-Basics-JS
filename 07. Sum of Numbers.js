function demo(input) {
    let num = input[0];
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let curr = Number(num[i])
        sum += curr
    }        
    console.log(`The sum of the digits is:${sum}`);
}
demo(["1234"])