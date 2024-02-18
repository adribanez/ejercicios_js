let array1 = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  return array;
}

console.log(swap(array1, 0, 2));
console.log(swap(array1, 1, 3));
