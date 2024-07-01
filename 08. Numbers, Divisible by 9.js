function demo(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;
    let sum1 = '';
    for (let i = a; i < + b; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            sum1 =sum1 + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(sum1);
}
demo(["100", "200"])