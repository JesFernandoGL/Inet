window.addEventListener('DOMContentLoaded', function(){
    const respuesta = document.querySelectorAll('.contenedor-pregunta .respuesta');
    const contenedor = document.querySelectorAll('.contenedor-pregunta');

    for(let i = 0; i < contenedor.length; i++){
        contenedor[i].addEventListener('click', desplegar);
    }

    function desplegar(){
        let respuesta = this.firstElementChild.nextElementSibling;
        respuesta.classList.toggle('visible');
        
        if(respuesta.style.maxHeight){
            respuesta.style.maxHeight = null
        }else{
            respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
        }
    }
});