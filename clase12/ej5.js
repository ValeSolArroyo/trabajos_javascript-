// Ejercicio 5: Ciclo For - Array

const prompt = require('prompt-sync')();

let notas = [];
let estudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes: "));

for (let i = 0; i < estudiantes; i++) {
    let nota = parseInt(prompt(`Ingrese la nota del estudiante ${i+1}: `));
    
    if (nota >= 0 && nota <= 10) {
        notas[i] = nota;
    } else {
        console.log(`La nota del estudiante ${i+1} ingresada no es válida. Ingrese una nota entre 0 y 10.`);
        i--; // Regresa al ciclo
    }
}

console.log(notas);