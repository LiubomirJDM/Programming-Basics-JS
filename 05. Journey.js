function demo(input) {
    let biudjet = Number(input[0]);
    let sezeon = input[1];
    let kudeEPochivkata;
    let harchZaSpane;
    let kacvaE;
    if (biudjet <= 100) {
        kudeEPochivkata = "Bulgaria";
        if (sezeon === 'summer') {
            harchZaSpane = biudjet * 0.3;
            kacvaE = "Camp";
            console.log(`Somewhere in ${(kudeEPochivkata)}`)
            console.log(`${(kacvaE)} - ${(harchZaSpane).toFixed(2)}`)
        } else if (sezeon === 'winter') {
            harchZaSpane = biudjet * 0.7;
            kacvaE = "Hotel";
            console.log(`Somewhere in ${(kudeEPochivkata)}`)
            console.log(`${(kacvaE)} - ${(harchZaSpane).toFixed(2)}`)
        }
    } else if (biudjet <= 1000) {
        kudeEPochivkata = "Balkans";
        if (sezeon === 'summer') {
            harchZaSpane = biudjet * 0.4;
            kacvaE = "Camp";
            console.log(`Somewhere in ${(kudeEPochivkata)}`)
            console.log(`${(kacvaE)} - ${(harchZaSpane).toFixed(2)}`)
        } else if (sezeon === 'winter') {
            harchZaSpane = biudjet * 0.8;
            kacvaE = "Hotel";
            console.log(`Somewhere in ${(kudeEPochivkata)}`)
            console.log(`${(kacvaE)} - ${(harchZaSpane).toFixed(2)}`)
        }
    } else if (biudjet > 1000) {
        kudeEPochivkata = "Europe";
        harchZaSpane = biudjet * 0.9;
        kacvaE = "Hotel";
        console.log(`Somewhere in ${(kudeEPochivkata)}`)
        console.log(`${(kacvaE)} - ${(harchZaSpane).toFixed(2)}`)
    }
}
demo(["1500", "summer"])