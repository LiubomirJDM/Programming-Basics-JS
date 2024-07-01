function demo(input) {
    let a1 = 0;
    while (a1 < input.length) {
        let a2 = input[a1]
        if (a2 === 'Stop') {
            break;
        }
        a1++;
        console.log(a2);
    }
}
demo(["Nakov",

    "SoftUni",
    
    "Sofia",
    
    "Bulgaria",
    
    "SomeText",
    
    "Stop",
    
    "AfterStop",
    
    "Europe",
    
    "HelloWorld"])