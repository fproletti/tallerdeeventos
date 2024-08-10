document.addEventListener('DOMContentLoaded', () => {

    let boton= document.querySelector("button");

    function alertSaludo() {
        alert("Hola soy el saludo");
    }
    
    boton.addEventListener("click", alertSaludo)
});