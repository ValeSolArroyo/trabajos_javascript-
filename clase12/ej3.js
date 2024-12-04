// Ejercicio 3: Switch

const prompt = require('prompt-sync')();

let reseña = prompt('Ingrese una reseña de la pelicula (Muy buena, Buena, Mediocre, Mala, Muy mala): ').toLocaleLowerCase();

switch (reseña) {
    case "Muy buena":
        console.log("Calificaste a la pelicula como muy buena");
        break;
    case "Buena":
        console.log("Calificaste a la pelicula como buena");
        break;
    case "Mediocre":
        console.log("Calificaste a la pelicula como regular");
        break;
    case "Mala":
        console.log("Calificaste a la pelicula como mala");
        break;
    case "Muy mala":
        console.log("Calificaste a la pelicula como muy mala");
        break;
    default:
        console.log("Reseña no válida");
        break;
}

console.log("Gracias por su visita");