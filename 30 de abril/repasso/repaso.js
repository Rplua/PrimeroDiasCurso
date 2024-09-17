// Variables
let c = "Hola que tal";
let n = 9;
let b = false;
 
n++;
c += " yo muy bien";
 
console.log(n);
console.log(c);
 
// Estructuras de control if (condicion){} else{}
if (n > 5) {
    console.log("Lo que pasa si n es mayor de 5");
} else { // opcional
    console.log("Lo que pasa si es menor");
}
 
// Las condiciones pueden ser complejas y utilizar los operadores lógicos
// AND && OR || NOT !
if (n > 5 && n < 10) {
    console.log("N es mayor de 5 Y menor de 10");
}
if (n == 5 || n == 6) {
    console.log("N es igual a 5 O igual a 6")
}
 
if (!(n == 5 || n == 6)) {
    console.log("N NO es igual a 5 ni igual a 6")
}
 
// switch nos evalua un valor y lo compara
switch (n) {
    case 1, 2, 3:
        console.log("N val 1, 2 o 3");
        break; // Romper el switch porque no si no sigue para adelante
    case 4:
        console.log("N vale 4");
        break;
    default:
        console.log("Cualquier otro valor")
}
 
let dia = "domingo";
switch (dia) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
        console.log("A trabajar");
        break;
    case "viernes":
        console.log("Por fin es viernes");
        break;
    case "sábado":
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día erróneo");
}
 
// if..else if.. else if
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves") {
    console.log("A trabajar");
} else if (dia == "viernes") {
    console.log("Por fin es viernes");
} else if (dia == "sábado" || dia == "domingo") {
    console.log("Fin de semana");
} else {
    console.log("Día erróneo");
}
 
let cantidad = 500;
if (cantidad < 100) {
    //-...
} else if (cantidad < 1000) {
 
} else if (cantidad < 5000) {
 
}
 
// Bucles
let i=0;
while(i<10){ // Mientras se cumpla esta condición
    i++;
    console.log(i)
}
 
do{
    i--;
    console.log(i)
} while(i>0);
 
// Bucle for(inicializacion,condicion,modificacion)
for(let i=0;i<10;i++){
    console.log(i);
}
for(let i=0;i<100;i+=5){
    console.log(i);
}
 
// Ámbito de las variables
// Una variable es visible dentro de las llaves donde está declarada
 
for(let i=0;i<10;i++){
    let j=i*4; // j solo es visible dentro del bucle
    console.log(i,j);
}
// console.log(j); // No existe
 
// funciones: nos permiten encapsular código
// Pueden tener parámetros y devolver resultados
 
function saludo(){
    console.log("Hola");
}
function saludo2(nombre){
    console.log("Hola "+nombre);
}
function saludo3(nombre){
    return "Hola "+nombre;
}
 
// Función pura: no depende de nada del entorno para ejecutarse
// Es como una caja negra, recoge parámetros y devuelve resultados
// Ante los mismos parámetros devuelve los mismos resultados
 
function suma(a,b){
    return a+b;
}
 
// No pura
let num1=5;
let num2=6;
function suma(){
    return num1+num2; // Esto funciona porque existen variables en el código, pero si o existieran daría error
}
 
// Nosotros tenemos funciones matemáticas en el objeto Math
console.log(Math.sqrt(81));
console.log(Math.PI);
console.log(Math.random());
 
// Las cadenas tienen sus propios métodos
 
let cadena="Hola que tal";
 
console.log(cadena.toUpperCase());
console.log(cadena.slice(3,6));
console.log(cadena.at(-3));
console.log(cadena.indexOf("que"));
 
// Arrays
// Colección o lista de elementos, se definen con []
let notas=[1,2,3,4];
let alumnos=["Ana","Eva","Pep"];
 
// Recorrer un array
for(let i=0;i<notas.length;i++){
    console.log(notas[i]);
}
 
// for of
for(let nota of notas){
    console.log(nota);
}
 
//foreach
notas.forEach(function(valor){
    console.log(valor);
})
 
// Array tiene sus métodos
notas.push(8); // Añade una nota
let nota=notas.pop(); // Nos quita la última nota
console.log(nota);
 
notas.at(-1); // último elemento del array
 
console.log(notas.slice(2,3))// Obtengo una parte del array
 
// Splice: navaja suiza. Posición donde intervengo, elemntos eliminados, añadir elementos
 
alumnos.splice(1,1,"Juan","Luis"); // En la posición 1 elimina un elemento y pon Juan y Luis
console.log(alumnos);
 
console.log(alumnos.includes("Juan"));
console.log(alumnos.indexOf("Juan"));
 
// Funciones de iteracción. Todas hacen una copia
 
console.log(notas.filter(nota=>nota%2==0));
console.log(notas.map(nota=>nota*2));
 
// Objetos nos permiten tener información estructurada
// Un objeto tiene varias propiedades que pueden tener cualquier valor
let alumno={
    nombre:"Juan",
    email:"j@j.com"
}
let mascota={
    nombre:"Toby",
    edad:12
}
console.log(mascota.edad);
 
// Puedo tener mezcla de todo (y esto es habitual)
 
let mascotas=[
    {
        nombre:"Toby",
        edad:12
    },{
        nombre:"firulai",
        edad:5
    },{
        nombre:"Bestia",
        edad:3
    },{
        nombre:"Piolín",
        edad:8
    },{
        nombre:"Jerry",
        edad:9,
        enfermedades:["soriasis","parásitos"]
    },{
        nombre:"Sultán",
        edad:2
    }
]
 
// mascotas es un array por lo que lo recorro como tal
 
for(let m of mascotas){
    if(m.edad>7){
        console.log(m);
        if (m.enfermedades){
            console.log(`${m.nombre} ha enfermado`);
            for(let enf of m.enfermedades){
                console.log(enf);
            }
        }
    }
}