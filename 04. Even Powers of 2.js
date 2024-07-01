function demo(input) {
    let a = Number(input[0]);
    for (let i = 0; i <= a; i = i + 2) {
        console.log(Math.pow(2,i));
    }
}
demo(["3"])