const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

let products1 = products;

for (let value in products) {
  if (products[value].includes("Camiseta")) {
    console.log(products[value]);
  }
}
