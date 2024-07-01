function demo(input) {
    let a0 = Number(input[0]);
    let a1 = Number(input[1]);
    let a2 = Number(input[2]);
    let b = a0 * 0.1;
    if (a1 > 150) {
        b1 = a2 - (a2 * 0.1);
    } else {
        b1 = a2;
    };
    let a1b1 = a1 * b1;
    let a1b1b = a1b1 + b;
    let b3 = a0 - a1b1b;
    if (b3 < 0) {
        let c0 = b3 * -1;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${c0.toFixed(2)} leva more.`);
    } else if (b3 > a0) {
        let d0 = a0 - b3;
        let d1 = d0 * -1;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${d1.toFixed(2)} leva more.`);
    } else if (b3 <= a0) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${b3.toFixed(2)} leva left.`);
    };
}
demo(["15437.62",

    "186",
    
    "57.99"])