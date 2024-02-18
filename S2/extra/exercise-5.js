function rollDice(sidesNumber) {
  const aleatoryNumber = Math.ceil(Math.random() * sidesNumber);
  return aleatoryNumber;
}

console.log("El resultado de la tirada es: " + rollDice(6));
