function demo(input) {
    let index = 0;
    let gradesCount = Number(input[index]);
    index++; // 1
    
    let command = input[index]; // input[1]
    index++; //2 
 
    let totalGradesSum = 0;
    let presentationsCount = 0;
 
    while (command !== "Finish") {
        let currentPresentationTitle = command;
        let gradesSum = 0;
 
        for (let i = 0; i < gradesCount; i++) {
            let grade = Number(input[index]); // input[3];
            index++;
 
            gradesSum += grade;
        }
 
        let averageCount = gradesSum / gradesCount;
        console.log(`${currentPresentationTitle} - ${averageCount.toFixed(2)}.`);
 
        totalGradesSum += averageCount;
        presentationsCount++;
 
        command = input[index];
        index++;
    }
 
    let totalAverageGrade = totalGradesSum / presentationsCount;
 
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`)
}
demo(["2",

    "While-Loop",
    
    "6.00",
    
    "5.50",
    
    "For-Loop",
    
    "5.84",
    
    "5.66",
    
    "Finish"])