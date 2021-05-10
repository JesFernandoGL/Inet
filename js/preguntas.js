window.addEventListener('DOMContentLoaded', function(){
    const respuesta = document.querySelectorAll('.contenedor-pregunta .respuesta');
    const contenedor = document.querySelectorAll('.contenedor-pregunta');

    for(let i = 0; i < contenedor.length; i++){
        contenedor[i].addEventListener('click', desplegar);
    }

    function desplegar(e){
        let cont = this.firstElementChild.nextElementSibling;
        cont.classList.toggle('visible')

    }
});