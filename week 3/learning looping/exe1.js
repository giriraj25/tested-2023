const people = ["Greg", "Mary", "Devon", "James"];

// Part I 
people.shift();

let jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people[jamesIndex] = "Jason";
}

people.push("Yourname");

console.log("Mary's index:", people.indexOf("Mary"));

let peopleCopy = people.slice(1, -1);

console.log("Copy of people array:", peopleCopy);

console.log("Index of 'Foo':", people.indexOf("Foo"));

let last = people[people.length - 1];
console.log("Last element in the array:", last);

// Part II - Loops

console.log("\nIterating through the people array:");
for (let person of people) {
    console.log(person);
}


console.log("\nIterating through the people array and exiting after 'Devon':");
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}
