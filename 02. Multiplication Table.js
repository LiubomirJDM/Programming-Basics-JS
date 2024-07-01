function demo(input) {
    let n1 = Number(input[0])
    for (let i = 1; i <= 10; i++) {
        let t = i * n1
        console.log(`${i} * ${n1} = ${t}`)
    }
}
demo(["5"])