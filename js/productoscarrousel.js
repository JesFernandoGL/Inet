const btnsPrev = document.querySelectorAll('.botones-carrousel-productos .btn-previous');
const btnsNext = document.querySelectorAll('.botones-carrousel-productos .btn-next');
const producto = document.querySelector('.producto');


const productoSiguiente = (e) =>  {
    ;
    
    const carrousel = e.target.parentElement.previousElementSibling;
    const sizeProduct = producto.clientWidth;
    
    carrousel.scrollLeft += sizeProduct+16;

    const sizeCarrousel = carrousel.scrollWidth;
    const posicionCarrousel = carrousel.scrollLeft + carrousel.clientWidth


    if(posicionCarrousel == sizeCarrousel){
        
        e.target.style.opacity = "30%";
    }else{
        e.target.style.opacity = "100%"
    }
    
   
    
}

const productoAnterior = (e) =>  {
    const carrousel = e.target.parentElement.previousElementSibling;
    const sizeProduct = producto.clientWidth;
    carrousel.scrollLeft -= sizeProduct+16;

    const posicionCarrousel = carrousel.scrollLeft;

    if(posicionCarrousel == 0){
        
        e.target.style.opacity = "30%";
    }else{
        e.target.style.opacity = "100%"
    } 
}

btnsPrev.forEach(btn => {
    btn.addEventListener('click', productoAnterior)    
});

btnsNext.forEach(btn => {
    btn.addEventListener('click', productoSiguiente)    
});



