const prompt = require('prompt-sync')();

let userAge = Number(prompt("How old are you? "))

if (userAge < 16) {
    console.log("You can't Drive.")
}

else if (userAge >= 16 && userAge <= 17) {
    console.log("You can drive, but can't vote.")
}

else if(userAge >= 18 && userAge <= 24) {
        console.log("you can vote, but you can't rent a car, yet. ")
}

else {
    console.log("you can pretty much do anything!")
}