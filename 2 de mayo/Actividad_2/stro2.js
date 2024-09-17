let nombre = document.getElementById("nombre");
nombre.oninput = function () {
    localStorage.setItem("nombre", this.value);
}
let nombreAlmacenado = localStorage.getItem("nombre");
if (nombreAlmacenado) {
    nombre.value = nombreAlmacenado;
}