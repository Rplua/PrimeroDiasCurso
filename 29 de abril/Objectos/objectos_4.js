let ana = {
    nombre : "Ana",
    edad : 20,
    mayorEdad: function(){
        return this.edad >= 18;
    }
} 

console.log(ana.mayorEdad()); //true porque es mayor
//accedemos a la propiedad y cambiamos el valor 
ana.edad = 15;
console.log(ana.mayorEdad()); //false por es menor
//se puede hacer una array de objetos
let alumnos = [{nombre:"Ana",edad:20,},{nombre:"joan",edad : 49}]

console.log(alumnos);

let alumno = {
    nombre : "Ana",
    notas: [4,7,2,5]

}
console.log(alumno);
let clase = [{nombre:"Ana",edad:20,notas:[{asignatura: "js", nota:6}]},{nombre:"joan",edad : 49,notas:[{asignatura: "js", nota:6}]}]

console.log(clase);

console.log(clase[0].notas[0].asignatura);

console.log(clase[1]?.notas[0].asignatura);

let nuevoAlumno = alumno; //se copia la referencia no el valor

nuevoAlumno.nombre = "Juan";
console.log(alumno);
console.log(nuevoAlumno);

let copiaBuena = structuredClone(alumno) //esto copia
copiaBuena.nombre = "pep";
console.log(alumno);
console.log(copiaBuena);


