window.addEventListener('DOMContentLoaded', function(){
    const busqueda = document.querySelector('#input-busqueda');
    const preguntas = document.querySelectorAll('.contenedor-pregunta .pregunta');
    const contenedores = document.querySelectorAll('.contenedor-pregunta');
    const resultado = document.querySelector('#resultado-busqueda');

    busqueda.addEventListener('input', buscar)

    function buscar(){
        console.log(resultado);
        const palabraBuscada = busqueda.value.toLowerCase();
        const palabramin = removeAccents(palabraBuscada);
    
        if(!palabraBuscada){
        for(contenedor of contenedores){
                    contenedor.style.display = 'block';
                }
        }else{
            for(contenedor of contenedores){
                contenedor.style.display = 'none';
            }
        }
        
        for(let pregunta of preguntas){
            let textoPregunta = pregunta.innerHTML;
            let textmin = textoPregunta.toLowerCase();
            let textmin1 = removeAccents(textmin);

            if(textmin1.indexOf(palabramin) !== -1 ){
                console.log(pregunta.parentElement)
                pregunta.parentElement.style.display = 'block';
                resultado.innerHTML = '';

            }else{
                
                resultado.innerHTML = "No se encontraron más resultados";
        }
        }
       


    }
});

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 