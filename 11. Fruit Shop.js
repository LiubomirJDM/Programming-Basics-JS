function demo(input) {
    let produkt = (input[0]);
    let day = (input[1]);
    let kolichstvo = Number(input[2]);
    let finalSum ;
    if ('Monday' === day || 'Tuesday' === day || 'Wednesday' === day || 'Thursday' === day || 'Friday' === day) {
        switch (produkt) {
            case "banana": finalSum = kolichstvo * 2.50 ; break;
            case "apple": finalSum = kolichstvo * 1.20 ; break;
            case "orange": finalSum = kolichstvo * 0.85 ; break;
            case "grapefruit": finalSum = kolichstvo * 1.45 ; break;
            case "kiwi": finalSum = kolichstvo * 2.70 ; break;
            case "pineapple": finalSum = kolichstvo * 5.50 ; break;
            case "grapes": finalSum = kolichstvo * 3.85; break;
            case produkt : finalSum = 'error'; break;
        }
    } else if ('Saturday' === day || 'Sunday' === day) {
        switch (produkt) {
            case "banana": finalSum = kolichstvo * 2.70 ; break;
            case "apple": finalSum = kolichstvo * 1.25 ; break;
            case "orange": finalSum = kolichstvo * 0.90 ; break;
            case "grapefruit": finalSum = kolichstvo * 1.60 ; break;
            case "kiwi": finalSum = kolichstvo * 3.00 ; break;
            case "pineapple": finalSum = kolichstvo * 5.60 ; break;
            case "grapes": finalSum = kolichstvo * 4.20; break;
            case produkt : finalSum = 'error'; break;
        }
    } else {
        finalSum = 'error'
    }
    if (finalSum === 'error'){
    console.log(finalSum);
} else {console.log(finalSum.toFixed(2))
}
}
demo(["apple",

    "Tuesday",
    
    "2"])