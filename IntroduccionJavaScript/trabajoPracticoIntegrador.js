const prompt = require('prompt-sync')();

// 1. Estructura de Datos.
// Crear un array de objetos llamado libros que contenga al menos 10 libros.
// Crear un array de objetos llamado usuarios con al menos 5 usuarios.

let libros = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Realismo mágico", disponible: true },
    { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible: false },
    { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Aventura", disponible: true },
    { id: 4, titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813, genero: "Romance", disponible: true },
    { id: 5, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", anio: 1925, genero: "Drama", disponible: false },
    { id: 6, titulo: "Matar a un ruiseñor", autor: "Harper Lee", anio: 1960, genero: "Drama", disponible: true },
    { id: 7, titulo: "La Odisea", autor: "Homero", anio: -700, genero: "Épico", disponible: true },
    { id: 8, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", anio: 1866, genero: "Filosofía", disponible: false },
    { id: 9, titulo: "Ulises", autor: "James Joyce", anio: 1922, genero: "Experimental", disponible: true },
    { id: 10, titulo: "El Hobbit", autor: "J.R.R. Tolkien", anio: 1937, genero: "Fantasía", disponible: true }
];

let usuarios = [
    { id: 1, nombre: "Juan", email: "juan.perez@gmail.com", librosPrestados: [1, 3] },
    { id: 2, nombre: "Ana", email: "ana.garcia@hotmail.com", librosPrestados: [2, 5, 6] },
    { id: 3, nombre: "Carlos", email: "carlos.lopez@hotmail.com", librosPrestados: [] },
    { id: 4, nombre: "María", email: "maria.rodriguez@gmail.com", librosPrestados: [7] },
    { id: 5, nombre: "Luis", email: "luis.martinez@gmail.com", librosPrestados: [8] }
];


// 2. Funciones de Gestión de Libros

// Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.function agregarLibro(id, titulo, autor, anio, genero) {
function agregarLibro(id, titulo, autor, anio, genero) {
    if (libros.find(libro => libro.id === id)) {
        console.log(`El libro con ID ${id} ya existe.`);
    } else {
        libros.push({ id, titulo, autor, anio, genero, disponible: true });
        console.log(`Libro ${titulo} agregado correctamente.`);
    }
}
    

// Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor) {
    return libros.find(libro => libro[criterio].toLowerCase() === valor.toLowerCase());
}

// Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o anio utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio) {
    n = libros.length; 
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                // Intercambiar los libros
                let aux = libros[j]; // aux para guardar el valor act
                libros[j] = libros[j + 1]; // valor siguiente en la posición actual
                libros[j + 1] = aux; // valor act en la posicion siguiente
            }
        }
    }
    console.log(`Libros ordenados por ${criterio}:`, libros);
}

// Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
    let index = libros.findIndex(libro => libro.id === id); 
    if (index !== -1) { 
        libros.splice(index, 1); 
        console.log(`Libro con ID ${id} ha sido borrado.`); 
    } else { 
        console.log(`No se encontró un libro con ID ${id}`); 
    }
}


// 3. Gestión de Usuarios

// Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email) {
    usuarios.push({ id: usuarios.length + 1, nombre, email, librosPrestados: [] });
}

// Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsarios() {
    return usuarios;
}

// Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email) {
    return usuarios.find(usuario => usuario.email === email);
}


// Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarLibroUsuario(nombre, email) {
    let index = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
    if (index!== -1) {
        usuarios.splice(index, 1);
        console.log(`Usuario ${nombre} con email ${email} ha sido borrado.`);
    } else {
        console.log(`No se encontró un usuario con nombre ${nombre} y email ${email}`);
    }
}


// 4. Sistema de Préstamos

// Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
    let libro = libros.find(libro => libro.id === idLibro);
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (libro && usuario && libro.disponible) {
        libro.disponible = false;
        usuario.librosPrestados.push(idLibro);
        console.log(`Libro con ID ${idLibro} prestado al usuario con ID ${idUsuario}.`);
    } else {
        console.log("No se puede prestar el libro o el usuario no existe.");
    }
}

// Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
    let libro = libros.find(libro => libro.id === idLibro);
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);
    let i = libros.filter(libro => libro.id !== id);
    if (libro && usuario && index !== -1) {
        libro.disponible = true;
        usuario.librosPrestados.splice(i, 1);
        console.log(`Libro con ID ${idLibro} devuelto por el usuario con ID ${idUsuario}.`);
    } else {
        console.log("No se puede devolver el libro o el usuario no existe.");
    }
}   


// 5. Sistema de Prestamos

// Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// Cantidad total de libros.
// Cantidad de libros prestados.
// Cantidad de libros por género.
// Libro más antiguo y más nuevo

function generarReporteLibros(){
    let totalLibros = libros.length;
    let librosPrestados = libros.filter(libro => !libro.disponible).length;
    let librosPorGenero = libros.reduce((acumulador, libro) => {
        if (acumulador[libro.genero]) {
            acumulador[libro.genero]++;
        } else {
            acumulador[libro.genero] = 1;
        }
        return acumulador;
    }, {});
    let libroMasAntiguo = libros.reduce((libroAnterior, libroActual) => {
        if (libroAnterior.anio > libroActual.anio) {
            return libroAnterior;
        } else {
            return libroActual;
        }
    }, {});
    let libroMasNuevo = libros.reduce((libroActual, libroAntiguo) => {
        if (libroActual.anio > libroAntiguo.anio) {
            return libroActual;
        } else {
            return libroAntiguo;
        }
    }, {});

    console.log(`total libros: ${totalLibros}, libros prestados: ${librosPrestados}, libros por genero: ${librosPorGenero}, libros mas nuevo: ${libroMasNuevo}, libro antiguo: ${libroMasAntiguo}`);

    let reporte =  {
        totalLibros: totalLibros,
        librosPrestados: librosPrestados,
        librosPorGenero: librosPorGenero,
        libroMasAntiguo: libroMasAntiguo,
        libroMasNuevo: libroMasNuevo
    };
    return reporte;
}


//6. Identificación Avanzada de libros

// Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres). La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.
function librosConPalabrasEnTitulo() {
    let libroFiltro = libros.filter(libro => {
        let palabra = libro.titulo.split(" ");
        return palabra.length > 1;
    });
    let titulos = libroFiltro.map(libro => libro.titulo);
    console.log("Libros con más de una palabra en título:", titulos);

    return titulos;
}


// 7. Cálculos Estadísticos

// Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
// Promedio de años de publicación de los libros.
// Año de publicación más frecuente.
// Diferencia en años entre el libro más antiguo y el más nuevo.
function calcularEstadisticas(){
    let promedioAnios = libros.reduce((acumulador, libro) => {
        return acumulador + libro.anio;
    }, 0) / libros.length;
    
    let frecuencias = {};
    for (let libro of libros) {
        frecuencias[libro.anio] = (frecuencias[libro.anio] || 0) + 1;
    };

    let añoFrecuente = null;
    let maxFrecuencia = 0;
    for (let anio in frecuencias) {
        if (frecuencias[anio] > maxFrecuencia) {
            maxFrecuencia = frecuencias[anio];
            añoFrecuente = anio;
        }
    };
    
    let libroAntiguo = libros.reduce((libroAnterior, libroActual) => {
        return libroAnterior.anio < libroActual.anio ? libroAnterior : libroActual;
    });
    
    let libroNuevo = libros.reduce((libroActual, libroAntiguo) => {
        return libroActual.anio > libroAntiguo.anio ? libroActual : libroAntiguo;
    });

    let diferencia = libroNuevo.anio - libroAntiguo.anio;
    
    console.log(`Promedio de años de publicación: ${promedioAnios}`);
    console.log(`Año de publicación más frecuente: ${añoFrecuente}`);
    console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${diferencia}`);
}


// 8. Manejo de Cadenas

// Crear una función normalizarDatos() que utilice métodos de strings para:
// Convertir todos los títulos a mayúsculas.
// Eliminar espacios en blanco al inicio y final de los nombres de autores.
// Formatear los emails de los usuarios a minúsculas.

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });

}




// 9. Menu
function menuPrincipal() {
    console.log("Bienvenido al Biblioteca Virtual");
    console.log("1. Agregar libro");
    console.log("2. Buscar libro");
    console.log("3. Ordenar libros");
    console.log("4. Borrar libro");
    console.log("5. Registrar usuario");
    console.log("6. Mostrar todos los usuarios");
    console.log("7. Buscar usuario");
    console.log("8. Borrar usuario");
    console.log("9. Prestar Libro");
    console.log("10. Devolver Libro");
    console.log("11. Generar Reporte");
    console.log("12. Libros cuyo título contiene más de una palabra");
    console.log("13. Calcular estadisticas");
    console.log("14. Normalizar datos");


    let opcion = prompt("Ingrese la opción deseada: ");
    switch (opcion) {
        case "1":
            let id = parseInt(prompt("Ingrese el ID del libro: "));
            let titulo = prompt("Ingrese el título del libro: ");
            let autor = prompt("Ingrese el autor del libro: ");
            let anio = parseInt(prompt("Ingrese el año del libro: "));
            let genero = prompt("Ingrese el género del libro: ");
            agregarLibro(id, titulo, autor, anio, genero);
            console.log(libros);
            break;
        case "2":
            let criterio = prompt("Ingrese el criterio de búsqueda (título, autor, género): ");
            let valor = prompt("Ingrese el valor para buscar: ");
            let libroEncontrado = buscarLibro(criterio, valor);
            if (libroEncontrado) {
                console.log(libroEncontrado);
            } else {
                console.log("Libro no encontrado.");
            }
            break;
        case "3":
            let criterioOrdenamiento = prompt("Ingrese el criterio de ordenamiento (título, anio): ");
            ordenarLibros(criterioOrdenamiento);
            console.log(libros);
            break;
        case "4":
            let idLibro = parseInt(prompt("Ingrese el ID del libro a borrar: "));
            borrarLibro(idLibro);
            console.log(libros);
            break;
        case "5":
            let nombre = prompt("Ingrese el nombre del usuario: ");
            let email = prompt("Ingrese el email del usuario: ");
            registrarUsuario(nombre, email);
            console.log(usuarios);
            break;
        case "6":
            console.log(mostrarTodosLosUsarios());
            break;
        case "7":
            let emailBuscar = prompt("Ingrese el email del usuario a buscar: ");
            let usuarioEncontrado = buscarUsuario(emailBuscar);
            if (usuarioEncontrado) {
                console.log(usuarioEncontrado);
            } else {
                console.log("Usuario no encontrado.");
            }
            break;
        case "8":
            let nombreBorrar = prompt("Ingrese el nombre del usuario a borrar: ");
            let emailBorrar = prompt("Ingrese el email del usuario a borrar: ");
            borrarLibroUsuario(nombreBorrar, emailBorrar);
            console.log(usuarios);
            break;
        case "9":
            let idLibroPrestar = parseInt(prompt("Ingrese el ID del libro: "));
            let usuarioPrestar = parseInt(prompt("Ingrese el ID del usuario: "));
            prestarLibro(idLibroPrestar, usuarioPrestar);
            console.log(libros);
            console.log(usuarios);
            break;
        case "10":
            let idLibroDevolver = parseInt(prompt("Ingrese el ID del libro: "));
            let usuarioDevolver = parseInt(prompt("Ingrese el nombre del usuario: "));
            devolverLibro(idLibroDevolver, usuarioDevolver);
            break;
        case "11":
            generarReporteLibros();
            break;
        case "12":
            librosConPalabrasEnTitulo();
            break;
        case "13":
            calcularEstadisticas();
            break;
        case "14":
            normalizarDatos();
            console.log(libros);
            console.log(usuarios);
            break;
        default:
    }


}

menuPrincipal();