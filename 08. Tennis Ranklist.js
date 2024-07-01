function demo(input) {
    let priceW = 2000;
    let priceF = 1200;
    let priceSF = 720;

    let tournametPlayed = Number(input[0]);
    let startPoints = Number(input[1]);

    let totalPoints = startPoints
    let tWins = 0;


    for (let i = 2; i < input.length; i++) {
        let currentRes = input[i]

        if (currentRes == "W") {
            totalPoints += priceW
            tWins++;
        } else if (currentRes == "F") {
            totalPoints += priceF;
        } else if (currentRes == "SF") {
            totalPoints += priceSF
        }
    }
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints - startPoints) / tournametPlayed)}`)
    console.log(`${(tWins / tournametPlayed * 100).toFixed(2)}%`)
}
demo(["5",

    "1400",
    
    "F",
    
    "SF",
    
    "W",
    
    "W",
    
    "SF"])