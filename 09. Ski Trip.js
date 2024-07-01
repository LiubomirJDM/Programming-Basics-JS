function demo(input){
    let days =Number(input[0]) - 1;
    let roomType =input[1];
    let score =input[2];
    let roomPricePerNight = 0;
    let discount = 0;
    if(roomType === "room for one person"){
        roomPricePerNight =18;
    }else if(roomType ==="apartment"){
        roomPricePerNight =25;
        if(days < 10){
            discount =0.30;
        }else if(days>=10 && days<=15){
            discount =0.35;
        }else{
            discount =0.50;
        }
    }else if(roomType ==="president apartment"){
        roomPricePerNight =35;
        if(days < 10){
            discount =0.10;
        }else if(days>=10 && days<=15){
            discount =0.15;
        }else{
            discount =0.20;
        }
    
    }
    let fullS =days*roomPricePerNight;
     fullS =fullS-(fullS*discount);
    if(score ==="positive"){
    fullS =fullS+(fullS*0.25);
    }else if(score ==="negative"){
    fullS =fullS-(fullS*0.10);
    }
    console.log((fullS).toFixed(2));
    }
    demo(["30",

        "president apartment",
        
        "negative"])