const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
const placesToTravel1 = [];

for (let value of placesToTravel) {
  if (value.id !== 11 && value.id !== 40) {
    placesToTravel1.push(value);
  }
}

console.log(placesToTravel1);
