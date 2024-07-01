function demo(input) {
    let allGroups = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimindjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let peopleCount = Number(input[i])

        if (peopleCount <= 5) {
            musala += peopleCount
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            monblan += peopleCount
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            kilimindjaro += peopleCount
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            k2 += peopleCount
        } else if (peopleCount >= 41) {
            everest += peopleCount
        }

    }

    console.log(`${(musala / (musala + monblan + kilimindjaro + k2 + everest) * 100).toFixed(2)}%`)
    console.log(`${(monblan / (musala + monblan + kilimindjaro + k2 + everest) * 100).toFixed(2)}%`)
    console.log(`${(kilimindjaro / (musala + monblan + kilimindjaro + k2 + everest) * 100).toFixed(2)}%`)
    console.log(`${(k2 / (musala + monblan + kilimindjaro + k2 + everest) * 100).toFixed(2)}%`)
    console.log(`${(everest / (musala + monblan + kilimindjaro + k2 + everest) * 100).toFixed(2)}%`)
}
demo(["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"])