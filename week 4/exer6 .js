function hotelCost() {
    let numberOfNights;
    do {
        numberOfNights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(numberOfNights));

    return numberOfNights * 140;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (!destination || typeof destination !== "string");

    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}

function rentalCarCost() {
    let numberOfDays;
    do {
        numberOfDays = prompt("How many days would you like to rent the car?");
    } while (isNaN(numberOfDays));

    let cost = numberOfDays * 40;

    if (numberOfDays > 10) {
        cost *= 0.95; 
    }

    return cost;
}

function totalVacationCost() {
    const hotelCostValue = hotelCost();
    const planeRideCostValue = planeRideCost();
    const rentalCarCostValue = rentalCarCost();

    const totalCost = hotelCostValue + planeRideCostValue + rentalCarCostValue;

    console.log(`The hotel cost: $${hotelCostValue}, the plane tickets cost: $${planeRideCostValue}, the car rental cost: $${rentalCarCostValue}.`);
    console.log(`Total vacation cost: $${totalCost}`);
}

totalVacationCost();
