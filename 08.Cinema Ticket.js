function demo(input) {
    let day = (input[0]);
    let a2 = 12;
    let a4 = 14;
    let a6 = 16;
    if (day === 'Monday') {
        console.log(a2);
    } else if (day === 'Tuesday') {
        console.log(a2);
    } else if (day === 'Wednesday') {
        console.log(a4);
    } else if (day === 'Thursday' ) {
        console.log(a4);
    } else if (day === 'Friday') {
        console.log(a2);
    } else if (day === 'Saturday') {
        console.log(a6);
    } else if (day === 'Sunday') {
        console.log(a6);
    }
}
demo(["Monday"])