function demo(input) {
    let name = (input[0])
    let tochki = Number(input[1])
    let ocenqvashti = Number(input[2])
    let finalSum = 0;
    let oskar = 1250.5;
    for (let i = 3; i < input.length; i +=2 ) {
        let judgeName = input[i];
        let judgeTochki = Number(input[i+1]);
        let scor = (judgeName.length * judgeTochki) / 2;
        finalSum += scor;
        if ((finalSum + tochki) > oskar){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${(finalSum + tochki).toFixed(1)}!`);
            break;
        }
    }
    if ((finalSum + tochki) <= oskar){
        let neDostig = Math.abs(finalSum + tochki - oskar);
        console.log(`Sorry, ${name} you need ${neDostig.toFixed(1)} more!`);
    }
} 
demo(["Zahari Baharov",

    "205",
    
    "4",
    
    "Johnny Depp",
    
    "45",
    
    "Will Smith",
    
    "29",
    
    "Jet Lee",
    
    "10",
    
    "Matthew Mcconaughey",
    
    "39"])