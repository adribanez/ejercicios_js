const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities.map(citie => {
    if(citie.isVisited === true){
        return citie.name + " Visitado";
    }else{
        return citie.name;
    }
});

console.log(citiesVisited);
