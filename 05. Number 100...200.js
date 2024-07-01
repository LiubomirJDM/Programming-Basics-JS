function demo(input) {
    let a = Number(input[0]);
    if (100 > a) {
        console.log("Less than 100");
    } else if (200 < a) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }
}
demo(["120"])