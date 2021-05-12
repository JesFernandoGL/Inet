const imagenes =  document.querySelectorAll('.img-min');
const contenedores =  document.querySelectorAll('.texto-principal');
const imgPrincipal =  document.querySelector('#img-grande');


for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', cambiarContenido);
}

function cambiarContenido(){
    const srcImg = this.src;
    const srcImgGrande = srcImg.replace("min", "wide");
    const index = this.id;
    for(let i = 0; i < contenedores.length; i++){
        contenedores[i].classList.remove('activo');
        contenedores[index - 1].classList.add('activo');
    }

    imgPrincipal.src = srcImgGrande;

    console.log(this.id)

}