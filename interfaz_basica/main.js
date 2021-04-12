function enviarMision(xmen) {
    console.log("enviando a " + xmen.nombre);
}
;
function enviarCuartel(xmen) {
    console.log("enviando al cuartel " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
