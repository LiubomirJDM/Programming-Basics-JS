function demo() {
    for (let a = 1; a <= 10; a++) {
        for (let a0 = 1; a0 <= 10; a0++) {
            let a1 = a * a0;
            console.log(`${a} * ${a0} = ${a1}`);
        }
    }
}
demo()