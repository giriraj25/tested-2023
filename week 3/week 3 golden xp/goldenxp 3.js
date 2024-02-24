let num1Input = prompt("Enter the first number:");

let num1 = parseFloat(num1Input);

if (isNaN(num1)) {
    alert("Invalid input. Please enter a valid number for the first value.");
} 
else 
{
   let num2Input = prompt("Enter the second number:");
    
    let num2 = parseFloat(num2Input);

    
    if (isNaN(num2)) {
        alert("Invalid input. Please enter a valid number for the second value.");
    } else {
        
        let sum = num1 + num2;
        alert('Sum: ${sum}');

        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        
        
        let division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

        alert(`Subtraction: ${subtraction}\nMultiplication: ${multiplication}\nDivision: ${division}`);
    }
}
