function demo(input) {
    let index = 0;
    let current = input[index];
    let maxNum = Number.MIN_SAFE_INTEGER;
    while(current !== "Stop"){
        let currentNum = Number(current);
        if(currentNum > maxNum){
            maxNum = current;
        }
        index++;
        current = input[index];
    }
    console.log(maxNum);
}
demo(["100",

    "99",
    
    "80",
    
    "70",
    
    "Stop"])