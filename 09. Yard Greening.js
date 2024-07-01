function demo(input) {
    let kvadratniMetri = input[0];
    let cena = kvadratniMetri * 7.61;
    let obshto = cena * 0.18;
    let spesteni = cena - obshto
    console.log(`The final price is: ${spesteni} lv.`)
    console.log(`The discount is: ${obshto} lv.`)
}
demo(["150"])