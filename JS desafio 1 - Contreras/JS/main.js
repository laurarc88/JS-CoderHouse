//Calculadora de años bisiestos
let year=prompt("Ingresa un año. Para terminar escriba SALIR");
while(year != "SALIR"){
    if (((year % 4 == 0) && (year % 100 != 0 )) || (year % 400 == 0)){
        alert("El año " + year + ' es bisiesto. ');
    } else {
        alert("El año " + year + ' no es bisiesto. ');
    }
}