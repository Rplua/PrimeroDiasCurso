//Creación de un objecto 
//no se puede limitar las propiedades de un objecto
let alumno = {
    nombre : "Ana",
    email : "coso@gmail.com",
    telf : "6666666666"

}
console.log(alumno.nombre);
console.log(alumno.email);
console.log(alumno.telf);

//cambiar valores
alumno.nombre = "Ana Pi";
console.log(alumno);
//se le puede añadir una nueva propiedad
alumno.telfo = "62222";
console.log(alumno);
//se puede cambiar las propiedades con corchetes
alumno["email"]="a@a.com";
console.log(alumno);
//puedo cambiar el valor de una propiedad
//sin añadir una nueva
let prop = "telfo";

alumno[prop] = "111111"; // es lo mismo que alumno.telfo = "111111"
console.log(alumno);
//puedo recorrer y ver las propiedad de un objecto del objecto
for(let propiedad in alumno){
    console.log(propiedad,alumno[propiedad]);
}

