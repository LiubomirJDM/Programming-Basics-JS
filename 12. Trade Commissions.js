function demo(input) {
    let grad = (input[0]);
    let numbur = Number(input[1]);
if (grad === 'Sofia' ){
    if (0 <= numbur && numbur <= 500){
        numbur = numbur * 0.05;
        console.log(numbur.toFixed(2));
    } else if (numbur > 500 && numbur <= 1000){
        numbur = numbur * 0.07;
        console.log(numbur.toFixed(2));
    } else if (numbur > 1000 && numbur <= 10000){
        numbur = numbur * 0.08;
        console.log(numbur.toFixed(2));
    } else if (numbur > 10000){
        numbur = numbur * 0.12;
        console.log(numbur.toFixed(2));
    } else {
        console.log('error');
    }
} else if (grad === 'Varna' ){
    if (0 <= numbur && numbur <= 500){
        numbur = numbur * 0.045;
        console.log(numbur.toFixed(2));
    } else if (numbur > 500 && numbur <= 1000){
        numbur = numbur * 0.075;
        console.log(numbur.toFixed(2));
    } else if (numbur > 1000 && numbur <= 10000){
        numbur = numbur * 0.1;
        console.log(numbur.toFixed(2));
    } else if (numbur > 10000){
        numbur = numbur * 0.13;
        console.log(numbur.toFixed(2));
    } else {
        console.log('error');
    }
} else if (grad === 'Plovdiv' ){
    if (0 <= numbur && numbur <= 500){
        numbur = numbur * 0.055;
        console.log(numbur.toFixed(2));
    } else if (numbur > 500 && numbur <= 1000){
        numbur = numbur * 0.08;
        console.log(numbur.toFixed(2));
    } else if (numbur > 1000 && numbur <= 10000){
        numbur = numbur * 0.12;
        console.log(numbur.toFixed(2));
    } else if (numbur > 10000){
        numbur = numbur * 0.145;
        console.log(numbur.toFixed(2));
    } else {
        console.log('error');
    }
} else {
    console.log('error');
}
}
demo(["Plovdiv", "499.99"])