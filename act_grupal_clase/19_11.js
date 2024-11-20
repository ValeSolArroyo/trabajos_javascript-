// Control de Inventarios

// Descripción: Sistema para gestionar el inventario, donde el usuario puede registrar ventas y consultar existencias.
// Conceptos clave:
// Variables que representen stock inicial.
// Restas y alertas (if) si el inventario está bajo.
// Validaciones lógicas para evitar errores (e.g., no vender más del stock disponible).

const prompt = require('prompt-sync')();

// stock inicial
let perfume = 100
let jabones = 100

let producto = prompt("Ingrese el producto (perfume, jabones):");
let cantidad = parseInt(prompt("Ingrese la cantidad a vender:")); 

if (producto === "perfume") {
    if (cantidad > perfume) {
        console.log('No se puede vender más del stock disponible.');
    } else {
        perfume -= cantidad;
        console.log(`Venta registrada. Stock restante de perfume: ${perfume}`);
        
        if (perfume < 10 && perfume > 0) {
            console.log('Advertencia: El inventario de perfumes está bajo.');
        }
        
        if (perfume <= 0) {
            console.log('No hay stock.');
        }
    }
} else if (producto === "jabones") {
    if (cantidad > jabones) {
        console.log('No se puede vender más del stock disponible.');
    } else {
        jabones -= cantidad;
        console.log(`Venta registrada. Stock restante de jabones: ${jabones}`);
        
        if (jabones < 10 && jabones > 0) {
            console.log('Advertencia: El inventario de jabones está bajo.');
        }
        
        if (jabones <= 0) {
            console.log('No hay stock.');
        }
    }
} else {
    console.log("Producto no válido. Intente con 'perfume' o 'jabones'.");
}