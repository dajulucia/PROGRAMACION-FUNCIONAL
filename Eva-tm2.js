//EJERCICOI1

function deepFreeze(obj){
    Object.freeze(obj);

    Object.keys(obj).forEach(prop =>{
        if(
            obj[prop] !== null && 
            typeof obj[prop] === "object" &&
            !Object.isFrozen(obj[prop])
        ){
            deepFreeze(obj[prop]);
        }
        
    });
    return obj;
}
const peticionesHttp = deepFreeze([ { id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    payload: "SELECT * FROM users" },
     { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" }, 
      { id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    payload: "ping" }, 
      { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950,  payload: "normal_profile_update" }, 
      { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" },    
      { id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 500,  payload: "exec MaliciousScript" }  
    ]); 

    const esMetodoEscritura= m=>m.metodo === "POST";
    const esLatenciaAlta= m=>m.latenciaMs >= 2000;
    const esPayloadSospechoso =M=> M.payload.includes("DROP") ||  M.payload.includes("SELECT")||  M.payload.includes("MaliciousScript");

  const detectarAmenazaPotencial = M=>  esMetodoEscritura(M) && (esLatenciaAlta(M) || esPayloadSospechoso(M));
  function* analizadorSeguridadLazy(flujo, regla){
    for(const m of flujo){
        if(regla(m)){
            yield m ;
        }
    }
  }

const analizador = analizadorSeguridadLazy(
    peticionesHttp,
    detectarAmenazaPotencial
);

const amanaza1= analizador.next().value;

const amanaza2= analizador.next().value;

const amenazas = [amanaza1,amanaza2];
console.log(amenazas);

const promedio = amenazas.reduce(
    (ac,m) => ac + m.tamanioPayloadKb,
    0
) /amenazas.length;

console.log(promedio)

//EJERCICIO2

function deepFreeze(obj){
    Object.freeze(obj);

    Object.keys(obj).forEach(prop =>{
        if(
            obj[prop] !== null &&
            typeof obj[prop]== "object" &&
            !Object.isFrozen(obj[prop])
        ){
            deepFreeze(obj[prop]);
        }
    })
    return obj;
}

const ordenesEnvio = deepFreeze( [ { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4,   distanciaKm: 8,   asegurado: false },
    { id: "ORD-102", tipo: "express",  destino: "Veracruz", pesoKg: 22,  distanciaKm: 120, asegurado: true },
    { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15,  asegurado: false },
    { id: "ORD-104", tipo: "express",  destino: "Tabasco", pesoKg: 5,   distanciaKm: 3,   asegurado: false },
    { id: "ORD-105", tipo: "express",  destino: "Yucatán",  pesoKg: 18,  distanciaKm: 250, asegurado: false },
    { id: "ORD-106", tipo: "express",  destino: "Chiapas",  pesoKg: 35,  distanciaKm: 190, asegurado: true }    
]); 

const esEnvioExpress = x =>x.tipo === "express";
const esPaquetePesado = x =>x.pesoKg >= 15;
const esRutaForanea = x=> x.destino !== "Tabasco";

const esDespachoPrioritario = x => esEnvioExpress(x) && (esPaquetePesado(x) || esRutaForanea(x));

function* despachadorOrdenesLazy(flujo,regla){
    for(const x of flujo){
        if(regla(x)){
            yield x;
        }
    }
}

const despachador = despachadorOrdenesLazy(
    ordenesEnvio, esDespachoPrioritario
);


const orden1= despachador.next().value;
const orden2= despachador.next().value;

const ordenes= [orden1,orden2];

console.log(ordenes);

const promedio = ordenes.reduce(
    (ac, x)=> ac + x.distanciaKm,
    0
)/ ordenes.length

console.log("Promedio:", promedio);