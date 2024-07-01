function demo(input) {
    let godini = Number(input[0])
    let peralnq = Number(input[1])
    let cenaIgrachka = Number(input[2])
    let sa = 0;
    let pariZa2age = 10;
    for (let i = 1; i<= godini; i++) {
        let curAge = i;
        if (curAge % 2 === 0){
            sa += pariZa2age;
            sa -= 1;
            pariZa2age += 10;
        } else {
            sa += cenaIgrachka;
        }
    }
    let diff = sa - peralnq ;
    if (diff >= 0){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        let neDiff= Math.abs(diff).toFixed(2)
        console.log(`No! ${neDiff}`);
    }
}
demo(["10",

    "170.00",
    
    "6"])