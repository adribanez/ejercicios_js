const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let country of countries) {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = country.title;

  const img = document.createElement("img");
  img.src = country.imgUrl;

  const buttonDiv = document.createElement("button");
  textContent = "Eliminar";
  buttonDiv.addEventListener("click", () => {
    remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(button);
  document.body.appendChild(div);
}


