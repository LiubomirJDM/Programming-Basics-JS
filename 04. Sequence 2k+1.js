function demo(input) {
    let n = Number(input[0]);
    let n0 = 1;
    while(n >= n0){
        console.log(n0);
        n0 = (n0 * 2) + 1;
    }
}
demo(["3"])