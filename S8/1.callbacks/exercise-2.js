const userAnwsers = [];

function confirmExample(description) {
  const result = confirm(description);
  return result;
}

function promptExample(description) {
  const result = prompt(description);
  return result;
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}

father("¿Le gustaria recibir notificaciones?", confirmExample);
father("¿Cual es su nombre?", promptExample);
father("Indique su edad a continuacion:", promptExample);

console.log(userAnwsers);
