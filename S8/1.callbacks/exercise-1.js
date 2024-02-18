const numbersList = [];

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function father(a, b, callback) {
  const result = callback(a, b);
  numbersList.push(result);
}

father(10, 10, sum);
father(10, 10, substract);

console.log(numbersList);
