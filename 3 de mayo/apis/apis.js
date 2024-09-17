// Consumir API -> Acceder a una API para recuperar valores
// AJAX: Una manera de acceder a una URL de manera asíncrona
 
// Ahora como se hace con 'fetch'
// Chuleta para recuperar cualquier cosa de una url que devuelve un JSON
/*
fetch(url_donde_esta_la_informacion)
      .then(response => response.json())
      .then(resultado => {
        // Aqui 'resultado' tiene ya el  json convertido a variable, la podemos usar
      })
*/
 
// Asíncrono y una promesa (Promise)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Cuando acabes lo que te he pedido ejecuta esto
    .then(json => console.log(json)); // Cuando acabes de convertirlo entra aquí
 
console.log("Hola");
 
// Ejemplo voy a usar https://randomuser.me/api que me devuelve un usuario
 
fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(resultado => {
        // Aqui 'resultado' tiene ya el  json convertido a variable, la podemos usar
        console.log(resultado);
        console.log("Hola "+resultado.results[0].name.first);
      })
 
// Ejemplo voy a usar https://rickandmortyapi.com/api/character que me devuelve personajes de rick y morty
 
fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(resultado => {
        // Aqui 'resultado' tiene ya el  json convertido a variable, la podemos usar
        console.log(resultado);
 
      })