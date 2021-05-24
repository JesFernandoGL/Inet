const btns = document.querySelectorAll('.btn-marcas');
const btnTodos = document.querySelector('#btn-todos');
const productos = document.querySelectorAll('.producto');
const limiteProductos = 6;

productos.forEach(producto => {
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


