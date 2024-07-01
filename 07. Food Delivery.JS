function demo(input) {
    let pile = Number(input[0]);
    let riba = Number(input[1]);
    let vegan = Number(input[2]);
    let cenaPile = pile * 10.35;
    let sumaRiba = riba * 12.40;
    let pariVegan = vegan * 8.15;
    let qdene = cenaPile + sumaRiba + pariVegan;
    let procent = 20 * 0.01;
    let desert = qdene * procent;
    let obshto = qdene + desert + 2.50;
    console.log(obshto);
}
demo(["2 ",

    "4 ",
    
    "3 "])