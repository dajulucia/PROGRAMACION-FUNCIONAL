const DatosBanco = [
    { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
    { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
    { nombre: 'Beto', edad: 30, rol: 'user', activo: false }
];

//Se necesita enviar un correo a los usuarios que tienen su cuenta deshabilitada.
 
const datos1= datos=>datos.activo=== false

const resul1= DatosBanco.filter(datos1)

console.log(resul1)

//Para poder entrar a una sección el usuario debe cumplir con dos condiciones estrictas: ser mayor de edad y tener cuenta activa. 

const datos2= datos=>datos.edad >18 
const datos3= datos=>datos.activo===true

const combinacion1=datos=> datos2(datos) && datos3(datos)

const resul2= DatosBanco.filter(combinacion1)


console.log(resul2)


//Se requiere una lista de usuarios especiales, si cuenta con un rol de admin y si es menor edad. 
const datos4= datos=>datos.rol===true
const datos5= datos=>datos.edad <18

const combinacion2=datos=> datos4(datos) && datos5(datos)

const resul3=DatosBanco.filter(combinacion2)

console.log(resul3)

// Queremos saber quiénes tienen permiso para editar, la regla dicta que, el usuario debe estar activo (o debe ser administrador o mayor de edad). 
const datos6= datos=>datos.activo===true
const datos7= datos=>datos.rol===true
const datos8= datos => datos.edad >18

const combinacion3=datos=> datos6(datos) || (datos7(datos)  || datos8(datos))

const resul4=DatosBanco.filter(combinacion3)

console.log(resul4)