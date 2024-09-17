//Como ordenar arrays

let alumnos = ["Juan","Ana","Pep","Eva"];

//te ordena el propio array no hace uno nuevo
console.log(alumnos);
//lo ordena alfabéticamente 
alumnos.sort();
console.log(alumnos);
//lo pone de último a primero
alumnos.reverse();
console.log(alumnos);


let notas = [1,4,2,8,3,9,7,5,10];
console.log(notas);
//al sort se le puede poner una función de orden.
notas.sort();
//el orden ordena los números alfabéticamente
console.log(notas);


//función dentro del sort para ordenar numéricamente 
notas.sort(function(a,b){
    //si devuelve un número positivo están desordenados 
    //si es negativo están ordenados 
    //si es 0 es igual
    return a - b;
})
console.log(notas);

let lista = ["Tuerca", "Arandela", "Clavo"];
//Ordena una lista y crea una copia
let ordenados = lista.toSorted();
console.log("lista antigua sin orden: " + lista);
console.log("lista copia ordenada: "+  ordenados);
//lo mismo con toReverse
let desornde = lista.toReversed();
console.log(desornde);

//Desorden 
// Desordenar (pero no es la mejor manera)
notas.sort(()=>0.5-Math.random());

console.log(notas)