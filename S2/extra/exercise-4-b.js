const array1 = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const text1 = "Salamandra";

const array2 = ["Bmw", "Ferrari", "Ford", "Mazda", "Nissan", "Fiat"];
const text2 = "Mazda";

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (typeof index === "number") {
    array.splice(index, 1);
  }

  return array;
}

console.log(removeItem(array1, text1));
console.log(removeItem(array2, text2));
