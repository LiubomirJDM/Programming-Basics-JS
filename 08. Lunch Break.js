function demo(input) {
    let film = input[0];
    let epizod = Number(input[1]);
    let pochivka = Number(input[2]);
   let vremeZaQdene= 1 / 8 * pochivka;
   let pochivnoVreme = 1/ 4 * pochivka;
 
   pochivka -= vremeZaQdene;
   pochivka -= pochivnoVreme;
 
    if (pochivka >= epizod) {
 
        console.log(`You have enough time to watch ${film} and left with ${Math.ceil(pochivka - epizod)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${film}, you need ${Math.ceil(epizod - pochivka)} more minutes.`);
    }
}
demo(["Teen Wolf",

    "48",
    
    "60"])