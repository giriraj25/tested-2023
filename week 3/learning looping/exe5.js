const family = {
    father: "John",
    mother: "Jane",
    son: "Tom",
    daughter: "Emily",
    pet: "Max",
};

console.log("Keys of the family object:");
for (let key in family) {
    console.log(key);
}

console.log("\nValues of the family object:");
for (let key in family) {
    console.log(family[key]);
}
