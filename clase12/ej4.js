// Ejercicio 4: Ciclo For

const prompt = require('prompt-sync')();

let num = parseInt(prompt('Ingrese cualquier numero: '));
let impar = 0

for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
        impar++;
    }
}

console.log(`La cantidad de numeros impares son: ${impar}`);