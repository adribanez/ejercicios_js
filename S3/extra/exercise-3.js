const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul = document.createElement("ul");

for (let car of cars) {
  const li = document.createElement("li");
  li.textContent = car;

  ul.appendChild(li);
}
const divAttribute = document.querySelector('[data-function="printHere"]');

divAttribute.appendChild(ul);


