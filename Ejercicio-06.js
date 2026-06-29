// Ejercicio 1. Generador de ID únicos para una base de datos.
// --- CÓDIGO TRANSFORMADO A FUNCIÓN PEREZOSA ---
function* generarIds() {
    for (let i = 1; i <= 100; i++) {
        yield `TEC-2026-${i}`;
    }
}
// Retorna los IDs uno a uno en lugar de cargar todo el arreglo en memoria

// Ejercicio 2. Paginación infinita, al hacer scroll se cargan 3 elementos a la vez.
// --- CÓDIGO TRANSFORMADO A FUNCIÓN PEREZOSA ---
const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];
function* obtenerTodoElFeed(posts, pageSize = 3) {
    console.log("-> Procesando e indexando los posts en el cliente...");
    for (let i = 0; i < posts.length; i += pageSize) {
        yield posts.slice(i, i + pageSize).map(p => `<html>${p}</html>`);
    }
}

// Ejercicio 3. Buscador de errores críticos en logs de un servidor.
// --- CÓDIGO TRANSFORMADO A FUNCIÓN PEREZOSA ---
const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"];
function* buscarTodosLosErrores(logs) {
    for (const log of logs) {
        if (log.includes("500")) {
            yield log;
        }
    }
}

// Ejercicio 4. Generador de la serie de Fibonacci.
// --- CÓDIGO TRANSFORMADO A FUNCIÓN PEREZOSA ---
function* serieFibonacci(limite) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < limite; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Ejercicio 5. Simulador de carrito de compras con IVA aplicado de forma perezosa.
// --- CÓDIGO TRANSFORMADO A FUNCIÓN PEREZOSA ---
const preciosAlmacen = [100, 200, 300, 400, 500];
function* aplicarIvaATodo(precios) {
    for (const precio of precios) {
        yield precio * 1.16;
    }
}

// Ejemplos de uso perezoso:
const ids = generarIds();
console.log(ids.next().value);
const feed = obtenerTodoElFeed(dbPosts);
console.log(feed.next().value);
const errores = buscarTodosLosErrores(logsServidor);
console.log(errores.next().value);
const fibonacci = serieFibonacci(6);
console.log(fibonacci.next().value);
const preciosConIva = aplicarIvaATodo(preciosAlmacen);
console.log(preciosConIva.next().value);
