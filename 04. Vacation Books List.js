function demo(input) {
    let broiStranici = Number(input[0]);
    let stranici = Number(input[1]);
    let broqtNaDnite = Number(input[2]);
    let chasa = broiStranici / stranici;
    let chasDen = chasa / broqtNaDnite;
    console.log(chasDen);
}
demo(["212 ", "20 ", "2 "])