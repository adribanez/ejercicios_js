const p = document.createElement("p");
p.textContent = "Voy en medio!";

const divs = document.querySelectorAll("div");
const div = divs[1];

document.body.insertBefore(p, div);
