const array1 = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const text1 = "Ajolote";

const array2 = ["Bmw", "Ferrari", "Ford", "Mazda", "Nissan", "Fiat"];
const text2 = "Nissan";

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
}

console.log(findArrayIndex(array1, text1));
console.log(findArrayIndex(array2, text2));
