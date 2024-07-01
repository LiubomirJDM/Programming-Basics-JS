function demo(input) {
    let film = (input[0]);
    let red = Number(input[1]);
    let kolona = Number(input[2]);
    let mesta = red * kolona;
    let bilet;
    let suma;
    if (film === 'Premiere') {
        bilet = 12;
        suma = bilet * mesta;
        console.log(`${suma.toFixed(2)} leva`);
    } else if (film === 'Normal') {
        bilet = 7.50;
        suma = bilet * mesta;
        console.log(`${suma.toFixed(2)} leva`);
    } else if (film === 'Discount') {
        bilet = 5;
        suma = bilet * mesta;
        console.log(`${suma.toFixed(2)} leva`);
    }
}
demo(["Premiere",

    "10",
    
    "12"])