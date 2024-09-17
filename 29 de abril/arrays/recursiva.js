// Función recursiva: se llama así misma
//Caso base: fin de la función
//Caso general: pongo el problema en función de una llamada a si misma
//Ejemplo: factorial
//Caso base: 1 el factorial de 1 es 1
//Caso general: el factorial de un número es n* n- 1;

function factorial(numero){
    if(numero === 1){
        return 1;
    }else{
        return numero*factorial(numero - 1);
    }
}
console.log(factorial(5));

//Anagrama:
//caso base: el anagrama de una letra es esa letra
//caso general: cada letra de la palabra conectada con el anagrama del resto
//el tamaño de la función recursiva tiene que ser reducido
function anagrama(string){
    if(string.length == 1){
        return [string];
    }else{
        //creo una lista vacía
        let res = []
        //recorro la lista
        for(let i = 0; i < string.length; i++){
            //calculo el anagrama de las palabras
            let resto = anagrama(string.slice(0,i) + string.slice(i + 1) );
            for(let ana of resto){
                //lo meto dentro de la nueva lista
                res.push(string.at(i)+ ana);
            }
        }
        return res;
    }
}

console.log(anagrama("hola"));
console.log(anagrama("abcd"));