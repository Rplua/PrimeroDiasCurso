//operador ternario 

//evaluar una condición (como un if ) pero en vez de tener líneas de código
//nos devuelve una expresión. Es un if sin código


let edad = 20;

if(edad >= 18){
    console.log("mayor de edad");
}else{
    console.log("no puedes entrar");
}

let mensaje = edad>=18?"Puedes entrar" : "No puedes entrar";
console.log(mensaje);

//solo sirve para expresiones 
function mayo(a,b){
    return a > b ? a : b;
}

//Temporizadores 

//Poder ejecutar una función en algún intervalo de tiempo, bien después de que pase
//un determinado momento o a intervalos regulares 

setTimeout(saludo, 3000); //la unidad es milisegundos 

function saludo(){
    console.log("Hola que tal");
}

setTimeout(function(){
    console.log("yo muy bien");
})

let alegro = setTimeout(()=>{console.log("pues me alegro")},7000);
clearTimeout(alegro); //cancelamos el intervalo 
//Ejecuta lo que pasamos cada x tiempo
setInterval(saludo,5000); //cada 5 segundo llama a saludo
//con función flecha
let cucu = setInterval(()=>{console.log("cucu")},2000);


setTimeout(function(){
    clearInterval(cucu); //Desactivar o parar el intervalo se puede hacer en cualquier momento
},200000)

let cont = 0;

setInterval(function(){
    cont++;
    document.getElementById("resultado").innerHTML = `<h1>${cont} Esto ocurre cada un segundo</h1>`;
},1000);

setTimeout(alterarDiv,2000);
//Settimout aninado. Es lo mismo que el intervalo pero más resistente a imprevistos.
function alterarDiv(){
    document.getElementById("resultado").innerHTML += 'esto ocurre cada dos segundos';
    setTimeout(alterarDiv,2000); //se llama a la función otra vez
}