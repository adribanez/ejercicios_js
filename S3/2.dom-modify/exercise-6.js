const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (let app of apps) {
  const li = document.createElement("li");
  li.textContent = app;

  ul.appendChild(li);
}

document.body.appendChild(ul);
