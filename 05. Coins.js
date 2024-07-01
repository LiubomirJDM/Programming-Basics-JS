function demo(input) {
    let sumWanted = Number(input[0]);
    
    let sumWantedInCoins = Math.floor(sumWanted * 100);
    let coinsArray = [200, 100, 50, 20, 10, 5, 2, 1];
    let index = 0;
 
    let currentSum = 0;
    let currentCoin = coinsArray[index];
    let typeOfVariations = 0;
 
    while (currentSum < sumWantedInCoins) {
        if (currentSum + currentCoin > sumWantedInCoins) {
                index++
                currentCoin = coinsArray[index];
        } else {
            currentSum +=  coinsArray[index];
            typeOfVariations++;
        }
 
        if (currentSum >= sumWantedInCoins) {
            console.log(typeOfVariations);
            break;
        }
    }
}
demo(["2.73"])