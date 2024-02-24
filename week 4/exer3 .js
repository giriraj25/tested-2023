function isDivisible(divisor) {
    let sum = 0;

    for (let number = 0; number <= 500; number++) {
        if (number % divisor === 0) {
            console.log(number);
            sum += number;
        }
    }

    console.log(`Sum: ${sum}`);
}

console.log("Numbers divisible by 23:");
isDivisible(23);

console.log("\nNumbers divisible by 3:");
isDivisible(3);

console.log("\nNumbers divisible by 45:");
isDivisible(45);
