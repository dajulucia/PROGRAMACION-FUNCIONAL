const hechos = [
    {
        relacion: "es_humano",
        sujeto: "Juan"
    },
    {
        relacion: "es_humano",
        sujeto: "Daniela"
    },
    {
        relacion: "estudiante",
        sujeto: "Marios"
    },
    {
        relacion: "estudiante",
        sujeto: "yesi"
    },
    {
        relacion: "perro",
        sujeto: "Guapo"
    }
]

//Programavion imperativa
const nuevoArreglo = [];
for (let i = 0; i < hechos.length; i++) {
    if (hechos[i].relacion === "estudiante") {
        nuevoArreglo.push(hechos[i])
    }
}
console.log(nuevoArreglo)

//Programacion funcional
const datosEstudiantes=hechos.filter(estudiante=>estudiante.relacion==="estudiante");
console.log(datosEstudiantes);

const datosEstudiante=hechos.find
(est=>est.relacion=="estudiante");
console.log(datosEstudiante);

const datEst=hechos.some(es=>es.relacion==="estudiante");
console.log(datEst);

const nuevosDatos= hechos.map(data=>data.relacion);
console.log(nuevosDatos);


//reglas (que hara nuestra funcion)
function EsMortal(sujeto){
    const esHumano=hechos.some(humano=>humano.relacion==="es_humano" && humano.sujeto===sujeto)
    return esHumano;
}
console.log(EsMortal("Daniela"));
console.log(EsMortal("Yesi"));
console.log(EsMortal("Guapo"));