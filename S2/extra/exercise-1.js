const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  { title: "Solo en Whatsapp", duration: 223, categories: ["comedia", "thriller"] },
  { title: "El gato con guantes", duration: 111, categories: ["comedia", "aventura", "animación"] },
];

const newArrayCategories = [];

let finalCategories = [];

for (const value of movies) {
  const newArrayCategories = value.categories;

  for (const categoria of newArrayCategories) {
    if (!finalCategories.includes(categoria)) {
      finalCategories.push(categoria);
    }
  }
}

console.log(finalCategories);
