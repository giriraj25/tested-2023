// Prompt the user for a number and convert it to an integer
let userInput = prompt("Please enter a number:");
let number = parseInt(userInput);

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}
