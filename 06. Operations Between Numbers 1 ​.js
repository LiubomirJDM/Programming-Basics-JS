function demo(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operaciq = (input[2]);
    let rezultat;
    let chetnoIliNechetno;
    if (operaciq === '+') {
        rezultat = n1 + n2;
        if (rezultat % 2 === 0) {
            chetnoIliNechetno = 'even';
            console.log(`${n1} ${operaciq} ${n2} = ${rezultat} - ${chetnoIliNechetno} `)
        } else if (rezultat % 2 !== 0) {
            chetnoIliNechetno = 'odd';
            console.log(`${n1} ${operaciq} ${n2} = ${rezultat} - ${chetnoIliNechetno} `)
        }
    } else if (operaciq === '-') {
        rezultat = n1 - n2;
        if (rezultat % 2 === 0) {
            chetnoIliNechetno = 'even';
            console.log(`${n1} ${operaciq} ${n2} = ${rezultat} - ${chetnoIliNechetno} `)
        } else if (rezultat % 2 !== 0) {
            chetnoIliNechetno = 'odd';
            console.log(`${n1} ${operaciq} ${n2} = ${rezultat} - ${chetnoIliNechetno} `)
        }
    } else if (operaciq === '*') {
        rezultat = n1 * n2;
        if (rezultat % 2 === 0) {
            chetnoIliNechetno = 'even';
            console.log(`${n1} ${operaciq} ${n2} = ${rezultat} - ${chetnoIliNechetno} `)
        } else if (rezultat % 2 !== 0) {
            chetnoIliNechetno = 'odd';
            console.log(`${n1} ${operaciq} ${n2} = ${rezultat} - ${chetnoIliNechetno} `)
        }
    } else if (operaciq === '%') {
        rezultat = n1 % n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} % ${n2} = ${(rezultat)}`)
        }
    }
    else if (operaciq === '/') {
        rezultat = n1 / n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} / ${n2} = ${(rezultat).toFixed(2)}`)
        }
    }
}
demo(["10",

    "12",
    
    "+"])