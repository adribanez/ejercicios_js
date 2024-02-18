const baseUrl = "https://api.nationalize.io?name=";

document.querySelector("button").addEventListener("click", async () => {
  const name = document.querySelector("input").value.trim();

  const response = await fetch(baseUrl + name);
  const data = await response.json();

  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";

  data.country.forEach((country) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `El nombre ${name} tiene un ${Math.round(
      country.probability * 100
    )} porciento de ser de ${country.country_id}.`;

    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", () => {
      resultContainer.removeChild(paragraph);
    });

    paragraph.appendChild(closeButton);
    resultContainer.appendChild(paragraph);
  });
});
