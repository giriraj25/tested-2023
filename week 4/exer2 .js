function calculateTip() {
    let billAmount = prompt("Enter the amount of the bill:");

    billAmount = parseFloat(billAmount);

    if (isNaN(billAmount)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    let tipPercentage;
    if (billAmount < 50) {
        tipPercentage = 0.2; 
    } else if (billAmount >= 50 && billAmount <= 200) {
        tipPercentage = 0.15; 
    } else {
        tipPercentage = 0.1; 
    }

    let tipAmount = billAmount * tipPercentage;
    let finalBill = billAmount + tipAmount;

    console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
    console.log(`Final Bill: $${finalBill.toFixed(2)}`);
}

calculateTip();
