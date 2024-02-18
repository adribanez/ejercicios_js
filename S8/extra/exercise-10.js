const galleryContainer = document.querySelector(".b-gallery");
const loadMoreButton = document.getElementById("load-more");
let init = 0;
const limit = 5;

function fetchCharacters() {
  fetch(`http://localhost:3000/characters?_start=${init}&_limit=${limit}`)
    .then((response) => response.json())
    .then((characters) => {
      characters.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("b-gallery__item");

        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.alt = character.name;
        characterImage.classList.add("b-gallery__img");

        const characterName = document.createElement("h3");
        characterName.textContent = character.name;

        characterDiv.appendChild(characterImage);
        characterDiv.appendChild(characterName);
        galleryContainer.appendChild(characterDiv);
      });

      if (characters.length < limit) {
        loadMoreButton.style.display = "none";
      } else {
        init += limit;
      }
    });
}

loadMoreButton.addEventListener("click", fetchCharacters);

fetchCharacters();
