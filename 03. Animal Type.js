function demo(input) {
    let jivotno = (input[0]);
    switch (jivotno) {
        case "dog":
            console.log("mammal"); break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile"); break; default:
            console.log("unknown"); break;
    }
}
demo(["snake"])