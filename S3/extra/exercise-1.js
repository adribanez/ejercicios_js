const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

for (let countrie of countries) {
  const li = document.createElement("li");
  li.textContent = countrie;

  ul.appendChild(li);
}

document.body.appendChild(ul);
