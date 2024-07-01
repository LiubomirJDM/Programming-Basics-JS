function demo(input) {
    let name = input[0];
    let parola = input[1];
    let data = input[2];
    let inat = 3;
    while (data !== parola) {
        data = input[inat];
        inat++;
    }
    console.log(`Welcome ${name}!`);
}
demo(["Nakov",

    "1234",
    
    "Pass",
    
    "1324",
    
    "1234"])