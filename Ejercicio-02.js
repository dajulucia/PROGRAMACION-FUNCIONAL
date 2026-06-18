const  hechos = [
    { Padre: "Juan", Hijo: "Luis" },
    { Padre: "Juan", Hijo: "Pedro" },
    { Padre: "Abraham", Hijo: "Juan" },
]


const hermanos = hechos.filter(
    persona => persona.Padre === "Juan"
);

console.log(hermanos);

const nietos = hechos.filter(
    persona => persona.Padre === "Abraham"
);
console.log(nietos);


// Preguntas Logicas 

//¿Es cierto que Abraham es el padre de Juan?
const esAbrahamPadreDeJuan = hechos.some(
    persona => persona.Padre === "Abraham" && persona.Hijo === "Juan"
);
console.log(esAbrahamPadreDeJuan);

//¿Quien es el padre de Luis?
const padreDeLuis = hechos.find(
    persona => persona.Hijo === "Luis"
);
console.log(padreDeLuis.Padre);

//¿Quienes son los hijos de Juan?
const hijosDeJuan = hechos.filter(
    persona => persona.Padre === "Juan"
).map(persona => persona.Hijo);
console.log(hijosDeJuan);