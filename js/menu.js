//& MENU RESPONSIVE

const menuToggle = document.querySelector('.menuToggle');
const close = document.querySelector('.close');
const navLink = document.querySelector('.navLink');
const navDirec = document.querySelectorAll('.navDirec');

//! Abrir menú
menuToggle.addEventListener('click', () => {
    navLink.classList.add('activo');
});

//! Cerrar menú
close.addEventListener('click', () => {
    navLink.classList.remove('activo');
});

//! Cerrar al seleccionar una opción
navDirec.forEach(link => {
    link.addEventListener('click', () => {
        navLink.classList.remove('activo');
    });
});