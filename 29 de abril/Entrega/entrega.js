/*
crear un objeto que nos permita
almacenar la información de un producto, 
que consiste en un nombre, 
una referencia (ambas de tipo string) y 
un precio y un stock (ambas de tipo numérico).
Cread un array con tres objetos de tipo 
productos. Los valores os los podéis inventar 
(ej: Tuerca, TRC45, 10,30)

Con este array haced lo siguiente:
Sumar el stock de todos los productos
Encontrar el producto más caro
Sumar 10 al stock de todos los productos
*/

//Objecto 
let información = {
    nombre :"Tuerca", //String
    referencia : "RF45", //String
    precio: 10, //int
    stock: 4, //int
}
//lista con los tres objectos
let listaObjectos = [
{nombre: "Tuerca",referencia: "RF45", precio: 50, stock: 500},
{nombre: "Tornillo",referencia: "RF35", precio: 20, stock: 500},
{nombre: "Arandela",referencia: "RF25", precio: 225, stock: 500}]


//Sumar el stock de los productos
let sum = 0;
//recorremos la lista 
for(let i = 0; i < listaObjectos.length; i++){
    //sumamos solo el stock que esta en la posición de la lista
    sum = sum + listaObjectos[i].stock;
}
console.log(`la suma de todo es stock de producto es ${sum}`);  

//Encontrar el producto más caro

//arrancamos con la primera propiedad del precio 
let cont = listaObjectos[0].precio;
// luego hacemos un bucle en la lista de objectos
for(let j = 1; j < listaObjectos.length; j++){
    //comparamos el valor de la lista empezando por 1 con el valor
    //que tenemos primero
    if(listaObjectos[j].precio > cont){
        //si es más grande tomamos ese valor
        cont = listaObjectos[j].precio
    }
}
console.log("el precio más alto es: " + cont);


//Recorremos toda la lista empezando por la primera posición 
for(let x = 0; x < listaObjectos.length; x++ ){
    //y le sumamos 10 a todo los stocks
    listaObjectos[x].stock = listaObjectos[x].stock + 10;
}
console.log(listaObjectos);