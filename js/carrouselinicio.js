const imagenesCarrousel = document.querySelectorAll('.hero-img');
const btnAnt = document.querySelector('#btn-anterior-hero');
const btnSig = document.querySelector('#btn-siguiente-hero');
const timer = 6000;

const lengthCarrousel = imagenesCarrousel.length;


function carrousel(valor = -100){
    
       imagenesCarrousel.forEach(img => {
        const posicion = parseInt(img.style.left);
        img.style.left = posicion + valor + '%';
        const posImgFinal = parseInt(imagenesCarrousel[lengthCarrousel-1].style.left);
        const posImgInicial = parseInt(imagenesCarrousel[0].style.left); 
      if(posImgFinal < 0){
        resetearCarrousel()
    }
        
    }); 
 
}



function resetearCarrousel(){
    let posicion = 0;
    for(let i = 0; i < imagenesCarrousel.length; i++){
        imagenesCarrousel[i].style.left = posicion + '%';
        posicion += 100;
    }
}

function finalCarrousel(){
    let posicion = (lengthCarrousel-1) * -100;
    for(let i = 0; i < imagenesCarrousel.length; i++){
        imagenesCarrousel[i].style.left = posicion + '%';
        posicion += 100;
    }
}




const imgAnterior = () => {
    resetInterval();
    if(imagenesCarrousel[0].style.left == '0%'){
        finalCarrousel();

    }else{
        imagenesCarrousel.forEach(img => {
        const posicion = parseInt(img.style.left);
        img.style.left = posicion +100 + '%';        
    });
    }
    
    
}


const imgSiguiente = () => {
    resetInterval();
    carrousel(-100);
    
}



btnAnt.addEventListener('click', imgAnterior);
btnSig.addEventListener('click', imgSiguiente);

let intervalo = setInterval(carrousel,timer);

resetearCarrousel();

function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(imgSiguiente,timer);
    
}