function demo(input) {
    let final = Number(input[0]);
    let inat = 1;
    let sum = 0;
    let cur = Number(input[inat]);
    while (sum < final) {
        sum += cur;
        inat++;
        cur = Number(input[inat])
    }
    console.log(sum);
}
demo(["100", "10", "20", "30", "40"])