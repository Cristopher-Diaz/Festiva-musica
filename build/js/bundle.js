document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
})

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach( function(enlace) {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e.target.attributes.href.value);

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior:'smooth'
            });
        })
    })
}

function navegacionFija(){

    const barraNav = document.querySelector('.header')

    //Registrar el intersection observer 
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            console.log('esta visible');
            barraNav.classList.remove('fijar-nav')
        }else{
            console.log('Ya no se ve')
            barraNav.classList.add('fijar-nav')
        }
    });
    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'))
}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId  = i;

        //Anexo de funcion mostrrImagen
        imagen.onclick = mostrarImagen;
        
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista)
    }
}

function mostrarImagen(e){
    const id = parseInt( e.target.dataset.imagenId );

    // Generar la imagen

    const imagen = document.createElement('IMG');
    imagen.src = `src/img/grande/${id}.jpg`

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('modalImg')

    //Cuando se da click en el overlay se cierra la img

    overlay.onclick = function(){
        overlay.remove();
    }

    // TODO: boton para cerrar la img
    const cerrarImg = document.createElement('P');
    cerrarImg.textContent = 'X';
    cerrarImg.classList.add('btn-cerrar');

    // TODO: funcionalidad btn-cerrar

    cerrarImg.onclick = function (){
        overlay.remove();
    }

    overlay.appendChild(cerrarImg);

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}


