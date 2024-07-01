function demo(input) {
    let word = input[0];
    let sum = 0;
    for (let index = 0; index < word.length; index++) {
        let curr = word[index];
        switch (curr) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
        }
        
    }
    console.log(sum);
}
demo(["bamboo"])