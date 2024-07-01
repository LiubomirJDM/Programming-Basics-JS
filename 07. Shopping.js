function demo(input) {
    let biujet = Number(input[0]);
    let videokarti = Number(input[1]);
    let procesori = Number(input[2]);
    let ramPamet = Number(input[3]);
    let sumaVideokarta = videokarti * 250;
    let procenti10 = sumaVideokarta * 0.10;
    let procenti35 = sumaVideokarta * 0.35;
    let sumaProcesori = procesori * procenti35;
    let sumaRam = ramPamet * procenti10;
    let obshto = sumaVideokarta + sumaProcesori + sumaRam;
    if (videokarti > procesori) {
        let namalenie = obshto * 0.15;
        obshto = obshto - namalenie;
    } else {
        obshto = obshto;
    }
    let ostasvat = biujet - obshto;
    let nedostigat = obshto - biujet
    if (obshto <= biujet) {
        console.log(`You have ${ostasvat.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${nedostigat.toFixed(2)} leva more!`)
    }
}
demo(["900",

    "2",
    
    "1",
    
    "3"])