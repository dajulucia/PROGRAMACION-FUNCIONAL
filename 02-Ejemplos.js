//freeze
const nombres={nombre:"dany",rol:"admin"}
Object.freeze(nombres);
nombres.rol="user";
//console.log(nombres);

const nombres2=Object.freeze({nombre:"dany",rol:"admin"})
const nombresModificados={...nombres2,rol:"user"}
//console.log(nombresModificados);


