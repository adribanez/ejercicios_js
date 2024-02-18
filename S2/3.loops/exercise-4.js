const toys = [
  { id: 40, name: "El gato felix" },
  { id: 5, name: "Buzz MyYear" },
  { id: 40, name: "El gato con Guantes" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
];

for (let value of toys) {
  if (value.name.includes("gato")) {
    const deleteItem = toys.indexOf(value);
    toys.splice(deleteItem, 1);
  }
}

console.log(toys);
