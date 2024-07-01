function demo(input) {
    let svetovniqtRekord = Number(input[0]);
    let metriIvan = Number(input[1]);
    let sekundi = Number(input[2]);
    let vreme = metriIvan * sekundi;
    let techenieVMetri = 15;
    let techenieSekundi = 12.5;
    let ivanSTechenieMetri= Math.floor(metriIvan / techenieVMetri);
    let ivanSTechenieSekundi = ivanSTechenieMetri * techenieSekundi;
    let obshtoVreme = vreme + ivanSTechenieSekundi;
    let nedostiga = obshtoVreme - svetovniqtRekord;
    if (svetovniqtRekord <= obshtoVreme) {
        console.log(`No, he failed! He was ${nedostiga.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${obshtoVreme.toFixed(2)} seconds.`);
    }
}
demo(["10464",

    "1500",
    
    "20"])