function demo(input) {
    let n1 = Number(input[0])
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    for (let i = 1; i <= n1; i++) {
        let curr = Number(input[i]);
        if (curr < 200) {
            n2++;
        } else if (curr <= 399) {
            n3++;
        } else if (curr <= 599) {
            n4++;
        } else if (curr <= 799) {
            n5++;
        } else if (curr >= 800) {
            n6++;
        }
    }
    let procent = (n2 / n1) * 100;
    let procent1 = (n3 / n1) * 100;
    let procent2 = (n4 / n1) * 100;
    let procent3 = (n5 / n1) * 100;
    let procent4 = (n6 / n1) * 100;
    console.log(`${procent.toFixed(2)}%`);
    console.log(`${procent1.toFixed(2)}%`);
    console.log(`${procent2.toFixed(2)}%`);
    console.log(`${procent3.toFixed(2)}%`);
    console.log(`${procent4.toFixed(2)}%`);
}
demo(["3",

    "1",
    
    "2",
    
    "999"])