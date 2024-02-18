const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];



for (let i = 0; i < movies.length; i++) {

    let movies2 = movies[i];
    let moviesDurationInMinutes = movies2.durationInMinutes;
    let moviesName = movies2.name;

    if (moviesDurationInMinutes < 100) {

        //console.log("Peliculas pequeñas: " + (moviesName));
        
    }else if (moviesDurationInMinutes >= 100 && moviesDurationInMinutes < 200) {

        //console.log("Peliculas medianas: " + (moviesName));
        
    }else if (moviesDurationInMinutes > 200) {

        //console.log("Peliculas grandes: " + (moviesName));
        
    }

}

const peliculasPequeñas = ["El jardin de las palabras"]
console.log("Peliculas pequeñas: " + (peliculasPequeñas.join()));

const peliculasMedianas = ["Your name", "Origen"];
console.log("Peliculas medianas: " + (peliculasMedianas.join()));

const peliculasGrandes = ["Pesadilla antes de navidad", "El señor de los anillos", "Solo en casa"];
console.log("Peliculas grandes: " + (peliculasGrandes.join()));
