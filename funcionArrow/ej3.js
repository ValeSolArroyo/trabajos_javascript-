// Ejercicio 3: Clasificación de edades

const prompt = require('prompt-sync')();

let edad = parseInt(prompt('Ingrese su edad: '));

let clasificacion = (edad) => { 
    if (edad >= 0 && edad <= 13) {
        return "Niño";
    } else if (edad >= 14 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 59) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
};

console.log(`Usted es un ${clasificacion(edad)}`);