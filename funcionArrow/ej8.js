// Ejercicio 8: Verificar origen del auto

const prompt = require('prompt-sync')();

const verificarOrigenAuto = (marca) => { 
    let origen;

// Verificar origen del auto
    if  (marca === 'Chevrolet' || marca === 'Ford' || marca === 'Fiat')  {
        origen = `${marca} es de origen nacional`;
    } else {
        origen= `${marca} es de origen importado`;
}
    return origen;
};

let marcaAuto = prompt("Ingrese la marca del auto (Primera letra MAY): ");
let resultado= verificarOrigenAuto(marcaAuto); console.log(resultado);
