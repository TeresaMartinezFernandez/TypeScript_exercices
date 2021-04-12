type Heroe = {
    nombre:string, edad:number, poderes:string[],
    getNombre:()=>string  
};


let flash:Heroe = {
    nombre: "barry",
    edad:24,
    poderes: ["correr", "viajar"],
    getNombre(){
        return this.nombre
    }

};














