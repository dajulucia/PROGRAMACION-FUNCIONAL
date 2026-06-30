const llenadotanque=Object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Magna",
    "04-Premium",
    "05-Premium",

]);
//Definir las reglas
const esPremiun=id=>id.includes("Premium");
//Definir la funcion
function* filtrarTipo(iterable,predicado){
    for(let gasolina of iterable){
         console.log("Analiza el arreglo;", gasolina)
        if(predicado(gasolina)){
            yield gasolina;
        }
    }
}

//definir  la consulta
const bombadeCarga=filtrarTipo(llenadotanque,esPremiun);
//Mostrar en pantalla
const premium=bombadeCarga.next().value;
console.log("Tipo gas",premium)