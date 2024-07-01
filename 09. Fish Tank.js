function demo(input) {
    let duljinaSm = Number(input[0]);
    let shiruchinaSm = Number(input[1]);
    let visokSm = Number(input[2]);
    let procent = Number(input[3]);   
let obem = duljinaSm * shiruchinaSm * visokSm;
let litri = obem / 1000;
let prostranstvo = procent * 0.01;
let nujda0 = litri * 1;
let nujda1 = litri * prostranstvo;
let nujda2 = nujda0 - nujda1;
    console.log(nujda2);
}
demo(["105 ",

    "77 ",
    
    "89 ",
    
    "18.5 "])