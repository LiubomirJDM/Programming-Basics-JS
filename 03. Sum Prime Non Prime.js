function demo(input) {
    let index = 0;
    let command = input[index];
    index++;
 
    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;
 
    while (command !== "stop") {
        let currentNumber = Number(command);
        let isPrime = true;
 
        if (currentNumber < 0) {
            console.log("Number is negative.");
 
            command = input[index];
            index++;
            continue;
        }
 
        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
            }
        }
 
        if (isPrime === true) {
            sumPrimeNumbers += currentNumber;
        } else {
            sumNonPrimeNumbers += currentNumber;
        }
 
 
        command = input[index];
        index++;
    }
 
    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}
demo(["3",

    "9",
    
    "0",
    
    "7",
    
    "19",
    
    "4",
    
    "stop"])