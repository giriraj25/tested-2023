let userGradeInput = prompt("Enter your grade:");

let userGrade = parseFloat(userGradeInput);

if (isNaN(userGrade)) {
    console.log("Invalid input. Please enter a valid numeric grade.");
} else {
    if (userGrade > 90) {
        console.log("A");
    } else if (userGrade >= 80 && userGrade <= 90) {
        console.log("B");
    } else if (userGrade >= 70 && userGrade < 80) {
        console.log("C");
    } else {
        console.log("D");
    }
}
