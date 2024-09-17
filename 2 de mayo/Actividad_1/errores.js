//Dentro de js puede suceder errores

//hay una manera de gestionar errores
//try{...} catch(err){...}
let productos = {
    nombre : "Tuerca",
    precio: {
        PVP: 50,
        reducido: 20
    }
}
let productos2 = {
    nombre : "Tuerca",
    precio: {
        PVP: 50,
        reducido: 20
    }
}
//intenta ejecutar el código siguiente 
try{ //usarlo es buena práctica 
    let a = Math.sqrt(-1);
    console.log(productos.nombre);
    console.log(productos.presio.PVP);
//si hay un error no petes, entra al catch
}catch(err){ 
    //dentro del catch tenemos el parámetro "err" con la información del error
    console.log(err.message);
    console.log(err);
}finally{ //aunque haya ido todo bien o algún error se cierra lo que se tenga abierto
    console.log("Esto lo ejecuta siempre");
}

console.log("hola");
console.log(sumaProductos([productos,productos2]));
//4esto lanza un error porque accedemos a una propiedad que no existe 
function sumaProductos(productos){
    let suma = 0;
    for(let producto of productos){
        suma = suma + producto.precio.PVP;
    }
    return suma;
}
//Aquí se hace bien: esto no interrumpe el programa 
function sumaProductos(productos){
    try{
        let suma = 0;
        for(let producto of productos){
            suma = suma + producto.precio.PVP;
        }
        return suma;
    }catch{
        return 0; //podía devolver undefined 
    }
  
}
//lanzar errores propios 
console.log(suma(8));
try{
    console.log(suma(-8));
}catch(err){
    console.log(err.message);
}

function suma(numero){
    let suma = 0;
    if(numero < 0 || numero > 10000){
        throw new Error("Número fuera de rango inténtalo otra vez ")
    }
    for(let i = 0; i < numero; i ++){
        suma +=1;
    }
    return suma;
}
