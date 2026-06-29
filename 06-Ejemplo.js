//obtener turnos
let contador = 1;
function obtenerTurnos() {
    //let contador = 1;
    const turno=`Turno:${contador}`;
    contador++; 
    return turno;
}
//console.log(obtenerTurnos());
//console.log(obtenerTurnos());

function* obtenerTurnoY() {
    let contador = 1;
    while(true){
        yield `Turno:${contador}`;
        contador++;
    }
}
const cajero=obtenerTurnoY();
console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);
//procesador de palabras

function* procesadorPalabras(frase) {
    const palabras = frase.split(" ");
    const resultado=[],
    for(let palabra of palabras){
        console.log(`Procesando completo: ${palabra}`);
        resultado.push(palabra.toUpperCase());
    }
    return resultado;
}
const palabrasEscritas=procesadorPalabras("Programacion con js ");
console.log("resultado: ",palabrasEscritas.next().value);

