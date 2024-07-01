function demo(input) {
    let name = input[0];
    let sum = 0;
    let index = 1;
    let ehse = 0;
    let current = Number(input[index]);
    while (index <= 12) {
        if (current < 4) {
            ehse++;
        }
        if (ehse > 1) {
            console.log(`${name} has been excluded at ${index - 1} grade`);
            break;
        } 
        sum += current;
        index++;
        current = Number(input[index]);
    }
    if (ehse <= 1) {
        let anal = sum / 12;
        console.log(`${name} graduated. Average grade: ${anal.toFixed(2)}`);
    }
}
demo (["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])