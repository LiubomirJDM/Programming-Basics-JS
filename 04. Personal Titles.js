function demo(input) {
    let age = Number(input[0]);
    let sex = (input[1]);
    if(sex === 'f'){
        if(age < 16){
            console.log('Miss');

        } else if (age >=16) {
            console.log('Ms.');
        }
    } else if (sex === 'm'){
        if (age < 16) {
            console.log('Master');
        } else if (age >=16) {
            console.log('Mr.');
        }
    }
}
demo(["12",
    "m"])