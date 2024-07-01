function demo(input) {
    let a1 = input[0];
    let password ="s3cr3t!P@ssw0rd";
    if (a1==password) {
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }
    
 }
 demo(["qwerty"])