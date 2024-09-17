// Guardar información que se mantenga aunque actualicemos la página

// cookies es una manera pero están obsoletas
document.cookie="nombre=juan";

// La mejor manera actualmente es con localStorage

// Añado una propiedad 'nombre' con el valor 'juan'
localStorage.setItem("nombre","juan");

// Recupero ese valor
console.log(localStorage.getItem("nombre"));

// Elimino la propiedad (y, por supuesto, su valor)
localStorage.removeItem("nombre")

// Limpio todo el localstorage
localStorage.clear();

