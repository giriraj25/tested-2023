let userInput;
let number;

do {
    userInput = prompt("Enter a number:");
    number = parseFloat(userInput);

    
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        
        while (number < 10) {
            userInput = prompt("Enter a number greater than or equal to 10:");
            number = parseFloat(userInput);

            if (isNaN(number)) {
                console.log("Invalid input. Please enter a valid number.");
            }
        }
    }
} while (isNaN(number) || number < 10);

console.log("You entered a valid number greater than or equal to 10:", number);
