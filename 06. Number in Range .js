function demo(input) {
    let produkt = (input[0]);
    let grad = (input[1]);
    let kolichstvo = Number(input[2]);
    let finalSum = 0;
    if (grad === 'Sofia') {
        switch (produkt) {
            case "coffee": finalSum = kolichstvo * 0.50; break;
            case "water": finalSum = kolichstvo * 0.80; break;
            case "beer": finalSum = kolichstvo * 1.20; break;
            case "sweets": finalSum = kolichstvo * 1.45; break;
            case "peanuts": finalSum = kolichstvo * 1.60; break;
        }
    } else if (grad === 'Plovdiv') {
        switch (produkt) {
            case "coffee": finalSum = kolichstvo * 0.40; break;
            case "water": finalSum = kolichstvo * 0.70; break;
            case "beer": finalSum = kolichstvo * 1.15; break;
            case "sweets": finalSum = kolichstvo * 1.30; break;
            case "peanuts": finalSum = kolichstvo * 1.50; break;
        }
    } else if (grad === 'Varna') {
        switch (produkt) {
            case "coffee": finalSum = kolichstvo * 0.45; break;
            case "water": finalSum = kolichstvo * 0.70; break;
            case "beer": finalSum = kolichstvo * 1.10; break;
            case "sweets": finalSum = kolichstvo * 1.35; break;
            case "peanuts": finalSum = kolichstvo * 1.55; break;
        }
    }
    console.log(finalSum);
}
demo(["coffee",

    "Varna",
    
    "2"])