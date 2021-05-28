const imagenesCarrousel = document.querySelectorAll('.hero-img');

function resetearCarrousel(){
    imagenesCarrousel[0].style.left ='0%';
    imagenesCarrousel[1].style.left ='100%';
    imagenesCarrousel[2].style.left ='200%';
}



const intervalo = setInterval(carrousel,4000);




function carrousel(){
    /* imagenesCarrousel.forEach(img => {
        const posicion = parseInt(img.style.left);
        img.style.left = posicion - 100 + '%';
        console.log(img.style.left)
        
    }); */
    const posicionFinal = parseInt(imagenesCarrousel[2].style.left)
    for(let i = 0; i < imagenesCarrousel.length; i++){
        const posicion = parseInt(imagenesCarrousel[i].style.left);
        
        imagenesCarrousel[i].style.left = posicion - 100 + '%';

        if(posicionFinal <=  0){
            resetearCarrousel();
        }    

       /* if(posicionfinal >= 0){
            imagenesCarrousel[i].style.left = posicion - 50 + '%';       
        }else
        {
            imagenesCarrousel[0].style.left ='0%';
            imagenesCarrousel[1].style.left ='100%';
            imagenesCarrousel[2].style.left = '200%';

        }  */
    }
    

}

resetearCarrousel();
