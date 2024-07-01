function demo(input) {
    let himikalka = Number(input[0]);
    let markeri = Number(input[1]);
    let preparati = Number(input[2]);
    let procenti = Number(input[3]);
    let cenaHimikalki = himikalka * 5.80;
    let markerCena = markeri * 7.20;
    let pariZaPreparat = preparati * 1.20;
    let obshto = cenaHimikalki + markerCena + pariZaPreparat;
    let procentVZapetaq = procenti * 0.01;
    let namalenie = obshto * procentVZapetaq;
    let trqbvaDaPlati = obshto - namalenie;
    console.log(trqbvaDaPlati);
}
demo(["2 ",

    "3 ",
    
    "4 ",
    
    "25 "])