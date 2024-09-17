//Constructor de objectos
function Alumno(nombre, edad, email){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
}
//creamos un objecto Ana con los parámetros del constructor
let ana = new Alumno("Ana",12,"ee@.com");

console.log(ana);