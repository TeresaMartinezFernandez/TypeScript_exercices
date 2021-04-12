class Avenger {
    nombre:string = "antman";
    equipo:string = undefined;
    nombreReal:string =undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;
    constructor(  nombre:string, equipo:string, nombreReal:string  ){
       this.nombre =nombre;
       this.equipo = equipo;
       this.nombreReal = nombreReal;
        
    }
}

let antman:Avenger = new Avenger("antman", "cap", "scott");

console.log(antman);
















