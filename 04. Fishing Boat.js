function demo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMans = Number(input[2]);
    let boatSpring = 3000;
    let boatSummerAutmn = 4200;
    let boatWinter = 2600;
    let cost = 0;
 
    if (season == "Summer" || season == "Autumn") {
        if (fisherMans <= 6) {
            cost = boatSummerAutmn * 0.90;
        } else if (7 <= fisherMans && fisherMans <= 11) {
            cost = boatSummerAutmn * 0.85;
        } else if (fisherMans > 12) {
            cost = boatSummerAutmn * 0.75;
        }
    } else if (season == "Winter") {
        if (fisherMans <= 6) {
            cost = boatWinter * 0.90;
        } else if (7 <= fisherMans && fisherMans <= 11) {
            cost = boatWinter * 0.85;
        } else if (fisherMans > 12) {
            cost = boatWinter * 0.75;
        }
    } else if (season == "Spring") {
        if (fisherMans <= 6) {
            cost = boatSpring * 0.90;
        } else if (7 <= fisherMans && fisherMans <= 11) {
            cost = boatSpring * 0.85;
        } else if (fisherMans > 12) {
            cost = boatSpring * 0.75;
        }
    }
    if (season !== "Autumn" && fisherMans % 2 == 0) {
        cost *= 0.95
    }
    if (budget >= cost) {
        console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(cost - budget).toFixed(2)} leva.`)
    }
}
demo(["3600",

    "Autumn",
    
    "6"])