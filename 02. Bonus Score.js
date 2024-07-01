function demo(input) {
    let tochki = Number(input[0]);
    let bonus
    if (tochki <= 100) {
        bonus = 5;
    } else if (tochki < 1000) {
        bonus = tochki * 0.2;
    } else if (tochki > 1000) {
        bonus = tochki * 0.1;
    }
    if (tochki % 2 == 0) {
        bonus += 1;
    } else if ( tochki % 10 == 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(tochki + bonus);
}
demo(["2703"])