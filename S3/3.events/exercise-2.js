function focusFunction(event) {
  console.log(event);
}

document.querySelector("input").addEventListener("focus", focusFunction);
