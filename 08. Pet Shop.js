function demo(input) {
    let dog = input[0];
    let cat = input[1];
    let granul = 2.50;
    let konserva = 4;
    let smetkaDog = dog * granul;
    let smetkaCat = cat * konserva;
    let obshto = smetkaCat + smetkaDog;

    console.log(`${obshto}`)
}
demo(["5 ", "4 "])