function demo(input) {
    let sustezatel = Number(input[0]);
    let begach = Number(input[1]);
    let sportist = Number(input[2]);
    let totarlVreme = sustezatel + begach + sportist;
    let mibuti = Math.floor(totarlVreme / 60);
    let seconds = totarlVreme % 60;
    if (seconds < 10) {
        console.log(`${mibuti}:0${seconds}`)
    } else {
        console.log(`${mibuti}:${seconds}`)
    }
}
demo(["35",

    "45",
    
    "44"])