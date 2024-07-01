function demo(input) {
    let name = input[0];
    let obekt = input[1];
    let rabota = 3;
    let tame = obekt * rabota;


    console.log(`The architect ${name} will need ${tame} hours to complete ${obekt} project/s.`);
}
demo(["George ", "4 "])