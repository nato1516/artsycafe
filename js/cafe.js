//& INFORMACIÓN DE LOS PRODUCTOS

const productos = [
    {
        nombre: "Tierra Café",
        imagen: "img/cafe1.jpg",
        precio: "₡7 000",
        descripcion: "Un café artesanal con un perfil equilibrado y un sabor que refleja la esencia de nuestra tierra.",
        detalles: "Café de origen costarricense · Tueste artesanal · Presentación 250 g"
    },
    {
        nombre: "Eco Brew",
        imagen: "img/cafe2.jpg",
        precio: "₡8 500",
        descripcion: "Una experiencia de café especial que combina aromas delicados con un sabor suave y agradable.",
        detalles: "Café de altura · Tueste medio · Presentación 250 g"
    },
    {
        nombre: "Montaña Oro",
        imagen: "img/cafe3.jpg",
        precio: "₡6 500",
        descripcion: "Café de montaña con notas tradicionales y un cuerpo equilibrado para disfrutar en cualquier momento.",
        detalles: "Café seleccionado · Tueste artesanal · Presentación 250 g"
    },
    {
        nombre: "Kive Blend",
        imagen: "img/cafe4.jpg",
        precio: "₡9 000",
        descripcion: "Una mezcla especial de granos seleccionados que ofrece una taza aromática y llena de personalidad.",
        detalles: "Mezcla de granos · Tueste especial · Presentación 250 g"
    },
    {
        nombre: "Costa Café",
        imagen: "img/cafe5.jpg",
        precio: "₡7 500",
        descripcion: "Una propuesta inspirada en la tradición cafetalera costarricense, con un aroma intenso y agradable.",
        detalles: "Café costarricense · Tueste medio · Presentación 250 g"
    },
    {
        nombre: "Finca El Puente",
        imagen: "img/cafe6.jpg",
        precio: "₡10 000",
        descripcion: "Un café especial de finca, elaborado para quienes disfrutan de sabores únicos y una experiencia artesanal.",
        detalles: "Café de finca · Selección especial · Presentación 250 g"
    }
];


//& ELEMENTOS DEL DOM

const modalProducto = document.querySelector('#modalProducto');
const cerrarModal = document.querySelector('#cerrarModal');

const imagenModal = document.querySelector('#imagenModal');
const nombreModal = document.querySelector('#nombreModal');
const precioModal = document.querySelector('#precioModal');
const descripcionModal = document.querySelector('#descripcionModal');
const detallesModal = document.querySelector('#detallesModal');


//& ABRIR MODAL

const botonesVer = document.querySelectorAll('.verProducto');

botonesVer.forEach((boton, index) => {

    boton.addEventListener('click', (e) => {

        e.preventDefault();

        const producto = productos[index];

        imagenModal.src = producto.imagen;
        imagenModal.alt = producto.nombre;

        nombreModal.textContent = producto.nombre;
        precioModal.textContent = producto.precio;
        descripcionModal.textContent = producto.descripcion;
        detallesModal.textContent = producto.detalles;

        modalProducto.classList.add('activa');

    });

});


//& CERRAR MODAL

cerrarModal.addEventListener('click', () => {
    modalProducto.classList.remove('activa');
});


// Cerrar al hacer clic fuera del contenido

modalProducto.addEventListener('click', (e) => {

    if (e.target === modalProducto) {
        modalProducto.classList.remove('activa');
    }

});


// Cerrar con ESC

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        modalProducto.classList.remove('activa');
    }

});


//& ELEMENTOS DEL DOM

const carrito = document.querySelector('#carrito');
const carritoFondo = document.querySelector('#carritoFondo');

const abrirCarrito = document.querySelector('#abrirCarrito');
const cerrarCarrito = document.querySelector('#cerrarCarrito');

const productosCarrito = document.querySelector('#productosCarrito');
const cantidadCarrito = document.querySelector('#cantidadCarrito');

const subtotalCarrito = document.querySelector('#subtotalCarrito');
const totalCarrito = document.querySelector('#totalCarrito');

const btnSeguirComprando = document.querySelector('#btnSeguirComprando');


//& RECUPERAR CARRITO DEL LOCALSTORAGE

let carritoCompras = JSON.parse(localStorage.getItem('carrito')) || [];


//& FORMATO DE PRECIOS

function formatoPrecio(precio) {
    return precio.toLocaleString('es-CR', {
        style: 'currency',
        currency: 'CRC',
        maximumFractionDigits: 0
    });
}


//& GUARDAR CARRITO

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}


//& ABRIR CARRITO

function mostrarCarrito() {
    carrito.classList.add('activo');
    carritoFondo.classList.add('activo');
}


//& CERRAR CARRITO

function ocultarCarrito() {
    carrito.classList.remove('activo');
    carritoFondo.classList.remove('activo');
}

abrirCarrito.addEventListener('click', mostrarCarrito);

cerrarCarrito.addEventListener('click', ocultarCarrito);

carritoFondo.addEventListener('click', ocultarCarrito);

btnSeguirComprando.addEventListener('click', ocultarCarrito);


//& AGREGAR PRODUCTOS

function agregarProducto(id) {

    const producto = productos[id];

    if (!producto) return;

    const precio = Number(producto.precio.replace(/[^\d]/g, ''));

    const productoExistente = carritoCompras.find(item => Number(item.id) === Number(id));

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carritoCompras.push({
            id: Number(id),
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: precio,
            cantidad: 1
        });

    }

    guardarCarrito();
    actualizarCarrito();

}


//& EVENTOS DE LOS BOTONES DE COMPRA

document.addEventListener('click', (e) => {

    const boton = e.target.closest('.comprarProducto');

    if (!boton) return;

    e.preventDefault();

    const id = Number(boton.dataset.id);

    agregarProducto(id);

    mostrarCarrito();

});


//& MOSTRAR PRODUCTOS DEL CARRITO

function mostrarProductos() {

    productosCarrito.innerHTML = '';

    if (carritoCompras.length === 0) {

        productosCarrito.innerHTML = `
            <div class="carritoVacio">
                <h3>Tu carrito está vacío</h3>
                <p>Descubre nuestros cafés y encuentra tu favorito.</p>
            </div>
        `;

        return;

    }

    carritoCompras.forEach(producto => {

        const item = document.createElement('div');

        item.className = 'itemCarrito';

        item.innerHTML = `
            <div class="imagenCarrito">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <div class="infoCarrito">

                <h3>${producto.nombre}</h3>

                <p>${formatoPrecio(producto.precio)}</p>

                <div class="cantidadCarrito">

                    <button type="button" class="restarProducto" data-id="${producto.id}">
                        -
                    </button>

                    <span>${producto.cantidad}</span>

                    <button type="button" class="sumarProducto" data-id="${producto.id}">
                        +
                    </button>

                </div>

            </div>

            <button type="button" class="eliminarProducto" data-id="${producto.id}">
                &times;
            </button>
        `;

        productosCarrito.appendChild(item);

    });

}


//& AUMENTAR, DISMINUIR Y ELIMINAR PRODUCTOS

productosCarrito.addEventListener('click', (e) => {

    const boton = e.target.closest('button');

    if (!boton) return;

    const id = Number(boton.dataset.id);

    if (!Number.isInteger(id)) return;

    const indice = carritoCompras.findIndex(producto => Number(producto.id) === id);

    if (indice === -1) return;


    // AUMENTAR CANTIDAD

    if (boton.classList.contains('sumarProducto')) {

        carritoCompras[indice].cantidad++;

    }


    // DISMINUIR CANTIDAD

    else if (boton.classList.contains('restarProducto')) {

        carritoCompras[indice].cantidad--;

        if (carritoCompras[indice].cantidad <= 0) {

            carritoCompras.splice(indice, 1);

        }

    }


    // ELIMINAR PRODUCTO

    else if (boton.classList.contains('eliminarProducto')) {

        carritoCompras.splice(indice, 1);

    }

    else {

        return;

    }


    guardarCarrito();

    actualizarCarrito();

});


//& CALCULAR SUBTOTAL Y TOTAL

function calcularTotal() {

    let subtotal = 0;

    let cantidadTotal = 0;

    carritoCompras.forEach(producto => {

        subtotal += producto.precio * producto.cantidad;

        cantidadTotal += producto.cantidad;

    });

    subtotalCarrito.textContent = formatoPrecio(subtotal);

    totalCarrito.textContent = formatoPrecio(subtotal);

    cantidadCarrito.textContent = cantidadTotal;

}


//& ACTUALIZAR CARRITO

function actualizarCarrito() {

    mostrarProductos();

    calcularTotal();

}


//& FINALIZAR COMPRA (DEMO)

document.querySelector('#btnFinalizar').addEventListener('click', () => {

    if (carritoCompras.length === 0) {

        alert('Tu carrito está vacío.');

        return;

    }

    alert('Tu compra tiene un total de ' + totalCarrito.textContent +
        '. Próximamente podrás completar tu pedido.');

});


//& INICIALIZAR CARRITO

actualizarCarrito();
