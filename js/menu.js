const btnMenu = document.getElementById("menu-btn");
const menuNav =  document.getElementById("menu");


btnMenu.addEventListener("click", mostrarMenu);

function mostrarMenu(){
    menuNav.classList.toggle('mostrar-menu')
}