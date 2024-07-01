function demo(input) {
    let nailon = Number(input[0]);
    let boq = Number(input[1]);
    let razreditel = Number(input[2]);
    let chasove = Number(input[3]);
    let razmerNailon = nailon + 2;
    let sumaNailon = razmerNailon * 1.50;
    let procentLitri = 10 * 0.01;
    let dopulnitelnaBoq = boq * procentLitri;
    let litriBoq = dopulnitelnaBoq + boq
    let cenaBoq = litriBoq * 14.50;
    let razreditelCena = razreditel * 5;
    let torbichki = 0.40;
    let marterqlSuma = sumaNailon + cenaBoq + razreditelCena + torbichki;
    let procenti = 30 * 0.01;
    let maistori = marterqlSuma * procenti;
    let cenaChas = maistori * chasove;
    let plashtam = cenaChas + marterqlSuma;
    console.log(plashtam);
}
demo(["10 ",

    "11 ",
    
    "4 ",
    
    "8 "] )