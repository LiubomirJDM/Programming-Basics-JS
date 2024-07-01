function demo(input) {
    let index = 0;
     
    let vacationMoney = Number(input[index]); // 2000
    index++; // 1
 
    let earnings = Number(input[index]); // 1000
    index++; // 2
 
    let consecutiveDaysSpending = 0;
    let totalDays = 0;
 
    while (earnings < vacationMoney) {
        let action = input[index];
        index++; // 3
 
        let sum = Number(input[index]);
        index++; // 4
 
        totalDays++;
        switch (action) {
            case "spend":
                consecutiveDaysSpending++;
 
                if (sum > earnings) {
                    earnings = 0;
                } else {
                    earnings -= sum;
                }
            break;
            case "save":
                consecutiveDaysSpending = 0;
                earnings += sum;
            break;
        }
 
        if (consecutiveDaysSpending === 5) {
            console.log("You can't save the money.");
            console.log(totalDays);
            break;
        }
    }
 
    if (earnings >= vacationMoney) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
demo(["2000",

    "1000",
    
    "spend",
    
    "1200",
    
    "save",
    
    "2000"])