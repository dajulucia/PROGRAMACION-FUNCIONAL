const dataBanco = [{ nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
     { nombre: 'María', historialLimpio: true, ingresosEstables: false } ,
     { nombre: 'Jorge', historialLimpio: false, ingresosEstables: true } ]

//El banco ofrece una tarjeta de crédito "Black" de alta seguridad. Para calificar, 
// el cliente debe demostrar una estabilidad total: tener un historial crediticio limpio y percibir ingresos estables.  
const datos1= datos=>datos.historialLimpio===true
const datos2= datos=>datos.ingresosEstables===true

const combinacion1 = datos => datos1(datos) && datos2(datos)

const resul1 = dataBanco.filter (combinacion1)

//console.log(resul1)



//El banco quiere lanzar un programa de reactivación financiera y apoyo. 
// Se busca a clientes que tengan problemas en al menos una de sus áreas: que no tengan un historial limpio o que no tengan ingresos estables. 

const datos4= datos=>datos.historialLimpio===false
const datos5= datos=>datos.ingresosEstables===false

const combinacion2 = datos => datos4(datos) ||  datos5(datos)

const resul2 = dataBanco.filter (combinacion2)

//console.log(resul2)

//El departamento de cobranza e inversiones quiere identificar clientes de riesgo medio para un producto de reestructuración. 
//  perfiles que tengan ingresos estables, pero que no tengan un historial limpio. 
const datos6= datos=>datos.historialLimpio===false
const datos7= datos=>datos.ingresosEstables===true

const combinacion3 = datos => datos6(datos) && datos7(datos)

const resul3 = dataBanco.filter (combinacion3)

//console.log(resul3)

//Auditoría interna quiere saber si la sucursal está en riesgo operativo. 
//El sistema disparará una alerta general si existe al menos un cliente en la base de datos que tenga un historial manchado 
// y también carezca de ingresos estables (Riesgo Crítico). 
const datos8= datos=>datos.historialLimpio===false  
const datos9= datos=>datos.ingresosEstables===false

const combinacion4 = datos => datos8(datos) && datos9(datos)

const resul4 = dataBanco.some (combinacion4)
console.log(resul4)


//Para que el banco reciba una certificación internacional de calidad de cartera, 
// se requiere que todos los clientes cumplan con no ser un perfil fraudulento. 
// Un cliente es seguro si no ocurre que tenga el historial manchado y carezca de ingresos al mismo tiempo. 
const datos10= datos=>datos.historialLimpio===false
const datos11= datos=>datos.ingresosEstables===false

const combinacion5 = datos => !(datos10(datos) && datos11(datos))
const resul5 = dataBanco.every(combinacion5)
console.log(resul5)