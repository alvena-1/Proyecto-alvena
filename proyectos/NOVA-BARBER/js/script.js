// ========================================
// NOVA BARBER - JAVASCRIPT
// ========================================


// ---------- SCROLL SUAVE ----------

const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace => {

    enlace.addEventListener('click', function (evento) {

        evento.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ---------- ANIMACIÓN AL HACER SCROLL ----------

const elementos = document.querySelectorAll(
    '.service-card, .gallery-container img, .about-content'
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add('visible');

            observador.unobserve(entrada.target);
        }

    });

}, {
    threshold: 0.15
});


elementos.forEach(elemento => {

    elemento.classList.add('scroll-hidden');

    observador.observe(elemento);

});


// ---------- BOTÓN VOLVER ARRIBA ----------

const botonArriba = document.createElement('button');

botonArriba.innerHTML = '↑';

botonArriba.classList.add('boton-arriba');

botonArriba.setAttribute(
    'aria-label',
    'Volver arriba'
);

document.body.appendChild(botonArriba);


window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        botonArriba.classList.add('mostrar');

    } else {

        botonArriba.classList.remove('mostrar');

    }

});


botonArriba.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// ---------- MENSAJE DE CARGA ----------

console.log('NOVA BARBER cargada correctamente 🚀');

// ========================================
// MENÚ HAMBURGUESA
// ========================================

const menuToggle = document.getElementById('menu-toggle');

const navLinks = document.getElementById('nav-links');


menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');


    // Cambiamos el icono
    if (navLinks.classList.contains('active')) {

        menuToggle.textContent = '✕';

        menuToggle.setAttribute(
            'aria-label',
            'Cerrar menú'
        );

    } else {

        menuToggle.textContent = '☰';

        menuToggle.setAttribute(
            'aria-label',
            'Abrir menú'
        );

    }

});