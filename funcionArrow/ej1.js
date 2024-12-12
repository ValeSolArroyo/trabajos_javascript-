// Ejercicio 1: Calcular el precio final con IVA

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt('Ingresa el precio del producto: '));
let iva = parseFloat(prompt('Ingrese el porcentaje de IVA:'));
let precioFinal = calcularIva(precio, iva);

const calcularIva = (precio, iva) => precio + (precio * iva / 100);

console.log(`El precio final del producto: ${precioFinal}`);