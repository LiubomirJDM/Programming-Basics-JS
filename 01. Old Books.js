function demo(input) {
    let index = 0;
    let a = input[0];
    index++;
    //let book = false;
    let nameBook = input[index];
    index++;
    let nun = 0;
    while (nameBook !== "No More Books") {
        if (nameBook === a) {
            //book = true;
            console.log(`You checked ${nun} books and found it.`);
            break;
        }
        nun++
        nameBook = input[index];
        index++;
    }
    if (nameBook === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${nun} books.`);
    }
}
demo(["Troy",

    "Stronger",
    
    "Life Style",
    
    "Troy"])