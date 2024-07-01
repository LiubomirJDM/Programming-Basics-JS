function demo(input) {
    let num = Number(input[0]);
    let day = (input[1]);
    if (num >= 10 && num <= 18 && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' || day === 'Saturday')) {
        console.log("open");
    } else {
        console.log("closed");
    }
}
demo(["11",

    "Monday"])