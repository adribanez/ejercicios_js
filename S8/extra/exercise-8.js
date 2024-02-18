function loadCat() {
  const callCatButton = document.getElementById("call-cat");
  const catImageContainer = document.getElementById("cat-image-container");

  callCatButton.addEventListener("click", function () {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        const catImageUrl = data[0].url;
        const catImage = document.createElement("img");
        catImage.src = catImageUrl;
        catImageContainer.appendChild(catImage);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Eliminar";
        removeButton.addEventListener("click", function () {
          catImageContainer.removeChild(catImage);
          catImageContainer.removeChild(removeButton);
        });
        catImageContainer.appendChild(removeButton);
      });
  });
}

loadCat();
