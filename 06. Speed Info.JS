function demo(input) {
    let a0 = Number(input[0]);
    if (10 >= a0) {
        console.log("slow");
    } else if (50 >= a0) {
        console.log("average");
    } else if (150 >= a0) {
        console.log("fast");
    } else if (1000 >= a0) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
}
}
demo(["160"])