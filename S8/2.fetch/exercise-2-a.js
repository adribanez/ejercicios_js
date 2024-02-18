const baseUrl = "https://api.nationalize.io?name=";

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const name = input.value.trim();

  const response = await fetch(baseUrl + name);
  const data = await response.json();
  console.log(data);
});
