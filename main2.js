const prompt = require('prompt-sync')();

numberDay = prompt("Pick a number greater than Zero and less than 8")

if (numberDay < 0 || numberDay >= 8) {
    console.log("Please enter the correct number range")
}
else if (numberDay === 1){
    console.log("Monday")
}
else if (numberDay === 2) {
    console.log("Tuesday")
}
else if (numberDay === 3) {
    console.log("Wednesday")
}
else if (numberDay === 4) {
    console.log("Thursday")
}
else if (numberDay === 5) {
    console.log("Friday")
}
else if (numberDay === 6) {
    console.log("Saturday")
}
else if (numberDay === 7) {
    console.log("Sunday")
}
