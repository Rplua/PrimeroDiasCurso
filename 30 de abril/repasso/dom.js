// En JS puedo seleccionar cualquier elemento HTML vía DOM
// DOM es document object model y tiene todos los elementos que se han pintado
 
let caja=document.getElementById("nombre");
console.log(caja);
let div=document.getElementById("resultado");
console.log(div);
 
let caja2=document.querySelector("#input"); // Nos coge el primer elemento que coincida con el selector css
 
let cajas=document.getElementsByTagName("input");
console.log(cajas);
for(let c of cajas){
    c.value="hola";
}
 
let caja3=document.querySelectorAll("input"); // Nos coge todos los elementos que coincida con el selector css
console.log(caja3)
 
// Con los objetos puedo cambiar sus propiedades
caja.value="Pepe";
caja.style.backgroundColor="red";
 
// Propiedades más interesantes: value en los elementos de formulario,
// innerHTML en los elementos HTML
div.innerHTML="<p>Viva el JS</p>"
console.log(div.innerText);
 
// Tenemos eventos que es una manera de reaccionar a la interacción del usuario
 
div.onclick=function(evt){
    console.log("Has pinchado en el div");
    console.log(evt);
}
 
caja.addEventListener("focus",function(evt){
    console.log("El input tiene el foco");
});
 
// mousedown, mouseup, keydown, keyup, focus, blur, mouseenter, mousemove, input...
 
// Podemos crear elementos nuevos
let nuevoParrafo=document.createElement("p");
nuevoParrafo.style.backgroundColor="green";
nuevoParrafo.innerHTML="Hola <b>que</b> tal";
nuevoParrafo.onclick=function(){
    console.log("cucu");
}
 
// Y añadirlos a cualquier sitio
div.append(nuevoParrafo); // append,prepend,after,before