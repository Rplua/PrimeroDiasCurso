//Fase 1

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

//Si se pulsa el botón nos tiene que salir un prompt

const botStart = document.getElementById("empezar");
//creamos un evento cuando se pulsé el botón que llame
//  a la función empiezaElJuego
botStart.addEventListener("click",(empiezaElJuego));
//cuando se llame a la función le pasamos por parámetro
//la lista de objectos para analizarla


function empiezaElJuego(){
    //Creamos una variable puntuación para que nos de si es fallado o no
    let puntos = 0;
    
    //recorremos la array de objectos 
    for(let i = 0; i < preguntas.length; i++){

        //creamos una array con las respuestas mezcladas
        let respuestasOrdenadas = shuffleAnswers(preguntas[i])
        //obtengo la posición de la respuesta correcta para poder usarla como numero
        const correctaIndex = respuestasOrdenadas.findIndex(respuesta => respuesta === preguntas[i].correcta0);

        //hacemos un prompt para pedir la respuesta junto a las preguntas
        let respuestas = prompt(preguntas[i].pregunta + "\n"
        + " 1. " + respuestasOrdenadas[0] + "\n" + " 2. " + respuestasOrdenadas[1] + "\n" + " 3. " + respuestasOrdenadas[2]);

        // Verificar si la opción seleccionada es correcta
        if(respuestas == (correctaIndex + 1)){ // Sumamos 1 porque las opciones se muestran desde 1, no desde 0
            puntos++;
            console.log("Correcto");
        } else {
            alert("Muy mal, estudia más!!");
        }
    }
    alert("tu puntuación es : " + puntos);
}
//Crea una función para randomizar las respuestas
function shuffleAnswers(preguntas) {
    // crea una nueva lista que contenga las respuestas
    const respuestaNew = [preguntas.correcta0,preguntas.incorrecta1,preguntas.incorrecta2];
    //luego le hago un orden random a la lista de respuestas
    return respuestaNew.sort(()=>Math.random()-0.5);
}