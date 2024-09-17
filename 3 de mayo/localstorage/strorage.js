// El formato JSON me permite convertir cualquier variable JS en una cadena
// un array es una cadena con corchetes y los elementos "[1,2,3]"
// un objeto es  una cadena con llaves y las propiedades entre comillas
// {"nombre":"Juan","apellidos":Pi}
// cualquier combinación no es más que combinar lo anterior
// {"nombre":"Juan","apellidos":Pi, "notas":[1,2,3]}
 
// De variable a cadena con JSON.stringify
// De cadena a variable con JSON.parse
 
let alumnos=["Ana","Eva","Pep"]; // Esto es un array
let alumnosJSON=JSON.stringify(alumnos); // Esto es una cadena
 
console.log(alumnos);
console.log(alumnosJSON);
 
// De la cadena puedo volver a obtener el array
 
let alumnosCopia=JSON.parse(alumnosJSON);
console.log(alumnosCopia); // Es un array
 
let clase={nombre:"Aula 1",capacidad:30,alumnos:["Ana","Eva","Juan"]};
 
let claseJSON=JSON.stringify(clase);
 
console.log(clase); // Esto es un objeto
console.log(claseJSON); // Esto es un string
 
let claseCopia=JSON.parse(claseJSON);
console.log(claseCopia); // Esto es un objeto de nuevo