const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};


console.log("Number of floors in the building:", building.numberOfFloors);

console.log("Number of apartments on the first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Number of apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);

let secondTenant = building.nameOfTenants[1];
let roomsAndRent = building.numberOfRoomsAndRent[secondTenant];
console.log(`${secondTenant} has ${roomsAndRent[0]} rooms in his apartment.`);

let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

if ((sarahRent + davidRent) > danRent) {
    
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
}


console.log("Updated rent values:", building.numberOfRoomsAndRent);
