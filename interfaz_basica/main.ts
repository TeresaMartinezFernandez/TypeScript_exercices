
interface Xmen {
    nombre:string,
    poder:string
}



function enviarMision (xmen : Xmen) {
    console.log(`enviando a ${xmen.nombre}`);
    
};
function enviarCuartel (xmen : Xmen) {
    console.log(`enviando al cuartel ${xmen.nombre}`);
    
};

let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "regeneracion"
};

enviarMision(wolverine);
enviarCuartel(wolverine);














