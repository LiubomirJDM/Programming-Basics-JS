function demo(input) {
    let brauzura = Number(input[0])
    let zaplata = Number(input[1])
    let globa = 0;
    for (let i = 2; i < input.length ; i++) {
         let cur = input[i];
         switch (cur){
            case "Facebook":globa += 150; break;
            case "Instagram":globa += 100; break;
            case "Reddit":globa += 50; break;
        }
        if (zaplata - globa <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    let diff = zaplata - globa;
    if (diff > 0){
        console.log(diff);
    }
}
demo(["10",

    "750",
    
    "Facebook",
    
    "Dev.bg",
    
    "Instagram",
    
    "Facebook",
    
    "Reddit",
    
    "Facebook",
    
    "Facebook"])