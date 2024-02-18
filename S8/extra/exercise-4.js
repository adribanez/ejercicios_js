const planetsContainer = document.querySelector('[data-function="planets"]');
const charactersContainer = document.querySelector(
  '[data-function="characters"]'
);

function loadPlanets() {
  fetch("http://localhost:3000/planets")
    .then((response) => response.json())
    .then(function (planets) {
      planets.forEach(function (planet) {
        const planetElement = document.createElement("div");
        planetElement.textContent = planet.name;
        planetElement.classList.add("planet");
        planetElement.dataset.id = planet.id;
        planetElement.addEventListener("click", function () {
          loadCharacters(planet.id);
        });
        planetsContainer.appendChild(planetElement);
      });
    });
}

function loadCharacters(planetId) {
  fetch(`http://localhost:3000/characters?idPlanet=${planetId}`)
    .then((response) => response.json())
    .then(function (characters) {
      charactersContainer.innerHTML = "";
      characters.forEach(function (character) {
        const characterElement = document.createElement("div");
        characterElement.innerHTML = `
                    <img src="${character.avatar}" alt="${character.name}">
                    <p>${character.name}</p>
                `;
        charactersContainer.appendChild(characterElement);
      });
    });
}

loadPlanets();
