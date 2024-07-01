function demo(input) {
    let num = Number(input[0])
    let combinations = 0 
    for(let a = 0; a <= num; a++){
        for(let b = 0; b <= num; b++) {
            for(let c = 0; c <= num; c++) {
                let x = a + b + c
                if (x == num ){
                    combinations++
                }
            }
        }
    }
    console.log(combinations)
    }
    demo(["20"])