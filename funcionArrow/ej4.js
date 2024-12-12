// Ejercicio 4: Calcular descuento por cantidad

const prompt = require('prompt-sync')();

let producto = prompt('Ingrese la cantidad de productos comprados: ');

for (let i = 0; i < producto.length; i++) {
    let precio = parseInt(prompt(`Ingrese el precio del producto ${i+1}: `));
}