document.addEventListener('DOMContentLoaded', () => {

    let boton= document.querySelector("button");

    function alertSaludo() {
        alert("Hola soy el saludo");
        
    }
    

    boton.addEventListener("click", (event) => {
        alertSaludo();
        event.stopPropagation();
     })

    let div= document.querySelector("div");

    function alertDiv() {
        alert("Hola Soy el div");
        
    }

    div.addEventListener("click", alertDiv);


});