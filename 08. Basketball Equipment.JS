function demo(input) {
    let cenaGodina = Number(input[0]);
    let procent = 40 * 0.01;
    let kecki = cenaGodina * procent;
    let sumaKecki = cenaGodina - kecki;
    let procent2 = 20 * 0.01;
    let ekip = sumaKecki * procent2;
    let cenaEkip = sumaKecki - ekip;
    let procent3 = 25 * 0.01;
    let topki = cenaEkip * procent3;
    let procent4 = 20 * 0.01;
    let aksesuar = topki * procent4;
    let obshto = cenaGodina + sumaKecki + cenaEkip + topki + aksesuar;
    console.log(obshto);
}
demo(["550 "])