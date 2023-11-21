let fruits = ["Banana", "Oranges", "Blueberries", "Kiwi", "Apples"];

// Step 1: Remove "Banana" from the array
fruits.splice(fruits.indexOf("Banana"), 1);

// Step 2: Sort the array in alphabetical order
fruits.sort();

// Step 3: Add "Kiwi" to the end of the array
fruits.push("Kiwi");

// Step 4: Remove "Apples" from the array without using the same method as in part 1
fruits = fruits.filter(fruit => fruit !== "Apples");

// Step 5: Sort the array in reverse order
fruits.reverse();

// Output the final array
console.log(fruits);

