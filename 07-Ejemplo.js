//combinar progrmacion lazy con funcional
//definir los predicados atomicos
const esPar=n=>n%2===0;
const multiplocinco=n=>n%5===0;
//definimos la funcion
function* filtrarnumeros(iterable, predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}
function* generarnumeros(){
    let i=0;
    while (true) yield i++;
}
//Generar los numeros aleatorios
const numerosaleatorio=generarnumeros();
const generadorpares=filtrarnumeros(numerosaleatorio,multiplocinco);
console.log("Primer numero par", generadorpares.next().value) 
console.log("Segundo numero par", generadorpares.next().value)    
console.log("Tercer numero par", generadorpares.next().value)
