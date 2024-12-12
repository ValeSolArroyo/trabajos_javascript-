// Ejercicio 6: Tabla de Calificaciones (matriz)

const calificaciones = [
    [8, 7, 9], // Alumno 1
    [6, 9, 7], // Alumno 2
    [10, 8, 7] // Alumno 3
];

console.log(calificaciones);

console.log(`La segunda materia del segundo alumno ${calificaciones[1][1]}`);

calificaciones[0][2] = 10
console.log(calificaciones);

calificaciones.push([4, 7, 8]);
console.log(calificaciones);

calificaciones.forEach(function (alumno, i){
    let suma = 0;
    alumno.forEach(function (calificacion){
        suma += calificacion;
    });
    let promedio = suma / alumno.length
    console.log(`Alumno ${i + 1}: ${promedio}`);
});
