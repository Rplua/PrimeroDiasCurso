//Fase 2

//Creamos una Lista de objetos con preguntas y respuestas
const preguntas = [{
    pregunta: "Con qué propiedad de CSS se cambia el color de fondo",
    correcta0: "background-color",
    incorrecta1: "color",
    incorrecta2: "font-size"
},{
    pregunta: "Con qué propiedad de CSS se cambia el color de la letra",
    correcta0: "color",
    incorrecta1: "background-color",
    incorrecta2: "font-size"
},{
    pregunta: "Con qué propiedad de CSS se cambia el tamaño de la letra",
    correcta0: "font-size",
    incorrecta1: "color",
    incorrecta2: "background-color"
},{
    pregunta: "Con qué propiedad de CSS se cambia el estilo de la letra",
    correcta0: "font-family",
    incorrecta1: "color",
    incorrecta2: "background-color"
},{
    pregunta: "Con qué propiedad de CSS se cambia cambia el ancho de un elemento",
    correcta0: "width",
    incorrecta1: "background-color",
    incorrecta2: "height"
},{
    pregunta: "Con qué propiedad de CSS se  el margen de un elemento",
    correcta0: "background-color",
    incorrecta1: "padding",
    incorrecta2: "margin"
},{
    pregunta: "Con qué propiedad de CSS se cambia el alto de un elemento",
    correcta0: "height",
    incorrecta1: "border",
    incorrecta2: "border-radius"
},{
    pregunta: "Que símbolo de CSS es un id",
    correcta0: "#",
    incorrecta1: ".",
    incorrecta2: "id"
},{
    pregunta: "Con símbolo de CSS es un clase",
    correcta0: ".",
    incorrecta1: "class",
    incorrecta2: ".."
},{
    pregunta: "¿Como se escribe verdadero en JS?",
    correcta0: "true",
    incorrecta1: "True",
    incorrecta2: "TRUE"
}

]
// ¿Como se como se la respuesta correcta?
// ¿Comprar el inner.text con la pregunta correcta ?
// ¿Como se le id de la respuesta correcta?
// ¿Como se si cuando lo toques pasa algo sume puntos?
// ¿Como muestro una pregunta solo?
// 
// 
// 
// 
// 
// 
// 
// 
// 
// Variable global para llevar el control de los puntos
let puntos = 0;

//Primero buscamos el botón start por el id

let botStart = document.getElementById("empezar");
//Cuando pulsemos al botón tenemos que llamar a un evento

botStart.addEventListener("click",empezarJuego);

//Ahora hacemos la función empezarJuego.

function empezarJuego(){

}



// Función para randomizar las respuestas
function shuffleAnswers(preguntas) {
    // Creamos una nueva lista que contenga las respuestas
    const respuestaNew = [preguntas.correcta0, preguntas.incorrecta1, preguntas.incorrecta2];
    // Luego le hacemos un orden aleatorio a la lista de respuestas
    return respuestaNew.sort(() => Math.random() - 0.5);
}

