const btns = document.querySelectorAll('.btn-marcas');
const limites = document.querySelectorAll('.limite');
/* const btnTodos = document.querySelector('#btn-todos'); */
/* const productos = document.querySelectorAll('.producto'); */


limites.forEach(limite => {
    limite.addEventListener('click', function(e){
    let limiteProductos = limite.value;
    const productos = e.target.parentElement.parentElement.nextElementSibling.children;
   
    for(let i = 0; i < productos.length; i++){
        productos[i].classList.add('hidden');
    } 
    
    if(limiteProductos > productos.length){
        limiteProductos = productos.length
        console.log(limiteProductos);
        for(let i = 0; i < limiteProductos;i++){
            productos[i].classList.add('visible');
            productos[i].classList.remove('hidden');
    
    
        }
        
        
    }else{
        for(let i = 0; i < limiteProductos;i++){
        productos[i].classList.add('visible');
        productos[i].classList.remove('hidden');


    }
}

    


    console.log(limiteProductos);
    console.log(productos);
})
});






btns.forEach(btn => {
    btn.addEventListener('click', filtrarMarca)
    
});


function filtrarMarca(e){
    const filtroMarca = e.target.id;
    const productos = e.target.parentElement.nextElementSibling.children;
    for(let i=0;i < productos.length;i++){
        if(productos[i].classList.contains(filtroMarca)){
            productos[i].classList.add('visible');
            productos[i].classList.remove('hidden');
        }else{
            productos[i].classList.add('hidden')
            productos[i].classList.remove('visible');   
        }
    }    
}









/* productos.forEach(producto => {
    producto.classList.add('hidden');
    
});

for(let i = 0; i < limiteProductos; i++){
    productos[i].classList.add('visible');
    productos[i].classList.remove('hidden');
}

btns.forEach(btn => {
    btn.addEventListener('click', filtrar)
    

});

btnTodos.addEventListener('click', eliminarFiltro);

function filtrar(e){
    const filtroMarca = e.target.id;
    productos.forEach(producto => {
        if(producto.classList.contains(filtroMarca)){
            producto.classList.add('visible');
            producto.classList.remove('hidden');
        }else{
            producto.classList.add('hidden')
            producto.classList.remove('visible');   
        }
        console.log(filtroMarca);
        
    });
}

btnTodos.addEventListener('click', eliminarFiltro);

function eliminarFiltro(){
    for(let i = 0; i < productos.length; i++){
        productos[i].classList.add('hidden');
    }

    for(let i = 0; i < limiteProductos; i++){
        productos[i].classList.add('visible');
        productos[i].classList.remove('hidden');
    }    
}
 */

