function demo(input) {
    let index = 0;
    let max = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let grage = Number(input[index]);
    index++; 
    let poorGrade = 0;
    let problem = 0
    let total = 0
    let name = ""
    while (command !== "Enough") {
        name = command;
        if (grage <= 4) {
            poorGrade++;
        }
        if (poorGrade === max) {
            console.log(`You need a break, ${poorGrade} poor grades.`);
            break;
        }
       
        command = input[index];
        index++; 
        problem++;
        total += grage;
        grage = Number(input[index]);
        index++;
    }
    if (command === "Enough") {
        console.log(`Average score: ${(total / problem).toFixed(2)}`);
        console.log(`Number of problems: ${problem}`);
        console.log(`Last problem: ${name}`);
    }
} 
demo(["3",

    "Money",
    
    "6",
    
    "Story",
    
    "4",
    
    "SpringTime",
    
    "5",
    
    "Bus",
    
    "6",
    
    "Enough"])