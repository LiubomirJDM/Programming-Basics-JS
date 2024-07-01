function demo(input) {
    let chas = Number(input[0]);
    let mitutes = Number(input[1]);
    let plius = mitutes + 15;
    if (plius >= 60) {
        chas += 1;
        plius -= 60;
    }
    if (chas >= 24) {
        chas= chas - 24;
    }
    if (plius < 10) {
        console.log(`${chas}:0${plius}`);
    } else {
        console.log(`${chas}:${plius}`);
    }
}
demo(["23", "59"])