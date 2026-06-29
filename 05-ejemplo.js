//Generar numeros primos
const primosNumeros = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//funcion lazy
function* generadorPrimos() {
    let numero = 2;
    while (true) {
        if (primosNumeros(numero)) {
            yield numero;
        }
        numero++;
    }
}

const numerosPrimos=generadorPrimos();
console.log("primo 1: ",numerosPrimos.next().value);
console.log("primo 2: ",numerosPrimos.next().value);
console.log("primo 3: ",numerosPrimos.next().value);    
console.log("primo 4: ",numerosPrimos.next().value);
console.log("primo 5: ",numerosPrimos.next().value);