function demo(input) {
let depositSUM = Number(input[0]);
let periodInMonths = Number(input[1]);
let percent = Number(input[2]);
let sum = depositSUM + periodInMonths * ((depositSUM * percent / 100) / (6 + 6))
console.log(sum);
}
demo(["2350", "6 ", "7 "])