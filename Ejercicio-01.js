const Hechos = [
    {Titulo: "Reac avanzado",Categoria: "Desarrollo", EsGratis:false, TieneCertificado:true },
    {Titulo: "Introduccion a UX/UI", Categoria: "Diseño", EsGratis:true, TieneCertificado:false },
    {Titulo: "Node.js y MongoDB", Categoria: "Desarrollo", EsGratis:true, TieneCertificado:true },
    {Titulo: "Figma para principiantes", Categoria: "Diseño", EsGratis:false, TieneCertificado:false },
]


//Encontrar los cursos de la categoría “Desarrollo y que además tengan certificado. 
const datos1= datos=>datos.Categoria==="Desarrollo" 
const datos2= datos=>datos.TieneCertificado===true

const combinacion1=datos=>datos1(datos) && datos2(datos)

const resul1= Hechos.filter(combinacion1)

console.log(resul1)

//Buscar cursos completamente gratis o que pertenezcan a la categoría “Diseño”. 
const datos3= datos=>datos.EsGratis===true
const datos4= datos=>datos.Categoria==="Diseño"
const combinacion2=datos=>datos3(datos) || datos4(datos)

const resul2= Hechos.filter(combinacion2)       
console.log(resul2)

//Encontrar una lista de curso , que no tengan certificado. 
const datos5= datos=>datos.TieneCertificado===false
const resul3= Hechos.filter(datos5)
console.log(resul3)

//Encuentra los cursos que sean de Desarrollo y que cumplan la siguiente condición de beneficio: (que sean Gratis o que si tengan certificado). 
const datos6= datos=>datos.Categoria==="Desarrollo"
const datos7= datos=>datos.EsGratis===true
const datos8= datos=>datos.TieneCertificado===true

const combinacion3=datos=>datos6(datos) && (datos7(datos) || datos8(datos))

const resul4= Hechos.filter(combinacion3)
console.log(resul4)
