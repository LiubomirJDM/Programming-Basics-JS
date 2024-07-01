function demo(input) {
    let index = 0;
 
    let width = Number(input[index]); // input[0]
    index++; // 1
 
    let length = Number(input[index]); // input[1]
    index++; // 2
 
    let height = Number(input[index]); // input[2];
    index++; // 3
 
    let apartmentSize = width * length * height;
    let boxSize = 1 * 1 * 1;
 
    let command = input[index]; // input[3]
    index++; // 4
 
    while (command !== "Done") {
        let boxes = Number(command);
 
        apartmentSize -= (boxes * boxSize);
 
        if (apartmentSize < 0) {
            console.log(`No more free space! You need ${Math.abs(apartmentSize)} Cubic meters more.`);
            break;
        }
 
        command = input[index];
        index++;
    }
 
    if (command === "Done") {
        console.log(`${apartmentSize} Cubic meters left.`)
    }
}
demo(["10",

    "1",
    
    "2",
    
    "4",
    
    "6",
    
    "Done"])