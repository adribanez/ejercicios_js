async function FetchDataDiary() {
  const response = await fetch("http://localhost:3000/diary");
  const diaryEntries = await response.json();
  const diaryContainer = document.getElementById("diary-container");

  for (const entry of diaryEntries) {
    const entryDiv = document.createElement("div");
    entryDiv.dataset.id = entry.id;
    entryDiv.innerHTML = `
      <h3>${entry.title}</h3>
      <h5>${entry.date}</h5>
      <p>${entry.description}</p>
      <button onclick="deleteEntry(${entry.id})">Eliminar</button>
    `;
    diaryContainer.appendChild(entryDiv);
  }
}

async function deleteEntry(id) {
  await fetch(`http://localhost:3000/diary/${id}`, { method: "DELETE" });
  const entryDiv = document.querySelector(`div[data-id="${id}"]`);

  if (entryDiv) {
    entryDiv.remove();
  }
}

FetchDataDiary();
