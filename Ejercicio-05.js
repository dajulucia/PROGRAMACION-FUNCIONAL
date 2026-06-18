//Ejercicio 5. De una lista de transacciones bancarias, un sistema de prevención de fraudes necesita:

const info=[
  { id: 1, tipo: 'deposito', monto: 10000 },
  { id: 2, tipo: 'retiro', monto: 6000 },
  { id: 3, tipo: 'retiro', monto: 1500 },
  { id: 4, tipo: 'retiro', monto: 8000 }
];

//1.	Filtrar solo las transacciones que sean de tipo "retiro" y superen los $5,000.
const datos= info=>info.tipo==="retiro" && info.monto >5000

const resul= info.filter(datos)
console.log(resul)


//2.	Aplicarles una tarifa/multa de penalización del 5% por movimiento de alto riesgo.
const datos2= info=>info.tipo==="retiro" && info.monto >5000

const resul2= info.filter(datos2).map(info=>({...info, monto: info.monto * 1.05}))
console.log(resul2)


//3.	Calcular el monto total de dinero penalizado que el banco recaudará.
const datos3= info=>info.tipo==="retiro" && info.monto >5000

const resul3= info.filter(datos3).reduce((total, info) => total + (info.monto * 0.05), 0)
console.log(resul3)