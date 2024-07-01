function demo(input) {
    let a1 =input[0];
    if ( a1 === "square") {
        let a = Number(input[1]);
        console.log((a*a).toFixed(3));
    }else if (a1 ==="rectangle"){
        let a =Number(input[1]);
        let b =Number(input[2]);
        console.log((a*b).toFixed(3));
    }else if (a1 ==="circle"){
        let a =Number(input[1]);
        console.log((Math.PI * Math.pow(a,2)).toFixed(3));
    }else if (a1 ==="triangle"){
        let a =Number(input[1]);
        let b =Number(input[2]);
        console.log((1/2*(a*b)).toFixed(3));
        
    }
    }
demo(["square", "5"])