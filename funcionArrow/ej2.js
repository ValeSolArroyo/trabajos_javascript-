// Ejercicio 2: Calcular promedio de calificaciones

const prompt = require('prompt-sync')();

let calificaciones = [];
for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingresa la calificación ${i + 1}: `));
    calificaciones.push(calificacion);
}

// Función flecha para calcular el promedio
const calcularPromedio = (calificaciones) => {
    const suma = calificaciones.reduce((total, calificacion) => total + calificacion);
    return suma / calificaciones.length;
};

// Calcular e imprimir el promedio
const promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio}`);