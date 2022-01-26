let nombre = prompt("Ingrese nombre");
let contadorTurnos= 0;


function tiempoEspera(){
    do{
        nombre = prompt("Ingrese nombre");
        if (contadorTurnos<15){
        contadorTurnos++;
        let espera = contadorTurnos*20; //calculando 2o minutos por turno
        // console.log(`turno nro. ${contadorTurnos} asignado a: ${nombre}`);   <-- Si concateno así me tira error expression expected ts 1109
        console.log("El turno nro. " + contadorTurnos + "  ha sido asignado a: " + nombre + ". El tiempo de espera aproximado es de " + espera + " minutos.");}   else {
            alert("Nos hemos quedado sin tunos, lo siento");
            break;}   
    } while(contadorTurnos<100);
}

tiempoEspera();

//la idea sería que cuando la espera sea de más de una hora, en vez de decir cuántos minutos de espera son, lo ase a "x horas y x minutos"
// if (espera>= 60){
//     console.log(espera/60);
// }

