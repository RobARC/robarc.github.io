const enlaces = document.querySelectorAll(menu-li);
const imagenes = document.querySelectorAll(image);

enlaces.forEach((enlace, index) =>{
    enlace.addEventListener('click', (event) =>{
        event.preventDefault();
        ocultarImagenes();
        mostrarImagen(index);
    });
});

function ocultarImagenes(){
    imagenes.forEach((imagen) =>{
        imagen.style.display = 'none';
    });
}

function mostrarImagen(index) {
    imagenes[index].style.display = 'block';
}