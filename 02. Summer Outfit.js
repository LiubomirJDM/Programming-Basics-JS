function demo(input) {
    let gradosi = Number(input[0]);
    let day = (input[1]);
    let drehi;
    let obuvki;
    if (day === 'Morning') {
        if (10 <= gradosi && gradosi <= 18) {
            drehi = 'Sweatshirt';
            obuvki = 'Sneakers';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        } else if (18 < gradosi && gradosi <= 24) {
            drehi = 'Shirt';
            obuvki = 'Moccasins';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        } else if (25 <= gradosi) {
            drehi = 'T-Shirt';
            obuvki = 'Sandals';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        }
    } else if (day === 'Afternoon') {
        if (10 <= gradosi && gradosi <= 18) {
            drehi = 'Shirt';
            obuvki = 'Moccasins';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        } else if (18 < gradosi && gradosi <= 24) {
            drehi = 'T-Shirt';
            obuvki = 'Sandals';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        } else if (25 <= gradosi) {
            drehi = 'Swim Suit';
            obuvki = 'Barefoot';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        }
    } else if (day === 'Evening') {
        if (10 <= gradosi && gradosi <= 18) {
            drehi = 'Shirt';
            obuvki = 'Moccasins';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        } else if (18 < gradosi && gradosi <= 24) {
            drehi = 'Shirt';
            obuvki = 'Moccasins';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        } else if (25 <= gradosi) {
            drehi = 'Shirt';
            obuvki = 'Moccasins';
            console.log(`It's ${gradosi} degrees, get your ${drehi} and ${obuvki}.`);
        }
    }
}
demo(["22",

    "Afternoon"])