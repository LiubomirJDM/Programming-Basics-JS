function demo(input){
    let n = Number(input[0]);
    let curent = 1;
    let printCurrentLIne = "";
    let isBiger = false
    for(let rows = 1;rows<=n;rows++){
        for(let cols = 1;cols<=rows;cols++)
       {
           if(curent>n){
               isBiger=true;
               break;
           }
           printCurrentLIne+=curent+" ";
           curent++;
       }
       console.log(printCurrentLIne);
       printCurrentLIne = "";
       if(isBiger){
           break;
       }

    }
}
demo(["7"])