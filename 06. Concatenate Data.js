function demo(input) {
    let name = input[0];
    let surnames = input[1];
    let age = input[2];
    let town = input[3];
    console.log(`You are ${name} ${surnames}, a ${age}-years old person from ${town}.`);
}
demo(['Maria', 'Ivanova', 20, 'Sofia'])