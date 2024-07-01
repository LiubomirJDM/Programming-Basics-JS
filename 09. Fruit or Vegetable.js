function demo(input) {
    let produkt = (input[0]);
    if (produkt === 'banana' || produkt === 'apple' || produkt === 'kiwi' || produkt === 'lemon' || produkt === 'grapes' || produkt === 'cherry') {
        console.log("fruit");
    } else if (produkt === 'tomato' || produkt === 'cucumber' || produkt === 'pepper' || produkt === 'carrot') {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
demo(["tomato"])