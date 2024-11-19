// Ej 1
let edad = 19, peso = 53;

// Ej 2
const prompt = require('prompt-sync')();

let nombre = prompt('Cual es tu nombre? ');
edad = prompt('Cual es tu edad? ');
peso = prompt('Cual es tu peso? ');

console.log(`Tu nombre es ${nombre}, tu edad ${edad} y tu peso ${peso}`);

// Ej 3
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let ageUser = parseInt(prompt(`Cual es tu edad? `));

if (ageUser >= EDAD_MINIMA && ageUser <= EDAD_MAXIMA) {
    console.log("La edad ingresada es válida");
} else {
    console.log("La edad ingresada no es válida");
}

// Ej 4
let verdadero = true, texto = "texto", numero = 1, nada = null;

console.log(100 + numero);
console.log("Esto es un " + texto);

if (verdadero == true){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

if (nada == null){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

// Ej 5
let primerNumero = 5, segundoNumero = 10;

let resultadoSuma = primerNumero + segundoNumero
let resultadoResta = primerNumero - segundoNumero
let resultadoMultiplicacion = primerNumero * segundoNumero
let resultadoDivision = primerNumero / segundoNumero

console.log(resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision);

// Ej 6
let num1 = 1, num2 = 2

if (num1 && num2 > 10){
    console.log("Ambos num son mayores a 10");
} else {
    console.log("Ambos num no son mayores a 10");
}

// Ej 7
let var1 = "variable", var2 = 2;
console.log(var1, var2);
[var1, var2] = [var2, var1]
console.log(var1, var2);

// Ej 8
let celsius = parseFloat(prompt(`Ingrese temperatura en Celsius: `));
let fahrenheit = celsius * 9/5 + 32
console.log(`Celsius = ${celsius} pasados a Fahrenheit = ${fahrenheit}`);

// Ej 9
let altura = parseInt(prompt('Ingrese su altura: '));
let IMC = peso / (altura * altura);

console.log(`Su indice de Masa Corporal (IMC) es ${IMC}`);

// Ej 10
let precioProducto = parseFloat(prompt('Ingrese el precio del producto: '));
let porcentajeDescuento  = parseInt(prompt('Ingrese el porcentaje de descuento: '));

let montoDescuento = precioProducto * porcentajeDescuento / 100
let precioFinal = precioProducto - montoDescuento

console.log('Aplicado el descuento: ', montoDescuento);
console.log('Precio final: ', precioFinal);
