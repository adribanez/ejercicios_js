const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let key in alumns) {
  let trimestre = 0;

  if (alumns[key].T1 === true) {
    trimestre++;
  }

  if (alumns[key].T2 === true) {
    trimestre++;
  }

  if (alumns[key].T3 === true) {
    trimestre++;
  }

  if (trimestre >= 2) {
    alumns[key].isAproved = true;
  } else {
    alumns[key].isAproved = false;
  }
}

console.log(alumns);
