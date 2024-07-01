function demo(input) {
    let mesec = (input[0]);
    let noshtuvki = Number(input[1]);
    let cenaNaApartament;
    let cenaNaStudio;
    let prestoiAp;
    let prestoiSt;
    if (mesec === 'May' || mesec === 'October') {
        cenaNaStudio = 50;
        cenaNaApartament = 65;
        if (noshtuvki > 14) {
            cenaNaApartament = cenaNaApartament - (cenaNaApartament * 0.1)
            cenaNaStudio = cenaNaStudio - (cenaNaStudio * 0.3);
        } else if (noshtuvki > 7) {
            cenaNaStudio = cenaNaStudio - (cenaNaStudio * 0.05);
        }
        prestoiAp = cenaNaApartament * noshtuvki;
        prestoiSt = cenaNaStudio * noshtuvki;
        console.log(`Apartment: ${prestoiAp.toFixed(2)} lv.`);
        console.log(`Studio: ${prestoiSt.toFixed(2)} lv.`);
    } else if (mesec === 'June' || mesec === 'September') {
        cenaNaStudio = 75.20;
        cenaNaApartament = 68.70;
        if (noshtuvki > 14) {
            cenaNaApartament = cenaNaApartament - (cenaNaApartament * 0.1)
            cenaNaStudio = cenaNaStudio - (cenaNaStudio * 0.2);
        }
        prestoiAp = cenaNaApartament * noshtuvki;
        prestoiSt = cenaNaStudio * noshtuvki;
        console.log(`Apartment: ${prestoiAp.toFixed(2)} lv.`);
        console.log(`Studio: ${prestoiSt.toFixed(2)} lv.`);
    } else if (mesec === 'August' || mesec === 'July') {
        cenaNaStudio = 76;
        cenaNaApartament = 77;
        if (noshtuvki > 14) {
            cenaNaApartament = cenaNaApartament - (cenaNaApartament * 0.1)
        }
        prestoiAp = cenaNaApartament * noshtuvki;
        prestoiSt = cenaNaStudio * noshtuvki;
        console.log(`Apartment: ${prestoiAp.toFixed(2)} lv.`);
        console.log(`Studio: ${prestoiSt.toFixed(2)} lv.`);
    }
}
demo(["May",

    "15"])