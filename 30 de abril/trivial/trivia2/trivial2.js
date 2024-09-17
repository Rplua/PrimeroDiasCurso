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

// Si se pulsa el botón, llamamos a empiezaElJuego
const botStart = document.getElementById("empezar");
botStart.addEventListener("click", empiezaElJuego);


//las hacemos globlas para poder acceder a ellas en todo momento
// Inicializamos los puntos
let puntos = 0;
let preguntaActual = 0; // Variable para llevar el seguimiento de la pregunta actual

// Función para iniciar el juego
function empiezaElJuego() {
    // Oculta el botón de inicio
    botStart.style.display = "none"; 
    // Mostramos la pregunta actual
    mostrarPregunta(preguntaActual); 
    //Ahora vamos a mostar la puntuación
   
}

// Función para mostrar una pregunta y sus botones de respuesta
function mostrarPregunta(index) {

    console.log("Mostrando la pregunta " + index);
    //cogemos el contenedor donde vamos a meter las preguntas
    const divContenedor = document.getElementById("contenedor");
    // Limpiamos el contenedor
    divContenedor.innerHTML = ""; 
    //creamos 
    const pregunta = crearPregunta(preguntas[index].pregunta);
    const botones = crearBotones(preguntas[index]);

    divContenedor.appendChild(pregunta);
    divContenedor.appendChild(botones);

    asignarEventos(); // Asignamos eventos a los botones de respuesta
}

// Función para crear una pregunta
function crearPregunta(pregunta) {
    console.log("Creando pregunta: " + pregunta);
    const preguntaNew = document.createElement("h1");
    preguntaNew.textContent = pregunta;
    return preguntaNew;
}

// Función para crear botones con las respuestas
function crearBotones(pregunta) {
    console.log("Creando botones para la pregunta: " + pregunta.pregunta);
    let divBotones = document.createElement("div");
    const respuestasOrdenadas = shuffleAnswers(pregunta);

    for (let j = 0; j < respuestasOrdenadas.length; j++) {
        const respuestaNew = document.createElement("button");
        respuestaNew.textContent = respuestasOrdenadas[j];
        divBotones.appendChild(respuestaNew);
    }

    return divBotones;
}

// Función para asignar eventos a los botones de respuesta
function asignarEventos() {
    console.log("Asignando eventos a los botones de respuesta");
    const botones = document.querySelectorAll("#contenedor button");
    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            console.log("Se ha hecho clic en un botón de respuesta.");
            const respuestaSeleccionada = boton.textContent;
            const preguntaActualObj = preguntas[preguntaActual]; // Obtenemos la pregunta actual
            if (respuestaSeleccionada === preguntaActualObj.correcta0) {
                puntos++;
                console.log("¡Respuesta correcta!");
            } else {
                console.log("Respuesta incorrecta. Estudia más.");
            }
            // Mostramos la siguiente pregunta si hay más
            preguntaActual++;
            if (preguntaActual < preguntas.length) {
                mostrarPregunta(preguntaActual);
            } else {
                console.log("Fin del juego. Puntuación final: " + puntos);
            }
        });
    });
}

//Crea una función para randomizar las respuestas
function shuffleAnswers(preguntas) {
    console.log("Aleatorizando las respuestas para la pregunta: " + preguntas.pregunta);
    // crea una nueva lista que contenga las respuestas
    const respuestaNew = [preguntas.correcta0, preguntas.incorrecta1, preguntas.incorrecta2];
    //luego le hago un orden random a la lista de respuestas
    return respuestaNew.sort(()=>Math.random()-0.5);
}
