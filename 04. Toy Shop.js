function demo(input) {
    let a =Number(input[0]);
    let a1 =Number(input[1]);
    let a2 =Number(input[2]);
    let a3 =Number(input[3]);
    let a4 =Number(input[4]);
    let a5 =Number(input[5]);
    let s =a1*2.60+a2*3+a3*4.10+a4*8.20+a5*2;
    let b =a1+a2+a3+a4+a5;
     
    if(b>=50){
     d =s -(s*0.25);
    }
    else{
     d = s;
    }
    let b1 =d-(d*0.10);
    if(b1>=a){
        let b2 =b1-a;
        let b3=(b2.toFixed(2));
    console.log(`Yes! ${b3} lv left.`);
    }
    else{
        let b4=a-b1;
        let b5=(b4.toFixed(2));
    console.log(`Not enough money! ${b5} lv needed.`);
    }
    }
    demo(["40.8",

        "20",
        
        "25",
        
        "30",
        
        "50",
        
        "10"])