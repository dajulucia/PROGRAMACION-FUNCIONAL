const info=[
    {id: 1, Nombre: 'Autenticacion', Zona: 'us-east', consultaPorMinuto: 1200, activo: true,tecnologias:[' Node','Redis']},
    {id: 2, Nombre: 'Procesamiento Pagos', Zona: 'eu-west', consultaPorMinuto: 4500, activo: true,tecnologias:['java','spring']},
    {id: 3, Nombre: 'Recomendaciones AI', Zona: 'us-east', consultaPorMinuto: 25000, activo: false,tecnologias:['python','TensorFlow']},
    {id: 4, Nombre: 'Notificaciones', Zona: 'eu-central', consultaPorMinuto: 8500, activo: true,tecnologias:['NODE','RabbitMQ']},
    {id: 5, Nombre: 'Reportes Historicos', Zona: 'us-west', consultaPorMinuto: 500, activo: false,tecnologias:['Python','MongoDB']}
]

const datos1= info=>info.activo===true 
const datos2= info=>info.Zona==="us-east" || info.Zona==="us-west"
const datos3= info=>info.consultaPorMinuto >=1000
const datos4= info=>info.tecnologias.some(tecnologias=>tecnologias.trim().toLowerCase()==="node")

const combinacion1=info=>info.activo===false && datos3(info)
const resultado1=info.filter(combinacion1).map(info=>info.Nombre)
console.log(resultado1)

const combinacion2=info=>datos1(info) && (datos2(info) || datos3(info))
const resultado2=info.filter(combinacion2).map(info=>info.Nombre)
console.log(resultado2)

const combinacion3=info=>datos2(info) && datos4(info) && !datos3(info)
const resultado3=info.filter(datos1).reduce((acu,info)=>acu +info.consultaPorMinuto,0)
console.log(resultado3)